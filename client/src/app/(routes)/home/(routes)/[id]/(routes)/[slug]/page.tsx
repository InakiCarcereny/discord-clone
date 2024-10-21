"use client";

import { useChannel } from "../../context/channel.context";

export default function Server({ params }: { params: { slug: string } }) {
  const channelId = params.slug;

  const { channels } = useChannel();

  const filteredChannels = channels.filter(
    (channel) => channel._id === channelId
  );

  return (
    <div className="h-full">
      {filteredChannels.map((channel) => {
        return (
          <div
            key={channel._id}
            className="h-full flex flex-col justify-end pb-4 px-4"
          >
            {channel.name}
            <input
              type="text"
              className="w-full rounded-[4px] px-4 py-2 focus:outline-none bg-[#393a3f]/90"
            />
          </div>
        );
      })}
    </div>
  );
}
