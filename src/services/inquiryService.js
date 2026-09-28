import api from "../lib/axios";


export const createInquiry = async (formData) => {
  const response = await api.post("/inquiries", formData);

  return response.data;
};


export const getInquiries = async () => {
  const response = await api.get("/inquiries");

  return response.data;
};


export const updateInquiry = async (id, data) => {
  const response = await api.patch(`/inquiries/${id}`, data);

  return response.data;
};


export const deleteInquiry = async (id) => {
  const response = await api.delete(`/inquiries/${id}`);

  return response.data;
};


