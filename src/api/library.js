import axios from "axios";

export const backendURL = axios.create({
  baseURL: "http://localhost:8080/books",
});

const getBooks = async () => {
  const response = await backendURL.get("");
  return response.data;
};

const createBook = async (book) => {
  console.log("Book", book);
  const response = await backendURL.post("/", book);
  return response.data;
};

const editBook = async (book) => {
  const response = await backendURL.put(`/${book.id}`, book);
  return response.data;
};

const getBook = async (id) => {
  const response = await backendURL.get(`/${id}`);
  return response.data;
};

const deleteBook = async (id) => {
  const response = await backendURL.delete(`/${id}`);
  return response.data;
};

export { getBook, getBooks, createBook, editBook, deleteBook };
