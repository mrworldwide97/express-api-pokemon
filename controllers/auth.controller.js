import { signinService, signupService } from "../services/auth.service.js";

export const signup = async (req, res) => {
  let response;
  const { username, password } = req.body;
  if (username && password) {
    response = await signupService(username, password);
    res.status(response.code).send({
      message: response.message,
      data: response.data,
      error: response.error,
    });
  } else {
    res.status(403).send("Parameter 'username and password' is required");
  }
};

export const signin = async (req, res) => {
  let response;
  const { username, password } = req.body;
  if (username && password) {
    response = await signinService(username, password);
    res.status(response.code).send({
      message: response.message,
      data: response.data,
      error: response.error,
    });
  } else {
    res.status(403).send("Parameter 'username and password' is required");
  }
};
