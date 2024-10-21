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

export default function ServerLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { id: string };
}) {
  const { servers } = useServer();

  const { channels } = useChannel();

  const serverId = params.id;

  const filteredServers = servers.filter((server) => server._id === serverId);

  return (
    <div className="flex w-full h-full">
      <aside className="h-screen w-[240px] bg-[#2c2d31] flex flex-col">
        <ul className="flex flex-col">
          {filteredServers.map((server) => {
            return (
              <li key={server._id} className="flex flex-col gap-8">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between px-4 py-4 hover:bg-zinc-800 duration-200">
                    <span className="text-zinc-200 font-semibold text-base">
                      {server.tittle}
                    </span>
                    <ArrowDown className="text-zinc-200 h-4 w-4 font-semibold" />
                  </div>

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
                        <ArrowRight className="text-gray-400 h-3 w-3" />
                        <span className="text-xs font-semibold text-gray-400 group-hover:text-white">
                          TEXT CHANNELS
                        </span>
                      </div>
                      <Plus className="text-gray-400" />
                    </div>

                    <ul className="flex flex-col gap-1 mt-1">
                      {channels.map((channel) => {
                        return (
                          <li
                            key={channel._id}
                            className="flex flex-col gap-2 px-2 py-1 hover:bg-[#323338] duration-200 rounded-[4px]"
                          >
                            <Link
                              href={`/home/${channel.server}/${channel._id}`}
                              className="flex items-center gap-2"
                            >
                              <Hash className="text-gray-400 h-5 w-5" />
                              <span className="text-zinc-200 font-semibold">
                                {channel.name}
                              </span>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
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
              <h3 className="text-zinc-200 font-semibold">hola</h3>
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
          <main className="flex-grow flex-col h-full px-2">{children}</main>
          <div className="bg-[#2c2d31] w-[240px] flex flex-col h-full">
            amigos
          </div>
        </div>
      </div>
    </div>
  );
}
