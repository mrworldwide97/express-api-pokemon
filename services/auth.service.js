import { setResponse, setError } from "../types/response.js";
import { UserModel } from "../models/user.model.js";
import { generateToken } from "../utils/generateJwtToken.js";

export const signupService = async (username, password) => {
  let data;
  try {
    const newUser = await UserModel.create({
      username,
      password,
    });
    const token = generateToken(newUser._id, username);
    data = setResponse(200, "User created successfully", token);
  } catch (error) {
    data = setError(500, "Unexpected error while creating user", error);
  }
  return data;
};

export const signinService = async (username, password) => {
  let data;
  try {
    const user = await UserModel.findOne({ username, password });
    if (user) {
      const token = generateToken(user._id, username);
      data = setResponse(200, "User logged successfully", token);
    } else {
      data = setResponse(403, "username or password not match", {});
    }
  } catch (error) {
    console.log(error);
    data = setError(500, "Unexpected error while signin user", error);
  }
  return data;
};
