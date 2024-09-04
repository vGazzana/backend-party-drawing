import { createClient } from "redis";

const redis = createClient();

redis.on("error", (err) => console.error("Redis Client Error:", err));

if (!redis.isOpen) {
  await redis.connect();
}

export default redis;
