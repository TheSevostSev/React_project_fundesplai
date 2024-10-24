import axios from "axios";

export const backendURL = axios.create({
  baseURL: "http://localhost:8080/",
});

const getTeams = async () => {
  const response = await backendURL.get("equipos");
  return response.data;
};

const getTeam = async (id) => {
  const response = await backendURL.get(`equipos/${id}`);
  return response.data;
};

export { getTeams, getTeam };
