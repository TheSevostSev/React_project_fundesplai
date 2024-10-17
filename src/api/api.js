import axios from "axios";

export const i = axios.create({
  baseURL: "https://narutodb.xyz/api/character",
});

const getCharacter = async (id) => {
  const response = await i(`/${id}`);
  return response.data;
};

const getCharacters = async (page) => {
  const response = await i(`?page=${page}`);
  return response.data;
};

export { getCharacter, getCharacters };
