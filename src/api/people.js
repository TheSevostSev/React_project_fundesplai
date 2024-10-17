import axios from "axios";

export const peopleURL = axios.create({
  baseURL: "https://firstspringbootproject.onrender.com/people",
});

const getPeople = async () => {
  const response = await peopleURL.get("");
  return response.data;
};

const deletePerson = async (id) => {
  const response = await peopleURL.delete(`/${id}`);
  return response.data;
};

const createPerson = async (person) => {
  const response = await peopleURL.post(`/`, person);
  return response.data;
};

export { getPeople, deletePerson, createPerson };
