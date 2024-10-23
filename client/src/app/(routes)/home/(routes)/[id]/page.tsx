"use client";

import { useEffect } from "react";
import { useChannel } from "./context/channel.context";
import { Hash } from "@/app/icons/Hash";

export default function Server({ params }: { params: { id: string } }) {
  const { getChannels, channels } = useChannel();

  const serverId = params.id;

  useEffect(() => {
    if (serverId) {
      getChannels(serverId);
    }
  }, [serverId]);

  if (!channels || channels.length === 0) {
    return <div className="h-full">No channels</div>;
  }

  const firstChannel = channels[0];

  return (
    <section className="h-full flex flex-col justify-end px-4">
      <div className="flex flex-col mb-28 gap-2">
        <Hash className="text-white h-16 w-16 rounded-full bg-zinc-600 px-2 py-2" />
        <h3 className="text-3xl text-white font-semibold">
          We welcome you to #{firstChannel.name}!
        </h3>
        <span className="text-sm text-gray-400 font-semibold">
          Here start the channel #{firstChannel.name}.
        </span>
      </div>
    </section>
  );
}
