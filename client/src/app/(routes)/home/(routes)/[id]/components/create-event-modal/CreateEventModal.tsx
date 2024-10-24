"use client";

import { Calendar } from "@/app/icons/Calendar";
import { CrossNoneBg } from "@/app/icons/CrossNoneBg";
import { Separator } from "@/app/icons/Separator";
import { Star } from "@/app/icons/Star";
import { useState } from "react";
import { useEvent } from "../../context/event.context";

import { useForm } from "react-hook-form";
import { Dots } from "@/app/icons/Dots";
import { Pen } from "@/app/icons/Pen";
import { Rubbish } from "@/app/icons/Rubbish";

export interface CreateEventModalProps {
  setOpenChannel: (openChannel: number) => void;
  serverId: string;
  openEvent: boolean;
  setOpenEvent: (openEvent: boolean) => void;
}

export interface FormValues {
  theme: string;
  dateInit: string;
  dateEnd: string;
  timeInit: string;
  timeEnd: string;
  frequency: string;
  description: string;
}

export function CreateEventModal({
  setOpenChannel,
  serverId,
  openEvent,
  setOpenEvent,
}: CreateEventModalProps) {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(null);

  const { createEvent, events, deleteEvent } = useEvent();

  const { register, handleSubmit } = useForm<FormValues>();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleOpenModal = (id) => {
    console.log(id);
    setOpenModal((prevState) => (prevState === id ? null : id));
  };

  const onSubmit = handleSubmit(async (data) => {
    createEvent(data, serverId);
  });

  return (
    <section
      className={`bg-zinc-700 rounded-xl flex h-[400px] flex-col relative ${
        open ? "w-[500px] h-[650px]" : "w-[600px]"
      }`}
    >
      <div className={`${open ? "hidden" : ""} flex flex-col h-full`}>
        <header className="flex items-center justify-between bg-[#2c2d31] px-4 py-4 rounded-tl-xl rounded-tr-xl">
          <div className="flex items-center gap-2">
            <Calendar className="text-zinc-200 h-7 w-7" />
            <span className="text-zinc-200 font-semibold">
              {events.length} Events
            </span>
            <Separator className="text-zinc-800" />
            <button
              onClick={handleOpen}
              className="text-xs px-2 py-1 bg-[#5865f2] hover:bg-blue-700 duration-200 rounded-[4px] text-white"
            >
              Create event
            </button>
          </div>
          <button onClick={() => setOpenChannel(null)}>
            <CrossNoneBg className="text-zinc-200 h-6 w-6 hover:text-white" />
          </button>
        </header>

        <div className="flex flex-col items-center justify-center gap-8 w-full h-full px-4 py-4">
          {events.length > 0 ? (
            <ul className="flex flex-col gap-2 w-full">
              {events.map((event) => {
                return (
                  <li
                    key={event._id}
                    className="bg-[#2c2d31] w-full h-[150px] rounded-xl flex flex-col gap-3 relative"
                  >
                    <div className="flex items-center gap-2 px-4 pt-4">
                      <Calendar className="text-indigo-400 h-6 w-6" />
                      <span className="font-semibold text-sm text-indigo-400">
                        Duration {event.timeInit} - {event.timeEnd}
                      </span>
                    </div>
                    <div className="flex flex-col gap-1 px-4">
                      <span className="text-white font-semibold ">
                        {event.theme}
                      </span>
                      <p className="text-xs text-zinc-500 font-semibold">
                        {event.description}
                      </p>
                    </div>
                    <span className="border-[0.1px] border-zinc-600 rounded-full w-full"></span>
                    <button
                      onClick={() => handleOpenModal(event._id)}
                      className="px-4"
                    >
                      <Dots className="text-gray-400 h-6 w-6" />
                    </button>
                    {openModal === event._id && (
                      <div className="absolute -bottom-20 left-12 bg-zinc-900 w-[150px] h-[80px] z-50 rounded-[4px] px-2 py-2 flex flex-col gap-2">
                        <button className="text-zinc-200 hover:text-zinc-400 duration-200 font-semibold flex items-center justify-between">
                          Edit event
                          <Pen />
                        </button>
                        <button
                          onClick={() => deleteEvent(event._id, serverId)}
                          className="text-red-500 hover:text-red-700 duration-200 font-semibold flex items-center justify-between"
                        >
                          Cancel event
                          <Rubbish />
                        </button>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          ) : (
            <div className="flex flex-col items-center justify-center gap-8 h-full">
              <span className="bg-[#131416] rounded-full px-3 py-3">
                <Calendar className="text-white h-12 w-12" />
              </span>
              <span className="absolute left-60 top-30">
                <Star className="h-6 w-6" />
              </span>
              <span className="absolute right-60 top-36">
                <Star className="h-6 w-6" />
              </span>
              <div className="flex items-center flex-col">
                <h3 className="text-white font-semibold text-2xl">
                  No events soon.
                </h3>
                <p className="text-gray-400 font-semibold text-sm">
                  Schedule an event for any planned activity on your server
                </p>
              </div>
            </div>
          )}
        </div>
      </div>

      {open && (
        <div className="flex flex-col gap-4 h-full">
          <header className="text-center flex flex-col gap-2 px-4 py-4">
            <span className="text-white font-semibold text-2xl">
              What your event focuses on?
            </span>
            <p className="font-semibold text-gray-400 text-sm">
              Refeal the event details
            </p>
          </header>

          <form onSubmit={onSubmit} className="flex flex-col gap-4 h-full">
            <div className="flex flex-col gap-4 px-4">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="theme"
                  className="text-gray-400 font-semibold text-xs"
                >
                  EVENT THEME
                </label>
                <input
                  id="theme"
                  type="text"
                  className="bg-zinc-900 rounded-[4px] px-4 py-2 focus:outline-none text-white w-full placeholder:text-gray-500 placeholder:text-sm"
                  placeholder="Even theme?"
                  {...register("theme")}
                />
              </div>

              <div className="grid grid-cols-2 items-center gap-4">
                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="dateInit"
                    className="text-gray-400 font-semibold text-xs"
                  >
                    DATE INIT
                  </label>
                  <input
                    id="dateInit"
                    type="date"
                    className="bg-zinc-900 rounded-[4px] px-4 py-2 focus:outline-none text-white w-full placeholder:text-gray-500 placeholder:text-sm"
                    {...register("dateInit")}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="dateEnd"
                    className="text-gray-400 font-semibold text-xs"
                  >
                    DATE END
                  </label>
                  <input
                    id="dateEnd"
                    type="date"
                    className="bg-zinc-900 rounded-[4px] px-4 py-2 focus:outline-none text-white w-full placeholder:text-gray-500 placeholder:text-sm"
                    {...register("dateEnd")}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="timeInit"
                    className="text-gray-400 font-semibold text-xs"
                  >
                    TIME INIT
                  </label>
                  <input
                    id="timeInit"
                    type="text"
                    className="bg-zinc-900 rounded-[4px] px-3 py-2 focus:outline-none text-white w-full placeholder:text-gray-500 placeholder:text-sm"
                    {...register("timeInit")}
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label
                    htmlFor="timeEnd"
                    className="text-gray-400 font-semibold text-xs"
                  >
                    TIME END
                  </label>
                  <input
                    id="timeEnd"
                    type="text"
                    className="bg-zinc-900 rounded-[4px] px-3 py-2 focus:outline-none text-white w-full placeholder:text-gray-500 placeholder:text-sm"
                    {...register("timeEnd")}
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="frequency"
                  className="text-gray-400 font-semibold text-xs"
                >
                  FREQUENCY
                </label>
                <input
                  id="frequency"
                  type="text"
                  className="bg-zinc-900 rounded-[4px] px-4 py-2 focus:outline-none text-white w-full placeholder:text-gray-500 placeholder:text-sm"
                  {...register("frequency")}
                />
              </div>

              <div className="flex flex-col gap-1">
                <label
                  htmlFor="description"
                  className="text-gray-400 font-semibold text-xs"
                >
                  DESCRIPTION
                </label>
                <textarea
                  id="description"
                  cols={5}
                  rows={5}
                  className="bg-zinc-900 rounded-[4px] px-4 py-2 focus:outline-none text-zinc-400 w-full resize-none h-[120px] placeholder:text-gray-500 placeholder:text-sm"
                  {...register("description")}
                />
              </div>
            </div>

            <footer className="bg-[#2c2d31] h-full rounded-bl-xl rounded-br-xl flex items-center justify-between px-4">
              <button
                onClick={() => setOpenChannel(null)}
                className="px-4 py-2 text-white font-semibold bg-zinc-700 rounded-[4px] text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 text-white font-semibold bg-[#5865f2] rounded-[4px] text-sm hover:bg-blue-700 duration-200"
              >
                Create
              </button>
            </footer>
          </form>
        </div>
      )}
    </section>
  );
}
