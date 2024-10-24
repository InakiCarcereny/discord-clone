import {
  Channel,
  Id,
} from "../(routes)/home/(routes)/[id]/context/channel.context";
import axios from "./axios.config";

export const getChannelsRequest = async (serverId: Id) =>
  axios.get(`/server/${serverId}/channel`);

export const createChannelRequest = async (data: Channel, serverId: Id) =>
  axios.post(`/server/${serverId}/channel`, data);

export const updateChannelRequest = async (data) =>
  axios.put(`/channel/${data._id}`, data);

export const deleteChannelRequest = async (data) =>
  axios.delete(`/channel/${data._id}`);
