import { Greeting } from "@/app/icons/Greeting";
import { Store } from "@/app/icons/Store";

import { usePathname } from "next/navigation";
import Link from "next/link";

const options = [
  {
    id: 1,
    label: "Friends",
    icon: Greeting({}),
    href: "/home",
  },
  {
    id: 2,
    label: "Store",
    icon: Store({}),
    href: "/home/store",
  },
];

const messages = [
  {
    id: 1,
    src: "wdad",
    user: "InakiDev",
  },
  {
    id: 2,
    src: "wdad",
    user: "Sonic",
  },
];

interface NavigateSideBarProps {
  open: boolean;
}

export function NavigateSideBar({ open }: NavigateSideBarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`h-screen w-[240px] bg-[#2c2d31] flex flex-col py-4 ${
        open ? "blur-[2px]" : ""
      }`}
    >
      <div className="flex flex-col items-center">
        <button className="rounded-[4px] w-[90%] text-xs py-2 bg-[#1c1d1f] text-gray-400">
          Search or init conversation
        </button>

        <div className="border-[0.1px] border-[#1c1d1f] rounded-full w-full mt-3"></div>

        <ul className="mt-2 flex flex-col items-center gap-1 w-full px-2">
          {options.map((option) => {
            return (
              <li className="w-full" key={option.id}>
                <Link
                  className={`${
                    option.href === "/home" &&
                    (pathname === "/home" ||
                      pathname === "/home/all" ||
                      pathname === "/home/pending")
                      ? "bg-zinc-600 text-white"
                      : option.href === pathname
                      ? "bg-zinc-600 text-white"
                      : "text-gray-400"
                  } flex items-center gap-4 hover:bg-zinc-600 px-3 py-2 rounded-[4px]`}
                  href={option.href}
                >
                  <span>{option.icon}</span>
                  <span className="font-medium text-base">{option.label}</span>
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
      </div>

      <ul className="mt-4 flex flex-col gap-4 px-5">
        {messages.map((message) => {
          return (
            <li
              key={message.id}
              className="flex items-center gap-2 hover:bg-zinc-600 rounded-[4px] px-2 py-1"
            >
              <img
                src={message.src}
                alt={message.user}
                className="w-8 h-8 rounded-full"
              />
              <span className="text-sm text-zinc-400">{message.user}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}