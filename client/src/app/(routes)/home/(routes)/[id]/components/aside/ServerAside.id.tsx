"use client";

import { useServer } from "@/app/(routes)/home/context/server.context";

import { ArrowDown } from "@/app/icons/ArrowDown";
import { ArrowRight } from "@/app/icons/ArrowRight";
import { Calendar } from "@/app/icons/Calendar";
import { CrossNoneBg } from "@/app/icons/CrossNoneBg";
import { Hash } from "@/app/icons/Hash";
import { Plus } from "@/app/icons/Plus";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";
import { useChannel } from "../../context/channel.context";

import { Channel } from "../../context/channel.context";
import { ServerModalOptions } from "../server-modal-options/ServerModalOptions";

export interface ServerAsideProps {
  serverId: string;
  currentChannel: Channel | undefined;
  handleOpenChannel: (option) => void;
}

export function ServerAside({
  serverId,
  currentChannel,
  handleOpenChannel,
}: ServerAsideProps) {
  const [open, setOpen] = useState(false);
  const [visibility, setVisibility] = useState(true);

  const pathname = usePathname();

  const { servers } = useServer();
  const { channels } = useChannel();

  const filteredServers = servers.filter((server) => server._id === serverId);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleVisibilityChange = () => {
    setVisibility(!visibility);
  };

  return (
    <aside className="h-screen w-[240px] bg-[#2c2d31] flex flex-col">
      <ul className="flex flex-col">
        {filteredServers.map((server) => {
          return (
            <li key={server._id} className="flex flex-col gap-8">
              <div className="flex flex-col">
                <button
                  onClick={handleClick}
                  className="flex items-center justify-between px-4 py-4 hover:bg-zinc-800 duration-200"
                >
                  <span className="text-zinc-200 font-semibold text-base relative">
                    {server.tittle}
                  </span>

                  {open && (
                    <ServerModalOptions handleOpenChannel={handleOpenChannel} />
                  )}

                  {open ? (
                    <CrossNoneBg className="text-zinc-200 h-4 w-4 font-semibold" />
                  ) : (
                    <ArrowDown className="text-zinc-200 h-4 w-4 font-semibold" />
                  )}
                </button>

                <span className="border-[0.1px] border-[#1c1d1f] rounded-full w-full"></span>
              </div>

              <div className="flex flex-col gap-2 px-4">
                <span className="border-[0.1px] border-zinc-600 rounded-full w-full"></span>
                <button className="flex items-center gap-2 px-2 py-2 hover:bg-[#323338] duration-200 rounded-[4px] hover:text-white text-gray-400 font-semibold">
                  <Calendar className="text-gray-400 h-6 w-6" />
                  Events
                </button>
                <span className="border-[0.1px] border-zinc-600 rounded-full w-full"></span>
              </div>

              <div className="flex flex-col gap-6 px-4">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between cursor-pointer group">
                    <div className="flex items-center gap-1">
                      {visibility ? (
                        <ArrowDown className="text-gray-400 h-3 w-3" />
                      ) : (
                        <ArrowRight className="text-gray-400 h-3 w-3" />
                      )}
                      <span
                        onClick={handleVisibilityChange}
                        className="text-xs font-semibold text-gray-400 group-hover:text-white"
                      >
                        TEXT CHANNELS
                      </span>
                    </div>
                    <Plus className="text-gray-400" />
                  </div>

                  {visibility ? (
                    <ul className="flex flex-col gap-1 mt-1">
                      {channels.map((channel) => {
                        return (
                          <li
                            key={channel._id}
                            className={`flex flex-col gap-2 px-2 py-1 hover:bg-[#323338] duration-200 rounded-[4px] ${
                              pathname ===
                              `/home/${channel.server}/${channel._id}`
                                ? "bg-zinc-600 text-white"
                                : "text-gray-400"
                            }`}
                          >
                            <Link
                              href={`/home/${channel.server}/${channel._id}`}
                              className="flex items-center gap-2"
                            >
                              <Hash className="text-gray-400 h-5 w-5" />
                              <span className="font-semibold truncate">
                                {channel.name}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  ) : (
                    <li
                      className={`flex items-center gap-2 mt-1 px-2 py-1 hover:bg-[#323338] duration-200 rounded-[4px] ${
                        pathname === `/home/${serverId}/${currentChannel?._id}`
                          ? "bg-zinc-600 text-white"
                          : "text-gray-400"
                      }`}
                    >
                      <Hash className="text-gray-400 h-5 w-5" />
                      <span className="font-semibold">
                        {currentChannel?.name}
                      </span>
                    </li>
                  )}
                </div>

                <div className="flex items-center justify-between cursor-pointer group">
                  <div className="flex items-center gap-1">
                    <ArrowRight className="text-gray-400 h-3 w-3" />
                    <span className="text-xs font-semibold text-gray-400 group-hover:text-white">
                      VOICE CHANNELS
                    </span>
                  </div>
                  <Plus className="text-gray-400" />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
