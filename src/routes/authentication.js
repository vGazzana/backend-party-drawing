import prisma from "../databases/prisma.js";

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
          password,
        },
      });

      return {
        status: "success",
        data: null,
      };
    } catch (error) {
      return {
        status: "error",
        message: error.message,
        error,
      };
    }
  });
}
