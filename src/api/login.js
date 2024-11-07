import { backendURL } from "./axios";

export const loginToTheBackend = async (user) => {
  const response = await backendURL.post("login", user);
  return response.data;
};
