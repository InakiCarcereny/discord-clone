import { Hash } from "@/app/icons/Hash";
import { Volume } from "@/app/icons/Volume";

import { useForm } from "react-hook-form";
import { useChannel } from "../../context/channel.context";
import { CrossNoneBg } from "@/app/icons/CrossNoneBg";

export interface CreateChannelModalProps {
  serverId: string;
  setOpenChannel: (state: null) => void;
}

export function CreateChannelModal({
  serverId,
  setOpenChannel,
}: CreateChannelModalProps) {
  const { register, handleSubmit } = useForm<{ name: string }>();

  const { createChannel } = useChannel();

  const onSubmit = handleSubmit(async (data) => {
    createChannel(data, serverId);
    setOpenChannel(null);
  });

  return (
    <section className="bg-zinc-700 w-[500px] min-h-[400px] rounded-xl  flex flex-col">
      <header
        onClick={() => setOpenChannel(null)}
        className="flex items-center justify-between px-4 pt-4"
      >
        <h3 className="text-white font-semibold">Create channel</h3>
        <button className="text-gray-400 hover:text-white duration-200">
          <CrossNoneBg className="w-6 h-6" />
        </button>
      </header>
      <form onSubmit={onSubmit} className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 mt-4 px-4">
          <span className="text-xs font-semibold text-gray-400">
            CHANNEL TYPE
          </span>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between hover:bg-zinc-600 bg-[#2c2d31] duration-200 rounded-[4px] px-4 py-4">
              <div className="flex items-center gap-2">
                <Hash className="text-gray-400 h-7 w-7" />
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm">Text</span>
                  <p className="text-zinc-200 text-xs font-semibold">
                    Send messages, images, GIF, emojis, opinions and more.
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                id="text"
                className="rounded-full cursor-pointer"
              />
            </div>

            <div className="flex items-center justify-between hover:bg-zinc-600 bg-[#2c2d31] duration-200 rounded-[4px] px-4 py-4">
              <div className="flex items-center gap-2">
                <Volume className="text-gray-400 h-7 w-7" />
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-sm">
                    Voice
                  </span>
                  <p className="text-zinc-200 text-xs font-semibold">
                    Talk, video and share screen.
                  </p>
                </div>
              </div>
              <input
                type="checkbox"
                id="text"
                className="rounded-full cursor-pointer"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 px-4">
          <label className="text-white font-semibold text-xs" htmlFor="name">
            CHANNEL NAME
          </label>
          <div className="bg-zinc-900 w-full rounded-[4px] px-2 py-3 flex items-center gap-2">
            <Hash className="text-gray-400 h-5 w-5" />
            <input
              placeholder="new-channel"
              type="text"
              id="name"
              className="w-full text-sm focus:outline-none text-white bg-transparent placeholder:text-zinc-500 placeholder:text-sm"
              {...register("name")}
            />
          </div>
        </div>

        <footer className="flex items-center justify-between mt-6 bg-[#2c2d31] h-[80px] px-4 rounded-bl-xl rounded-br-xl">
          <button
            onClick={() => setOpenChannel(null)}
            className="text-sm font-semibold text-white hover:underline-offset-1 hover:underline"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="bg-[#5865f2] hover:bg-blue-700 text-white text-sm font-semibold rounded-[4px] px-4 py-2"
          >
            Create
          </button>
        </footer>
      </form>
    </section>
  );
}
