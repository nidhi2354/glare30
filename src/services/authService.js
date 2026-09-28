import api from "../lib/axios";

export const loginAdmin = async (credentials) => {
  const response = await api.post("/admin/login", credentials);

  return response.data;
};

export const registerAdmin = async (data) => {
  const response = await api.post("/admin/register", data);

  return response.data;
};