"use client";

import { useServer } from "../../context/server.context";

export default function Server({ params }: { params: { id: string } }) {
  const { servers } = useServer();

  const serverId = params.id;

  const filteredServers = servers.filter((server) => server._id === serverId);

  return (
    <div className="h-full">
      {filteredServers.map((server) => {
        return (
          <div
            key={server._id}
            className="h-full flex flex-col justify-end pb-4 px-4"
          >
            pibes
            <input
              type="text"
              className="w-full rounded-[4px] px-4 py-2 focus:outline-none bg-[#393a3f]/90"
            />
          </div>
        );
      })}
    </div>
  );
}
