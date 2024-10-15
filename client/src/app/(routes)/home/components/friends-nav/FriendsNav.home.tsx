import { Greeting } from "@/app/icons/Greeting";
import { Search } from "@/app/icons/Search";
import { Separator } from "@/app/icons/Separator";

import { usePathname } from "next/navigation";
import Link from "next/link";

const friends = [
  {
    id: 1,
    label: "Online",
    href: "/home",
  },
  {
    id: 2,
    label: "All",
    href: "/home/all",
  },
  {
    id: 3,
    label: "Pending",
    href: "/home/pending",
  },
];

export function FriendsNav() {
  const pathname = usePathname();

  return (
    <section className="flex flex-col py-[16px]">
      <header className="flex items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-2">
            <Greeting className="text-zinc-400 h-8 w-8" />
            <p className="text-zinc-200 font-semibold">Friends</p>
          </span>
          <Separator className="text-zinc-400" />

          <ul className="flex items-center gap-6">
            {friends.map((state) => {
              return (
                <li key={state.id}>
                  <Link
                    href={state.href}
                    className={`${
                      pathname === state.href
                        ? "bg-zinc-600 text-white"
                        : "text-gray-400"
                    } flex items-center px-2 rounded-[4px] hover:bg-[#2c2d31] hover:text-white`}
                  >
                    {state.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <button className="bg-[#15803d] rounded-[4px] px-2 text-white">
            Add friend
          </button>
        </div>
      </header>

      <div className="border-[0.1px] border-[#27282b] rounded-full w-full mt-3"></div>

      <div className="max-w-[95%] h-10 bg-[#1c1d1f] rounded-[4px] mt-3 ml-10 flex items-center justify-center">
        <input
          type="search"
          placeholder="Search"
          className="text-zinc-400 bg-transparent w-full focus:outline-none px-4"
        />
        <Search className="text-white h-8 w-8" />
      </div>
    </section>
  );
}
