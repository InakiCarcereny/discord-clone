import { Discord } from "@/app/icons/Discord";
import { Plus } from "@/app/icons/Plus";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useServer } from "../../context/server.context";
import { World } from "@/app/icons/World";

interface ServerSideBarProps {
  handleOpen: () => void;
}

export function ServerSideBar({ handleOpen }: ServerSideBarProps) {
  const pathname = usePathname();

  const { servers } = useServer();

  const handleRightClick = (e: React.MouseEvent<HTMLLIElement>) => {
    e.preventDefault();
    e.stopPropagation();
    console.log("clik");
  };

  return (
    <aside className={`h-screen w-[70px] px-2 pt-4 flex flex-col items-center`}>
      <Link
        href="/home"
        className={`${
          pathname === "/home" ? "rounded-[18px]" : ""
        } bg-[#5865f2] flex flex-col items-center cursor-pointer rounded-3xl duration-200 px-2 py-2 hover:rounded-[18px]`}
      >
        <Discord className="text-white h-8 w-8" />
      </Link>

      <div className="border border-zinc-600 rounded-full w-8 mt-2"></div>

      <ul className="flex flex-col mt-2 gap-2">
        {servers.map((server) => {
          if (
            server.logo &&
            server.logo.data &&
            Array.isArray(server.logo.data.data)
          ) {
            const logoUrl = `data:${
              server.logo.contentType
            };base64,${Buffer.from(server.logo.data.data).toString("base64")}`;

            return (
              <li
                onContextMenu={handleRightClick}
                className="flex flex-col group"
                key={server._id}
              >
                <Link
                  className="flex items-center"
                  href={`/home/${server._id}`}
                >
                  <div
                    className={`${
                      pathname.startsWith(`/home/${server._id}`)
                        ? "h-10"
                        : "h-2 group-hover:h-6"
                    } border-2 border-white rounded-full duration-200 absolute left-0`}
                  />

                  <img
                    src={logoUrl}
                    alt={server.tittle}
                    className={`${
                      pathname.startsWith(`/home/${server._id}`)
                        ? "rounded-[15px]"
                        : ""
                    } w-12 h-12 duration-200 rounded-3xl hover:rounded-[15px] `}
                  />
                </Link>

                <div className="absolute left-20 px-2 py-4 text-sm text-white bg-zinc-900 rounded-[4px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-semibold items-center gap-2 hidden group-hover:flex z-50">
                  <World className="text-pink-600 h-3 w-3" />
                  {server.tittle}
                </div>
              </li>
            );
          }
        })}
      </ul>

      <button
        onClick={handleOpen}
        className="hover:bg-green-600 hover:text-white bg-[#33353b] flex flex-col items-center cursor-pointer rounded-3xl duration-200 px-2 py-2 hover:rounded-[18px] mt-2"
      >
        <Plus className="text-green-600 hover:text-white h-8 w-8" />
      </button>
    </aside>
  );
}
