import { useAuth } from "@/app/(routes)/register/context/auth.context";
import { Dot } from "@/app/icons/Dot";
import { Headphones } from "@/app/icons/Headphones";
import { Microphone } from "@/app/icons/Microphone";
import { Pen } from "@/app/icons/Pen";
import { Photo } from "@/app/icons/Photo";
import { Settings } from "@/app/icons/Settings";
import Link from "next/link";
import { useState } from "react";
import { useUser } from "../../context/user.context";

export function User() {
  const [open, setOpen] = useState(false);

  const { user } = useAuth();

  const { userInfo } = useUser();

  const handleOpen = () => {
    setOpen(!open);
  };

  const darkenColor = (hex, percent) => {
    if (hex === undefined) {
      return "#5865f2";
    }

    hex = hex.replace(/^#/, "");

    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    r = Math.max(0, Math.min(255, Math.floor(r * (1 - percent))));
    g = Math.max(0, Math.min(255, Math.floor(g * (1 - percent))));
    b = Math.max(0, Math.min(255, Math.floor(b * (1 - percent))));

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  const primaryColor = userInfo?.primaryColor;
  const secondaryColor = userInfo?.secondaryColor;

  const primaryColorDark = darkenColor(primaryColor, 0.4);

  const avatarBase64 = userInfo?.avatar
    ? `data:${userInfo?.avatar?.contentType};base64,${Buffer.from(
        userInfo?.avatar?.data
      ).toString("base64")}`
    : undefined;

  const posterBase64 = userInfo?.banner
    ? `data:${userInfo?.banner?.contentType};base64,${Buffer.from(
        userInfo?.banner?.data
      ).toString("base64")}`
    : undefined;

  return (
    <>
      <button
        onClick={handleOpen}
        className="text-white text-xs hover:bg-zinc-600 rounded-[4px] px-1 flex items-center gap-2"
      >
        {avatarBase64 ? (
          <img src={avatarBase64} alt="" className="h-8 w-8 rounded-full" />
        ) : (
          <Photo className="h-8 w-8 rounded-full" />
        )}
        <div className="flex flex-col items-start">
          <span className="text-sm text-white font-semibold">
            {userInfo?.name}
          </span>
          <span className="text-xs text-gray-400 font-semibold">
            {user?.username}
          </span>
        </div>
      </button>
      <div className="flex items-center">
        <Microphone className=" hover:bg-zinc-600 rounded-[4px] py-1 px-1 text-white h-7 w-7" />
        <Headphones className=" hover:bg-zinc-600 rounded-[4px] py-1 px-1 text-white h-8 w-8" />
        <Settings className=" hover:bg-zinc-600 rounded-[4px] py-1 px-1 text-white h-7 w-7" />
      </div>

      {open && (
        <div
          style={{
            background: `linear-gradient(to top, ${secondaryColor}, ${primaryColor})`,
          }}
          className="w-[275px] h-[400px] absolute bottom-14 rounded-xl bg-gradient-to-t flex flex-col px-[6px] py-[6px] shadow-xl"
        >
          <div
            style={{ background: primaryColorDark }}
            className="flex flex-col w-full h-full rounded-[8px] relative border border-zinc-900/20"
          >
            <img
              src={posterBase64}
              alt=""
              className="w-full h-[100px] object-cover rounded-tl-[6px] rounded-tr-[6px]"
            />
            <img
              src={avatarBase64}
              alt=""
              className="rounded-full h-14 w-14 absolute top-16 left-4 z-50"
            />
            <div className="flex flex-col px-4 mt-10 justify-between h-full">
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <span className="text-white text-xl font-semibold">
                    {userInfo?.name}
                  </span>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-white font-semibold">
                      {user?.username}
                    </p>
                    <Dot className="text-white h-4 w-4" />
                    <p className="text-sm text-white font-semibold">
                      {userInfo?.nickname}
                    </p>
                  </div>
                </div>
                <span className="text-sm text-white font-semibold">
                  {userInfo?.description}
                </span>
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
