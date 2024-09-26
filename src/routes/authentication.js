import prisma from "../databases/prisma.js";
import { compareHash, hashPassword } from "../utils/crypto.js";

export default async function AuthenticationRoutes(fastify) {
  fastify.post("/register", async (request, reply) => {
    try {
      const { data } = request.body;

      const { email, name, password } = data;

      const emailAlreadyExists = await prisma.user.findFirst({
        where: { email },
      });

      if (emailAlreadyExists) {
        return reply.status(409).send({
          status: "warning",
          message: "Email already exists!",
          data: null,
        });
      }

      const insertedUser = await prisma.user.create({
        data: {
          email,
          name,
          password: hashPassword(password),
        },
      });

      if (!insertedUser) {
        throw new Error("An error has occurred, please try again");
      }

      return {
        status: "success",
        data: {
          user: {
            id: insertedUser.id,
            name: insertedUser.name,
            email: insertedUser.email,
          },
        },
      };
    } catch (error) {
      return {
        status: "error",
        message: error.message,
        error,
      };
    }
  });

  fastify.post("/login", async (request, reply) => {
    try {
      const { data } = request.body;

      const { email, password } = data;

      const user = await prisma.user.findFirst({
        where: { email },
      });

      if (!user) {
        return reply.status(404).send({
          status: "warning",
          message: "User not found!",
          data: null,
        });
      }

      const isPasswordValid = compareHash(
        hashPassword(password),
        user.password
      );

      if (!isPasswordValid) {
        return reply.status(401).send({
          status: "warning",
          message: "Invalid password!",
          data: null,
        });
      }

      return {
        error: false,
        data: {
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
          },
        },
      };
    } catch (error) {
      return {
        error: true,
        message: error.message,
        errorObj: { ...error },
        data: null,
      };
    }
  });
}
