import { useAuth } from "@/app/(routes)/register/context/auth.context";
import FileUploadComp from "../file-upload/FileUpload.home";

import { Server as FormValues } from "@/app/models/ServerContext.d";

import { useForm } from "react-hook-form";
import { useServer } from "@/app/(routes)/home/context/server.context";

interface CreateServerModalProps {
  setOpen: (open: boolean) => void;
}

export function CreateServerModal({ setOpen }: CreateServerModalProps) {
  const { user } = useAuth();

  const { createServer } = useServer();

  const { register, handleSubmit, setValue } = useForm<FormValues>();

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();

    formData.append("logo", data.logo[0]);
    formData.append("tittle", data.tittle);

    createServer(formData);

    setOpen(false);
  });

  const handleFileSelect = (files: File[]) => {
    setValue("logo", files);
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center absolute bg-black/50">
      <form
        onSubmit={onSubmit}
        className="bg-zinc-600/20 rounded-[6px] w-[450px] h-[450px] flex flex-col justify-between"
      >
        <div className="flex flex-col px-4 py-6">
          <h3 className="text-2xl font-semibol text-white text-center">
            Personalize your server
          </h3>
          <p className="text-gray-400 text-center text-sm mt-2">
            Give your new server its own personality with a name and icon you
            can always change it later.
          </p>

          <div className="flex items-center justify-center">
            <FileUploadComp onFileSelect={handleFileSelect} />{" "}
          </div>

          <label
            htmlFor="tittle"
            className="mt-4 font-semibold text-sm text-gray-400"
          >
            NAME OF THE SERVER
          </label>
          <input
            id="tittle"
            className="h-10 w-full bg-[#1c1d1f] rounded-[4px] mt-2 px-4 text-white focus:outline-none"
            type="text"
            defaultValue={`${user?.username}'s server`}
            {...register("tittle")}
          />
        </div>

        <div className="flex items-center justify-between mt-6 bg-[#2c2d31] h-[100px] px-6 rounded-bl-[4px] rounded-br-[4px]">
          <button
            onClick={() => setOpen(false)}
            className="text-white font-semibold"
          >
            Back
          </button>
          <button
            type="submit"
            className="text-white bg-[#5865f2] flex items-center px-6 py-2 rounded-[4px] duration-200 hover:bg-blue-700 font-semibold"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
}
