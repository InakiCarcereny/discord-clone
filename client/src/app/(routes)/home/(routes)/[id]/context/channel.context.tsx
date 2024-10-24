"use client";

import {
  createChannelRequest,
  deleteChannelRequest,
  getChannelsRequest,
} from "@/app/interceptors/channel.interceptor";
import { AxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";

export interface ChannelContextTypes {
  channels: Channel[];
  errors: string[];
  createChannel: (data: Channel) => Promise<void>;
  deleteChannel: (data: Channel) => Promise<void>;
  getChannels: (id: Id) => Promise<void>;
}

export interface Channel {
  _id: string;
  name: string;
  server: string;
}

export type Id = string;

export const ChannelContext = createContext<ChannelContextTypes | undefined>(
  undefined
);

export function useChannel() {
  const context = useContext(ChannelContext);

  if (context === undefined)
    throw new Error("useChannel must be used within a ChannelProvider");

  return context;
}

export function ChannelProvider({ children }: { children: React.ReactNode }) {
  const [channels, setChannels] = useState<Channel[]>([]);
  const [errors, setErrors] = useState([]);

  async function getChannels(id: Id) {
    try {
      const res = await getChannelsRequest(id);
      console.log(res);
      setChannels(res.data);
    } catch (err: any) {
      console.log(err);
      setErrors(err.response.data);
    }
  }

  const createChannel = async (data: Channel, id: string): Promise<void> => {
    try {
      const res = await createChannelRequest(data, id);
      setChannels((prevState) => [...prevState, res.data]);
    } catch (err: unknown) {
      if (err instanceof AxiosError && err.response) {
        setErrors(err.response.data);
      }
    }
  };

  const deleteChannel = async (data: Channel) => {
    try {
      const res = await deleteChannelRequest(data);
      if (res.status === 200) {
        setChannels((prevState) =>
          prevState.filter((channel) => channel._id !== data._id)
        );
      }
    } catch (err: any) {
      setErrors(err.response.data);
    }
  };

  return (
    <ChannelContext.Provider
      value={{
        channels,
        errors,
        createChannel,
        deleteChannel,
        getChannels,
      }}
    >
      {children}
    </ChannelContext.Provider>
  );
}
