import { backendURL } from "./axios";

export const loginToTheBackend = async (token) => {
  try {
    const response = await backendURL.post(
      "login",
      {},
      {
        headers: {
          Authorization: `Basic ${token}`,
        },
      }
    );
    return response;
  } catch (error) {
    return error;
  }
};
