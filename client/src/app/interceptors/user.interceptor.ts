import axios from "./axios.config";

export const getUserRequest = async (data) =>
  axios.get(`/user/${data.id}`, data);
