"use client";

import {
  createServerRequest,
  deleteServerRequest,
  getServersRequest,
} from "@/app/interceptors/server.interceptor";
import React, { createContext, useContext, useEffect, useState } from "react";

import { ServerContextTypes, Server } from "@/app/models/ServerContext.d";

export const ServerContext = createContext<ServerContextTypes | undefined>(
  undefined
);

export function useServer() {
  const context = useContext(ServerContext);

  if (context === undefined) {
    throw new Error("useServer must be used within a ServerProvider");
  }

  return context;
}

export function ServerProvider({ children }: { children: React.ReactNode }) {
  const [servers, setServers] = useState<Server[]>([]);
  const [error, setError] = useState<string[]>([]);

  useEffect(() => {
    async function getServers() {
      try {
        const res = await getServersRequest();
        setServers(res.data);
      } catch (err: any) {
        setError(err.response.data);
      }
    }

    getServers();
  }, []);

  const createServer = async (data: Server) => {
    try {
      const res = await createServerRequest(data);
      setServers((prevState) => [...prevState, res.data]);
    } catch (err: any) {
      console.log(err);
      setError(err.response.data);
    }
  };

  const deleteServer = async (data: Server) => {
    try {
      const res = await deleteServerRequest(data);
      if (res.status === 200) {
        setServers((prevState) =>
          prevState.filter((server) => server._id !== data._id)
        );
      }
    } catch (err: any) {
      setError(err.response.data);
    }
  };

  return (
    <ServerContext.Provider
      value={{
        servers,
        error,
        createServer,
        deleteServer,
      }}
    >
      {children}
    </ServerContext.Provider>
  );
}
