import { Calendar } from "@/app/icons/Calendar";
import { Folder } from "@/app/icons/Folder";
import { InviteUser } from "@/app/icons/InviteUser";
import { PlusBg } from "@/app/icons/PlusBg";
import { Settings } from "@/app/icons/Settings";
import { Trash } from "@/app/icons/Trash";

export const serverOptions = [
  {
    id: 1,
    label: "Invite people",
    icon: InviteUser({}),
  },
  {
    id: 2,
    label: "Server settings",
    icon: Settings({}),
  },
  {
    id: 3,
    label: "Create channel",
    icon: PlusBg({}),
  },
  {
    id: 4,
    label: "Create category",
    icon: Folder({}),
  },
  {
    id: 5,
    label: "Create event",
    icon: Calendar({}),
  },
  {
    id: 6,
    label: "Leave Server",
    icon: Trash({}),
  },
];
