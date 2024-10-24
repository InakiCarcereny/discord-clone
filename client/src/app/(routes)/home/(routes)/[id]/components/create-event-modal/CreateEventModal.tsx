"use client";

import { Calendar } from "@/app/icons/Calendar";
import { CrossNoneBg } from "@/app/icons/CrossNoneBg";
import { Separator } from "@/app/icons/Separator";
import { Star } from "@/app/icons/Star";
import { useState } from "react";

export interface CreateEventModalProps {
  setOpenChannel: (openChannel: number) => void;
  serverId: string;
}

export function CreateEventModal({ setOpenChannel, serverId }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <section className="bg-zinc-700 w-[600px] h-[400px] rounded-xl flex flex-col relative">
      <div className={`${open ? "hidden" : ""} flex flex-col h-full`}>
        <header className="flex items-center justify-between bg-[#131416] px-4 py-4 rounded-tl-xl rounded-tr-xl">
          <div className="flex items-center gap-2">
            <Calendar className="text-zinc-200 h-7 w-7" />
            <span className="text-zinc-200 font-semibold">Events</span>
            <Separator className="text-zinc-800" />
            <button
              onClick={handleOpen}
              className="text-xs px-2 py-1 bg-[#5865f2] hover:bg-blue-700 duration-200 rounded-[4px] text-white"
            >
              Create event
            </button>
          </div>
          <button onClick={() => setOpenChannel(null)}>
            <CrossNoneBg className="text-zinc-200 h-6 w-6 hover:text-white" />
          </button>
        </header>

        <div className="flex flex-col items-center justify-center gap-8 h-full">
          <span className="bg-[#131416] rounded-full px-3 py-3">
            <Calendar className="text-white h-12 w-12" />
          </span>
          <span className="absolute left-60 top-30">
            <Star className="h-6 w-6" />
          </span>
          <span className="absolute right-60 top-36">
            <Star className="h-6 w-6" />
          </span>
          <div className="flex items-center flex-col">
            <h3 className="text-white font-semibold text-2xl">
              No events soon.
            </h3>
            <p className="text-gray-400 font-semibold text-sm">
              Schedule an event for any planned activity on your server
            </p>
          </div>
        </div>
      </div>

      {open && <div>hola</div>}
    </section>
  );
}
