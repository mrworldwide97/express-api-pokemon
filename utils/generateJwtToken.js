import Jwt from "jsonwebtoken";
const JWTSecret = "jkshdnvn2zohdf902pzx32rfzp9hf";

export function generateToken(id, username) {
  const payload = { id, username };
  const token = Jwt.sign(payload, JWTSecret, {
    expiresIn: "24h",
  });
  return token;
}
