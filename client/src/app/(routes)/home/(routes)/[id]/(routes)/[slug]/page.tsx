"use client";

import { Hash } from "@/app/icons/Hash";
import { useChannel } from "../../context/channel.context";
import { useUser } from "@/app/(routes)/home/context/user.context";
import { format } from "@formkit/tempo";

export default function Server({ params }: { params: { slug: string } }) {
  const { channels } = useChannel();

  const { userInfo } = useUser();

  const channelId = params.slug;

  const filteredChannels = channels.filter(
    (channel) => channel._id === channelId
  );

  const l = "en";
  const t = new Date();

  //necesito el 10 y el 26 de los formateadores para el mensaje

  const avatarBase64 = userInfo?.avatar
    ? `data:${userInfo?.avatar?.contentType};base64,${Buffer.from(
        userInfo?.avatar?.data
      ).toString("base64")}`
    : undefined;

  return (
    <section className="h-full flex flex-col justify-end px-4">
      <div className="flex flex-col mb-28 gap-2">
        <Hash className="text-white h-16 w-16 rounded-full bg-zinc-600 px-2 py-2" />
        {filteredChannels.map((channel) => {
          return (
            <div className="flex flex-col gap-2" key={channel._id}>
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl text-white font-semibold">
                  We welcome you to #{channel.name}!
                </h3>
                <span className="text-sm text-gray-400 font-semibold">
                  Here start the channel #{channel.name}.
                </span>
              </div>

              <span className="border-[0.1px] border-zinc-600 rounded-full w-full mt-4"></span>

              <div className="flex items-center gap-4 mt-4">
                <img
                  src={avatarBase64}
                  alt=""
                  className="h-9 w-9 rounded-full"
                />
                <div className="flex flex-col">
                  <span className="text-white font-semibold">
                    {userInfo?.name}
                  </span>
                  <p className="text-zinc-200">msg</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
