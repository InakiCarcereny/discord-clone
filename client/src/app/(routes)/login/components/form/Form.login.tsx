"use client";

import { useForm } from "react-hook-form";

import { LoginValues } from "@/app/models/FormValues.d";
import { useAuth } from "@/app/(routes)/register/context/auth.context";

export function Form() {
  const { register, handleSubmit, formState } = useForm<LoginValues>();

  const { errors } = formState;

  const { signIn } = useAuth();

  const onSubmit = handleSubmit(async (data) => {
    signIn(data);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-6 mt-4">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="username"
          className="text-zinc-300 font-medium text-base"
        >
          USERNAME
        </label>
        <input
          className="h-11 bg-[#181717] rounded-[4px] text-white px-2 focus:outline-none text-sm"
          type="text"
          id="username"
          {...register("username", {
            required: "Username is required",
            pattern: {
              value: /^[a-zA-Z0-9_]+$/,
              message: "Invalid username",
            },
          })}
        />
      </div>

      {errors.username && (
        <p className="text-red-500">{errors.username.message}</p>
      )}

      <div className="flex flex-col gap-2">
        <label
          htmlFor="password"
          className="text-zinc-300 font-medium text-base"
        >
          PASSWORD
        </label>
        <input
          className="h-11 bg-[#181717] rounded-[4px] text-white px-2 focus:outline-none text-sm"
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
          })}
        />
        <span className="text-xs text-cyan-600 font-semibold">
          Dont remember your password?
        </span>
      </div>

      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}

      <button
        type="submit"
        className="text-white bg-[#5865f2] hover:bg-blue-700 duration-200 font-bold py-2 px-4 rounded h-12"
      >
        Login
      </button>
    </form>
  );
}
