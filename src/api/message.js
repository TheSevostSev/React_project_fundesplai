import { backendURL } from "./axios";

export const sendMessage = async (obj) => {
  console.log(obj);
  const response = await backendURL.post("messages", obj);
  return response.data;
};

export const listReceivedMessagesByUserId = async (id) => {
  const response = await backendURL.get("messages", {
    params: {
      userId: id,
    },
  });
  return response.data;
};
