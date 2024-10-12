"use client";

import { Greeting } from "@/app/icons/Greeting";
import { Separator } from "@/app/icons/Separator";
import { Store } from "@/app/icons/Store";
import Link from "next/link";
import { usePathname } from "next/navigation";

const friendsStates = [
  {
    id: 1,
    label: "Online",
    path: "",
  },
  {
    id: 2,
    label: "All",
    path: "/home/all",
  },
  {
    id: 3,
    label: "Pending",
    path: "/home/pending",
  },
];

const options = [
  {
    id: 1,
    label: "Friends",
    icon: Greeting({}),
    href: "/home/friends",
  },
  {
    id: 2,
    label: "Store",
    icon: Store({}),
    href: "/home/store",
  },
];

export default function Home() {
  const pathname = usePathname();

  return (
    <div className="flex">
      <aside className="h-screen w-[240px] bg-[#2c2d31] flex flex-col items-center py-4">
        <button className="rounded-[4px] w-[90%] text-xs py-2 bg-[#1c1d1f] text-zinc-400 font-semibold">
          Search or init conversation
        </button>

        <div className="border-[0.1px] border-[#1c1d1f] rounded-full w-full mt-3"></div>

        <ul className="mt-2 flex flex-col items-center gap-1 w-full px-2">
          {options.map((option) => {
            return (
              <li className="w-full" key={option.id}>
                <Link
                  className={`${
                    pathname === `/home/${option.href}` ? "bg-zinc-600" : ""
                  } flex items-center gap-4 hover:bg-zinc-600 px-3 py-2 rounded-[4px]`}
                  href={option.href}
                >
                  <span className="text-white">{option.icon}</span>
                  <span className="text-white font-medium text-base">
                    {option.label}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center justify-between w-full px-5 mt-5">
          <span className="text-sm font-semibold text-zinc-400">
            DIRECT MESSAGES
          </span>
          <button className="text-base font-semibold text-zinc-400">+</button>
        </div>
      </aside>

      <section className="flex flex-col px-6 py-4">
        <header className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-2">
              <Greeting className="text-zinc-400 h-8 w-8" />
              <p className="text-zinc-200 font-semibold">Friends</p>
            </span>
            <Separator className="text-zinc-400" />

            <ul className="flex items-center gap-6">
              {friendsStates.map((state) => {
                return (
                  <li key={state.id}>
                    <Link
                      href={`/home/${state.path}`}
                      className={`${
                        pathname === `/home/${state.path}` ? "bg-zinc-600" : ""
                      } flex items-center px-2 p-1 text-zinc-200 rounded-[4px] font-semibold hover:bg-[#2c2d31]`}
                    >
                      {state.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
          <div>decide if i need to do a group button</div>
        </header>
      </section>
    </div>
  );
}
