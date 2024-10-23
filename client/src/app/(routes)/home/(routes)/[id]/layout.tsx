"use client";

import { useServer } from "../../context/server.context";

import { ArrowDown } from "@/app/icons/ArrowDown";
import { Calendar } from "@/app/icons/Calendar";
import { ArrowRight } from "@/app/icons/ArrowRight";
import { Plus } from "@/app/icons/Plus";
import { Hash } from "@/app/icons/Hash";
import { Camp } from "@/app/icons/Camp";
import { Users } from "@/app/icons/Users";
import { Tray } from "@/app/icons/Tray";
import { Search } from "@/app/icons/Search";
import { useChannel } from "./context/channel.context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { CrossNoneBg } from "@/app/icons/CrossNoneBg";
import { InviteUser } from "@/app/icons/InviteUser";
import { Settings } from "@/app/icons/Settings";
import { PlusBg } from "@/app/icons/PlusBg";
import { Folder } from "@/app/icons/Folder";
import { Trash } from "@/app/icons/Trash";

const options = [
  {
    id: 1,
    label: "Invite people",
    icon: InviteUser({}),
  },
  {
    id: 2,
    label: "Server settings",
    icon: Settings({}),
  },
  {
    id: 3,
    label: "Create channel",
    icon: PlusBg({}),
  },
  {
    id: 4,
    label: "Create category",
    icon: Folder({}),
  },
  {
    id: 5,
    label: "Create event",
    icon: Calendar({}),
  },
  {
    id: 6,
    label: "Delete server",
    icon: Trash({}),
  },
];

export default function ServerLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const [open, setOpen] = useState(false);

  const [visibility, setVisibility] = useState(true);

  const { servers } = useServer();

  const { channels } = useChannel();

  const pathname = usePathname();

  const serverId = params.id;

  const filteredServers = servers.filter((server) => server._id === serverId);

  const firstChannel = channels[0];

  const currentChannelId = pathname.split("/").pop(); // Extrae el último segmento de la URL

  // Filtrar los canales del servidor actual para obtener el canal por ID
  const currentChannel = channels.find(
    (channel) => channel._id === currentChannelId
  );

  const handleClick = () => {
    setOpen(!open);
  };

  const handleVisibilityChange = () => {
    setVisibility(!visibility);
  };

  return (
    <div className="flex w-full h-full">
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
                      <div className="absolute top-16 w-[210px] h-[225px] bg-zinc-900 rounded-[4px] flex flex-col gap-2 px-2 py-2 text-start">
                        <ul className="flex flex-col gap-2">
                          {options.map((option) => {
                            return (
                              <li
                                key={option.id}
                                className={`flex flex-col gap-2 px-2 py-1 hover:bg-[#5865f2] hover:text-white duration-200 rounded-[4px] ${
                                  option.id === 1
                                    ? "text-[#686dac]"
                                    : "text-zinc-200"
                                }`}
                              >
                                <div className="flex items-center justify-between">
                                  <span className="font-semibold text-sm">
                                    {option.label}
                                  </span>
                                  <span className="">{option.icon}</span>
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
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
                          pathname ===
                          `/home/${serverId}/${currentChannel?._id}`
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
      <div className="h-full flex-grow flex flex-col">
        <div className="flex flex-col px-6 py-3">
          <header className="w-full flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Hash className="text-gray-400 h-7 w-7" />
              <h3 className="text-zinc-200 font-semibold">
                {currentChannel ? currentChannel.name : "Loading..."}
              </h3>
            </div>
            <div className="flex items-center gap-4">
              <button>
                <Camp className="text-gray-400 h-7 w-7" />
              </button>
              <button>
                <Users className="text-gray-400 h-7 w-7" />
              </button>

              <div className="flex items-center justify-between gap-2 w-[175px] rounded-[4px] px-2 bg-[#1c1d1f] text-white">
                <input
                  type="search"
                  className="focus:outline-none bg-transparent w-full"
                  placeholder="Search"
                />
                <Search className="text-white h-8 w-8" />
              </div>

              <button>
                <Tray className="text-gray-400 h-7 w-7" />
              </button>
            </div>
          </header>
        </div>
        <span className="border-[0.1px] border-[#27282b] rounded-full w-full"></span>
        <div className="flex h-full">
          <main className="flex-grow flex-col h-full items-center relative">
            {children}
            <footer className="absolute left-4 right-4 bottom-8 bg-[#393a3f] rounded-[8px] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-4 w-full">
                <PlusBg className="text-zinc-300 h-6 w-6" />
                <input
                  placeholder={`Send a message to ${
                    currentChannel ? currentChannel.name : "Loading..."
                  }`}
                  type="text"
                  className="bg-transparent focus:outline-none text-white font-semibold w-full placeholder:text-zinc-500"
                />
              </div>
              <span>emoji</span>
            </footer>
          </main>
          <div className="bg-[#2c2d31] w-[240px] flex flex-col h-full">
            amigos
          </div>
        </div>
      </div>
    </div>
  );
}
