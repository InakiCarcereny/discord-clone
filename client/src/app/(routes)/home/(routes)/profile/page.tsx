"use client";

import { useForm } from "react-hook-form";

import { useAuth } from "@/app/(routes)/register/context/auth.context";
import { Cross } from "@/app/icons/Cross";
import { Dot } from "@/app/icons/Dot";
import { Pen } from "@/app/icons/Pen";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useUser } from "../../context/user.context";
import FileUploadComp from "../../components/file-upload/FileUpload.home";

export interface FormValues {
  name: string;
  nickname: string;
  description: string;
  avatar: string;
  poster: string;
  primaryColor: string;
  secondaryColor: string;
  state: string;
}

export default function Profile() {
  const { user } = useAuth();

  const { updateUserInfo } = useUser();

  const { register, handleSubmit, watch, setValue } = useForm<FormValues>();

  const primaryColor = watch("primaryColor", "#5865f2");
  const secondaryColor = watch("secondaryColor", "#5865f2");

  const [poster, setPoster] = useState<string | undefined>(undefined);
  const [avatar, setAvatar] = useState<string | undefined>(undefined);

  const posterPreview = watch("poster");
  const avatarPreview = watch("avatar");

  useEffect(() => {
    if (posterPreview && posterPreview.length > 0) {
      const file = posterPreview[0];
      const imageUrl = URL.createObjectURL(file);
      setPoster(imageUrl);
    } else {
      setPoster(undefined);
    }
  }, [posterPreview]);

  useEffect(() => {
    if (avatarPreview && avatarPreview.length > 0) {
      const file = avatarPreview[0];
      const imageUrl = URL.createObjectURL(file);
      setAvatar(imageUrl);
    } else {
      setAvatar(undefined);
    }
  }, [avatarPreview]);

  const [openAvatar, setOpenAvatar] = useState(false);
  const [openPoster, setOpenPoster] = useState(false);

  const handleOpen = () => {
    setOpenAvatar(!openAvatar);
  };

  const handleOpenPoster = () => {
    setOpenPoster(!openPoster);
  };

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData();

    formData.append("avatar", data.avatar[0]);
    formData.append("banner", data.poster[0]);
    formData.append("description", data.description);
    formData.append("state", data.state);
    formData.append("primaryColor", data.primaryColor);
    formData.append("secondaryColor", data.secondaryColor);

    updateUserInfo(formData);
  });

  const handleAvatarSelect = (files: File[]) => {
    setValue("avatar", files);
  };

  const handlePosterSelect = (files: File[]) => {
    setValue("poster", files);
  };

  return (
    <div className="flex flex-col gap-8 h-full flex-grow">
      <header className="flex items-center justify-between py-4 px-10">
        <h3 className="text-white font-semibold text-lg">User Profile</h3>
        <Link href="/home">
          <Cross className="text-gray-400 hover:text-white w-10 h-10" />
        </Link>
      </header>
      <section className="flex gap-24 h-full w-full px-10">
        <form onSubmit={onSubmit} className="flex flex-col gap-6 w-[300px]">
          <div className="flex flex-col gap-1">
            <label
              className="text-zinc-200 font-semibold text-sm"
              htmlFor="name"
            >
              SHOW NAME
            </label>
            <input
              type="text"
              id="name"
              className="bg-zinc-900 rounded-[4px] px-4 py-2 focus:outline-none text-white w-full"
              {...register("name")}
            />
          </div>

          <div className="border-[0.1px] border-zinc-600 rounded-full w-full"></div>

          <div className="flex flex-col gap-1">
            <label
              className="text-zinc-200 font-semibold text-sm"
              htmlFor="nickname"
            >
              PRONOUNS
            </label>
            <input
              type="text"
              id="nickname"
              className="bg-zinc-900 rounded-[4px] px-4 py-2 focus:outline-none text-white w-full"
              {...register("nickname")}
            />
          </div>

          <div className="border-[0.1px] border-zinc-600 rounded-full w-full"></div>

          <div className="flex flex-col gap-1">
            <label
              className="font-semibold text-zinc-200 text-sm"
              htmlFor="avatar"
            >
              AVATAR
            </label>
            <button
              id="avatar"
              className="bg-[#5865f2] hover:bg-blue-700 text-white font-semibold w-[150px] py-1 rounded-[4px]"
              onClick={handleOpen}
            >
              Change avatar
            </button>
          </div>

          <div className="border-[0.1px] border-zinc-600 rounded-full w-full"></div>

          <div className="flex flex-col gap-1">
            <label
              className="font-semibold text-zinc-200 text-sm"
              htmlFor="poster"
            >
              POSTER PROFILE
            </label>
            <button
              id="poster"
              className="bg-[#5865f2] hover:bg-blue-700 text-white font-semibold w-[150px] py-1 rounded-[4px]"
              onClick={handleOpenPoster}
            >
              Change poster
            </button>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-zinc-200 font-semibold text-sm">
              CHANGE THEME
            </span>
            <div className="flex items-center gap-4">
              <div className="flex flex-col gap-1">
                <div
                  style={{ background: primaryColor }}
                  className="bg-zinc-900 rounded-[4px] px-4 py-2 flex items-center gap-2 relative"
                >
                  <input
                    {...register("primaryColor")}
                    className="w-8 h-8 opacity-0"
                    type="color"
                  />
                  <Pen className="text-gray-400 h-3 w-3 absolute top-1 right-1" />
                </div>
                <span className="text-xs text-zinc-200">Primary</span>
              </div>
              <div className="flex flex-col gap-1">
                <div className="flex flex-col gap-1">
                  <div
                    style={{ background: secondaryColor }}
                    className="bg-zinc-900 rounded-[4px] px-4 py-2 flex items-center gap-2 relative"
                  >
                    <input
                      {...register("secondaryColor")}
                      className="w-8 h-8 opacity-0"
                      type="color"
                    />
                    <Pen className="text-gray-400 h-3 w-3 absolute top-1 right-1" />
                  </div>
                  <span className="text-xs text-zinc-200">Realce</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-[0.1px] border-zinc-600 rounded-full w-full"></div>

          <div className="flex flex-col gap-1">
            <label
              className="text-zinc-200 font-semibold text-sm"
              htmlFor="description"
            >
              ABOUT ME
            </label>
            <p className="text-sm text-zinc-200">
              You can use Markdown and links that you want
            </p>
            <textarea
              cols={5}
              id="description"
              className="bg-zinc-900 rounded-[4px] px-4 py-2 focus:outline-none text-zinc-400 w-full resize-none h-[120px]"
              {...register("description")}
            />
          </div>

          <button
            className="text-white font-semibold text-sm bg-green-700 w-[150px] rounded-[4px] px-2 py-1 duration-200 hover:bg-green-900"
            type="submit"
          >
            Save changes
          </button>
        </form>

        <div className="flex flex-col gap-1">
          <h4 className="text-sm text-zinc-200 font-semibold">PREVIEW</h4>
          <div
            style={{
              background: `linear-gradient(to top, ${secondaryColor}, ${primaryColor})`,
            }}
            className="w-[275px] h-[400px] rounded-xl bg-gradient-to-t flex flex-col px-[6px] py-[6px] shadow-xl"
          >
            <div
              style={{
                background: primaryColor,
              }}
              className="flex flex-col w-full h-full rounded-[8px] relative border border-zinc-900/20"
            >
              <img
                src={poster}
                alt=""
                className="w-full h-[100px] object-cover rounded-tl-[4px] rounded-tr-[4px]"
              />
              <img
                src={avatar}
                alt=""
                className="rounded-full h-14 w-14 absolute top-16 left-4 z-50"
              />
              <div className="flex flex-col px-4 mt-10 justify-between h-full max-w-full">
                <div className="flex flex-col gap-2 max-w-full">
                  <span className="text-white text-xl font-semibold">
                    {watch("name")}
                  </span>
                  <div className="flex items-center gap-2">
                    <p className="text-sm text-white font-semibold">
                      {user?.username}
                    </p>
                    <Dot className="text-white h-4 w-4" />
                    <p className="text-sm text-white font-semibold">
                      {watch("nickname")}
                    </p>
                  </div>
                  <p className="text-white max-w-full">
                    {watch("description")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {openAvatar && (
        <div className="h-screen w-[98%] flex items-center justify-center absolute bg-black/50">
          <div className="flex flex-col gap-2 bg-zinc-700 w-[450px] h-[300px] rounded-[4px] px-4 py-4">
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold text-xl">
                Select an image
              </span>
              <button onClick={() => setOpenAvatar(false)}>
                <Cross className="text-gray-400 hover:text-white w-8 h-8 duration-200" />
              </button>
            </div>
            <div className="bg-zinc-800 w-full h-full rounded-[4px] flex items-center justify-center">
              <FileUploadComp onFileSelect={handleAvatarSelect} />
            </div>
          </div>
        </div>
      )}

      {openPoster && (
        <div className="h-screen w-[98%] flex items-center justify-center absolute bg-black/50">
          <div className="flex flex-col gap-2 bg-zinc-700 w-[450px] h-[300px] rounded-[4px] px-4 py-4">
            <div className="flex items-center justify-between">
              <span className="text-white font-semibold text-xl">
                Select an image
              </span>
              <button onClick={() => setOpenPoster(false)}>
                <Cross className="text-gray-400 hover:text-white w-8 h-8 duration-200" />
              </button>
            </div>
            <div className="bg-zinc-800 w-full h-full rounded-[4px] flex items-center justify-center">
              <FileUploadComp onFileSelect={handlePosterSelect} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
