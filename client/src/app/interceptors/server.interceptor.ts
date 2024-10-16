import axios from "./axios.config";

import { Server } from "@/app/models/ServerContext.d";

export const getServersRequest = async () => axios.get("/server");

export const createServerRequest = async (data: Server) =>
  axios.post("/server", data);

export const updateServerRequest = async (data: Server) =>
  axios.put(`server/${data._id}`, data);

export const deleteServerRequest = async (data: Server) =>
  axios.delete(`server/${data._id}`);
