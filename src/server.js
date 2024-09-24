import Fastify from "fastify";
import { getAllRoutes } from "./routes/index.js";

export default async function bootstrapServer() {
  try {
    const fastify = Fastify({
      logger: true,
    });

    for (const { prefix, route } of getAllRoutes()) {
      await fastify.register(route, { prefix });
    }
    await fastify.listen({ port: 3333, host: "0.0.0.0" });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
