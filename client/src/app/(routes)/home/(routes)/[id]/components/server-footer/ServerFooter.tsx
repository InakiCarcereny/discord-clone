import { PlusBg } from "@/app/icons/PlusBg";

import { Channel } from "../../context/channel.context";

export interface ServerFooterProps {
  currentChannel: Channel | undefined;
}

export function ServerFooter({ currentChannel }: ServerFooterProps) {
  return (
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
  );
}
