"use client";

import { useChannel } from "./context/channel.context";

import { usePathname } from "next/navigation";

import { ServerAside } from "./components/aside/ServerAside.id";
import { ServerHeader } from "./components/server-header/ServerHeader";
import { ServerFooter } from "./components/server-footer/ServerFooter";
import { ServerAsideFriends } from "./components/server-aside-friends/ServerAsideFriends";

import { useState } from "react";

import { CreateChannelModal } from "./components/create-channel-modal/CreateChannelModal";
import { CreateEventModal } from "./components/create-event-modal/CreateEventModal";

export interface FormValues {
  name: string;
  type: string;
}

export default function ServerLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const [openChannel, setOpenChannel] = useState(null);

  const { channels } = useChannel();

  const pathname = usePathname();

  const serverId = params.id;

  // const firstChannel = channels[0];

  const currentChannelId = pathname.split("/").pop();

  const currentChannel = channels.find(
    (channel) => channel._id === currentChannelId
  );

  const handleOpenChannel = (option) => {
    setOpenChannel((prevState) => (prevState === option ? null : option));
  };

  return (
    <div className="flex w-full h-full">
      <ServerAside
        serverId={serverId}
        currentChannel={currentChannel}
        handleOpenChannel={handleOpenChannel}
      />

      <div className="h-full flex-grow flex flex-col">
        <ServerHeader currentChannel={currentChannel} />

        <span className="border-[0.1px] border-[#27282b] rounded-full w-full"></span>

        <div className="flex h-full">
          <main className="flex-grow flex-col h-full items-center relative">
            {children}

            <ServerFooter currentChannel={currentChannel} />
          </main>

          <ServerAsideFriends />
        </div>
      </div>

      {openChannel && (
        <div className="absolute inset-0 h-full bg-black/70 flex items-center justify-center z-10">
          {openChannel === 3 && (
            <CreateChannelModal
              serverId={serverId}
              setOpenChannel={setOpenChannel}
            />
          )}
          {openChannel === 5 && (
            <CreateEventModal
              serverId={serverId}
              setOpenChannel={setOpenChannel}
            />
          )}
        </div>
      )}
    </div>
  );
}
