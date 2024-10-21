"use client";

import { useEffect } from "react";
import { useServer } from "../../context/server.context";
import { useChannel } from "./context/channel.context";

export default function Server({ params }: { params: { id: string } }) {
  const { getChannels, channels } = useChannel();

  const serverId = params.id;

  useEffect(() => {
    getChannels(serverId);
  }, [serverId]);

  return <div className="h-full">hola</div>;
}
