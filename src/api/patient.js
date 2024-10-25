import axios from "axios";

export const backendURL = axios.create({
  baseURL: "http://localhost:8080/patients",
});

const getPatients = async () => {
  const response = await backendURL.get("");
  return response.data;
};

const getPatient = async (id) => {
  const response = await backendURL.get(`/${id}`);
  return response.data;
};

export { getPatient, getPatients };
