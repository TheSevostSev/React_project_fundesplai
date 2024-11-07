import { backendURL } from "./axios";

export const listUsers = async () => {
  try {
    const response = await backendURL.get(`users`);
    return response;
  } catch (error) {
    return error;
  }
};
