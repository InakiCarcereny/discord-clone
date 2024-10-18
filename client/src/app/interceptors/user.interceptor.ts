import axios from "./axios.config";

export const getUserInfoRequest = () => axios.get("/info");

export const updataUserInfoRequest = async (data) => axios.put("/info", data);
