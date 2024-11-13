import { backendURL } from "./axios";

export const listUsers = async () => {
  const response = await backendURL.get(`users`);
  return response.data;
};
