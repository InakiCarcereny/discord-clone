import { Discord } from "@/app/icons/Discord";
import { Plus } from "@/app/icons/Plus";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ServerSideBarProps {
  open: boolean;
  handleOpen: () => void;
}

export function ServerSideBar({ open, handleOpen }: ServerSideBarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`h-screen w-[70px] px-2 pt-4 flex flex-col items-center ${
        open ? "blur-[2px]" : ""
      }`}
    >
      <Link
        href="/home"
        className={`${
          pathname.startsWith("/home") ? "rounded-[18px]" : ""
        } bg-[#5865f2] flex flex-col items-center cursor-pointer rounded-3xl duration-200 px-2 py-2 hover:rounded-[18px]`}
      >
        <Discord className="text-white h-8 w-8" />
      </Link>

      <div className="border border-zinc-600 rounded-full w-8 mt-2"></div>

      <button
        onClick={handleOpen}
        className="hover:bg-green-600 hover:text-white bg-[#33353b] flex flex-col items-center cursor-pointer rounded-3xl duration-200 px-2 py-2 hover:rounded-[18px] mt-2"
      >
        <Plus className="text-green-600 hover:text-white h-8 w-8" />
      </button>
    </aside>
  );
}
