import { useAuth } from "@/app/(routes)/register/context/auth.context";
import { Dot } from "@/app/icons/Dot";
import { Headphones } from "@/app/icons/Headphones";
import { Microphone } from "@/app/icons/Microphone";
import { Pen } from "@/app/icons/Pen";
import { Photo } from "@/app/icons/Photo";
import { Settings } from "@/app/icons/Settings";
import Link from "next/link";
import { useState } from "react";

export function User() {
  const [open, setOpen] = useState(false);

  const { user } = useAuth();

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <>
      <button
        onClick={handleOpen}
        className="text-white text-xs hover:bg-zinc-600 rounded-[4px] py-2 px-1 flex items-center gap-2"
      >
        <Photo className="h-6 w-6" />
        <div className="flex flex-col items-start">
          <span className="text-sm text-white">{user?.username}</span>
          <span className="text-xs text-gray-400">{user?.name}</span>
        </div>
      </button>
      <div className="flex items-center gap-1">
        <Microphone className=" hover:bg-zinc-600 rounded-[4px] py-1 px-1 text-white h-7 w-7" />
        <Headphones className=" hover:bg-zinc-600 rounded-[4px] py-1 px-1 text-white h-7 w-7" />
        <Settings className=" hover:bg-zinc-600 rounded-[4px] py-1 px-1 text-white h-7 w-7" />
      </div>

      {open && (
        <div className="w-[275px] h-[400px] absolute bottom-14 from-zinc-900 to-green-900 rounded-xl bg-gradient-to-t flex flex-col px-[6px] py-[6px] shadow-xl">
          <div className="flex flex-col w-full h-full bg-black rounded-[8px] relative">
            <img
              src=""
              alt=""
              className="w-full h-[100px] object-cover rounded-tl-[4px] rounded-tr-[4px]"
            />
            <img
              src=""
              alt=""
              className="rounded-full h-14 w-14 absolute top-16 left-4 z-50"
            />
            <div className="flex flex-col px-4 mt-10 justify-between h-full">
              <div className="flex flex-col gap-2">
                <span className="text-white text-xl font-semibold">
                  InakiDev
                </span>
                <div className="flex items-center gap-2">
                  <p className="text-sm text-white font-semibold">inakidev.</p>
                  <Dot className="text-white h-4 w-4" />
                  <p className="text-sm text-white font-semibold">Claudi.</p>
                </div>
                <span className="text-sm text-white font-semibold">
                  Front-End Dev
                </span>
                <span className="text-white">emojis</span>
              </div>
              <Link
                href="/home/profile"
                className="bg-zinc-900 rounded-xl px-2 py-2 text-gray-400 font-semibold mb-2"
              >
                <div className="flex items-center gap-2 hover:bg-white/10 px-2 py-1 rounded-[4px]">
                  <Pen />
                  Edit Profile
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
