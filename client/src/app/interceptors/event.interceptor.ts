import { Id } from "../(routes)/home/(routes)/[id]/context/channel.context";
import axios from "./axios.config";

export const getEventsRequest = async (serverId: Id) =>
  axios.get(`/server/${serverId}/event`);

export const createEventRequest = async (data: Event, serverId: Id) =>
  axios.post(`/server/${serverId}/event`, data);

export const updateEventRequest = async (data: Event, serverId: Id) =>
  axios.put(`/server/${serverId}/event/${data._id}`, data);

export const deleteEventRequest = async (data: Event, serverId: Id) =>
  axios.delete(`/server/${serverId}/event/${data}`);
