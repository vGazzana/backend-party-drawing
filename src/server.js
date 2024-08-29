import Fastify from "fastify";

export default async function bootstrapServer() {
  try {
    const fastify = Fastify({
      logger: true,
    });

    await fastify.listen({ port: 3333, host: "0.0.0.0" });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}
