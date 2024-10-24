import { Cross } from "@/app/icons/Cross";

import { useRouter } from "next/navigation";

export function ProfileHeader() {
  const router = useRouter();

  return (
    <header className="flex items-center justify-between py-4 px-10">
      <h3 className="text-white font-semibold text-lg">User Profile</h3>
      <button onClick={() => router.back()}>
        <Cross className="text-gray-400 hover:text-white w-10 h-10" />
      </button>
    </header>
  );
}
