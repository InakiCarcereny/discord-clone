import { serverOptions } from "@/app/consts/ServerOptions";

export interface ServerModalOptionsProps {
  handleOpenChannel: (option) => void;
}

export function ServerModalOptions({ handleOpenChannel }) {
  return (
    <div className="absolute top-16 w-[210px] h-[225px] bg-zinc-900 rounded-[4px] flex flex-col gap-2 px-2 py-2 text-start">
      <ul className="flex flex-col gap-2">
        {serverOptions.map((option) => {
          return (
            <li
              onClick={() => handleOpenChannel(option.id)}
              key={option.id}
              className={`flex flex-col gap-2 px-2 py-1 hover:bg-white/20  duration-200 rounded-[4px] text-zinc-200`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`font-semibold text-sm ${
                    option.id === 1 ? "text-[#686dac]" : ""
                  } ${option.id === 6 ? "text-red-500" : {}}`}
                >
                  {option.label}
                </span>
                <span
                  className={`${option.id === 1 ? "text-[#686dac]" : ""} ${
                    option.id === 6 ? "text-red-500" : {}
                  }`}
                >
                  {option.icon}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
