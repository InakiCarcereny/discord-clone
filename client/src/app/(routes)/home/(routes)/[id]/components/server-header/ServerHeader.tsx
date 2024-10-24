import { Channel } from "../../context/channel.context";

import { Camp } from "@/app/icons/Camp";
import { Hash } from "@/app/icons/Hash";
import { Search } from "@/app/icons/Search";
import { Tray } from "@/app/icons/Tray";
import { Users } from "@/app/icons/Users";

export interface ServerHeaderProps {
  currentChannel: Channel | undefined;
}

export function ServerHeader({ currentChannel }: ServerHeaderProps) {
  return (
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
  );
}
