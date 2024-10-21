import axios from "./axios.config";

export const getChannelsRequest = async (serverId) =>
  axios.get(`/server/${serverId}/channel`);

export const createChannelRequest = async (data) =>
  axios.post("/channel", data);

export const updateChannelRequest = async (data) =>
  axios.put(`/channel/${data._id}`, data);

export const deleteChannelRequest = async (data) =>
  axios.delete(`/channel/${data._id}`);
