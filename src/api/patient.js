import axios from "axios";

export const backendURL = axios.create({
  baseURL: "http://localhost:8080/patients",
});

const getPatients = async () => {
  const response = await backendURL.get("");
  return response.data;
};

const createPatient = async (patient) => {
  const response = await backendURL.post("/", patient);
  return response.data;
};

const editPatient = async (patient) => {
  const response = await backendURL.put(`/${patient.id}`, patient);
  return response.data;
};

const getPatient = async (id) => {
  const response = await backendURL.get(`/${id}`);
  return response.data;
};

const deletePatient = async (id) => {
  const response = await backendURL.delete(`/${id}`);
  return response.data;
};

export { getPatient, getPatients, createPatient, editPatient, deletePatient };
