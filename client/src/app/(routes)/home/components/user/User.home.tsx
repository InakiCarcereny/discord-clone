import { useAuth } from "@/app/(routes)/register/context/auth.context";
import { Headphones } from "@/app/icons/Headphones";
import { Microphone } from "@/app/icons/Microphone";
import { Photo } from "@/app/icons/Photo";
import { Settings } from "@/app/icons/Settings";
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
        <div className="w-[275px] h-[500px] absolute bottom-14 from-zinc-900 to-green-900 rounded-xl bg-gradient-to-t"></div>
      )}
    </>
  );
}
