"use client";

import {
  createEventRequest,
  deleteEventRequest,
  getEventsRequest,
} from "@/app/interceptors/event.interceptor";
import { AxiosError } from "axios";
import { createContext, useContext, useState } from "react";
import { Id } from "./channel.context";

export interface EventContextTypes {
  events: Event[];
  errors: string[];
  getEvents: (id: Id) => Promise<void>;
  createEvent: (data: Event, id: Id) => Promise<void>;
  deleteEvent: (data: Event, id: Id) => Promise<void>;
}

export interface Event {
  _id: string;
  ubication: string;
  theme: string;
  dateInit: string;
  dateEnd: string;
  timeInit: string;
  timeEnd: string;
  frequency: string;
  description: string;
  logo: string;
  server: string;
}

export const EventContext = createContext<EventContextTypes | undefined>(
  undefined
);

export function useEvent() {
  const context = useContext(EventContext);

  if (context === undefined)
    throw new Error("useEvent must be used within a EventProvider");

  return context;
}

export function EventProvider({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState<Event[]>([]);
  const [errors, setErrors] = useState([]);

  const getEvents = async (id: Id): Promise<void> => {
    try {
      const res = await getEventsRequest(id);
      setEvents(res.data);
    } catch (err: unknown) {
      if (err instanceof AxiosError && err.response) {
        setErrors(err.response.data);
      }
    }
  };

  const createEvent = async (data: Event, id: Id): Promise<void> => {
    try {
      const res = await createEventRequest(data, id);
      console.log(res);
      setEvents((prevState) => [...prevState, res.data]);
    } catch (err: unknown) {
      console.log(err);
      if (err instanceof AxiosError && err.response) {
        setErrors(err.response.data);
      }
    }
  };

  const deleteEvent = async (data: Event, id: Id) => {
    try {
      const res = await deleteEventRequest(data, id);
      if (res.status === 200) {
        setEvents((prevState) =>
          prevState.filter((event) => event._id !== data._id)
        );
      }
    } catch (err: unknown) {
      if (err instanceof AxiosError && err.response) {
        setErrors(err.response.data);
      }
    }
  };

  return (
    <EventContext.Provider
      value={{ events, errors, getEvents, createEvent, deleteEvent }}
    >
      {children}
    </EventContext.Provider>
  );
}
