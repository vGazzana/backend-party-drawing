import { createHash } from "node:crypto";

function hashPassword(password) {
  const hash = createHash("sha256");
  hash.update(password);
  return hash.digest("hex");
}

function compareHash(hash, toBeCompared) {
  return hash === toBeCompared;
}

export { hashPassword, compareHash };
