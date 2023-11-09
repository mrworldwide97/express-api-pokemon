export let responseData = {
  data: null,
  message: null,
  code: null,
};

export let errorResponse = {
  message: null,
  code: null,
  error: null,
};

export const setResponse = (code, message, data) => {
  responseData.code = code;
  responseData.message = message;
  responseData.data = data;
  return responseData;
};

export const setError = (code, message, error) => {
  errorResponse.code = code;
  errorResponse.message = message;
  errorResponse.error = error;

  return errorResponse;
};
