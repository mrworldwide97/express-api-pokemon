import Jwt from "jsonwebtoken";
const JWTSecret = "jkshdnvn2zohdf902pzx32rfzp9hf";

export const authenticateToken = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    let token;
    if (authHeader.includes("Bearer")) token = authHeader.split(" ")[1];
    else token = authHeader;
    try {
      const payload = Jwt.verify(token, JWTSecret);
    } catch (error) {
      res.status(401).send("Your token is not valid, please signin again.");
      return;
    }
  } else {
    res
      .status(401)
      .send(
        "It looks like you need to log in or authenticate to access this feature. Please log in or signup."
      );
    return;
  }
  next();
};
