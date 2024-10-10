"use client";

import { useForm } from "react-hook-form";

export interface FormValues {
  email: string;
  username: string;
  password: string;
  name: string;
  day: string;
  month: string;
  year: string;
}

export function Form() {
  const { register, handleSubmit, formState } = useForm<FormValues>();

  const { errors } = formState;

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col mt-4 gap-6">
      <div className="flex flex-col gap-2">
        <label className="text-zinc-300 font-medium text-base" htmlFor="email">
          Email
        </label>
        <input
          className="h-11 bg-[#181717] rounded-[4px] text-white px-2 focus:outline-none text-sm"
          id="email"
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address",
            },
          })}
        />
      </div>

      {errors.email && <p className="text-red-500">{errors.email.message}</p>}

      <div className="flex flex-col gap-1">
        <label className="text-zinc-300 font-medium text-base" htmlFor="name">
          Show name
        </label>
        <input
          className="h-11 bg-[#181717] rounded-[4px] text-white px-2 focus:outline-none text-sm"
          type="text"
          id="name"
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^[a-zA-Z0-9_]+$/,
              message: "Invalid name",
            },
          })}
        />
      </div>

      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <div className="flex flex-col gap-1">
        <label
          className="text-zinc-300 font-medium text-base"
          htmlFor="username"
        >
          Username
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

      <div className="flex flex-col gap-1">
        <label
          className="text-zinc-300 font-medium text-base"
          htmlFor="password"
        >
          Password
        </label>
        <input
          className="h-11 bg-[#181717] rounded-[4px] text-white px-2 focus:outline-none text-sm"
          type="password"
          id="password"
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters long",
            },
          })}
        />
      </div>

      {errors.password && (
        <p className="text-red-500">{errors.password.message}</p>
      )}

      <div className="flex flex-col gap-1">
        <label
          htmlFor="birthdate"
          className="text-zinc-300 font-medium text-base"
        >
          Birthdate
        </label>

        <div className="grid grid-cols-3 items-center gap-4">
          <select
            className="h-11 bg-[#181717] rounded-[4px] text-white px-2 focus:outline-none text-sm"
            id="day"
            {...register("day", {
              required: "Day is required",
            })}
          >
            <option value="Day">Day</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">11</option>
            <option value="12">12</option>
            <option value="13">13</option>
            <option value="14">14</option>
            <option value="15">15</option>
            <option value="16">16</option>
            <option value="17">17</option>
            <option value="18">18</option>
            <option value="19">19</option>
            <option value="20">20</option>
            <option value="21">21</option>
            <option value="22">22</option>
            <option value="23">23</option>
            <option value="24">24</option>
            <option value="25">25</option>
            <option value="26">26</option>
            <option value="27">27</option>
            <option value="28">1</option>
            <option value="29">1</option>
            <option value="30">1</option>
            <option value="31">1</option>
          </select>

          <select
            className="h-11 bg-[#181717] rounded-[4px] text-white px-2 focus:outline-none text-sm"
            id="month"
            {...register("month", {
              required: "Month is required",
            })}
          >
            <option value="month">Month</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
            <option value="11">11</option>
            <option value="12">12</option>
          </select>

          <select
            id="year"
            className="h-11 bg-[#181717] rounded-[4px] text-white px-2 focus:outline-none text-sm"
            {...register("year", {
              required: "Year is required",
            })}
          >
            <option value="year">Year</option>
            <option value="2000">2000</option>
            <option value="2001">2001</option>
            <option value="2002">2002</option>
            <option value="2003">2003</option>
            <option value="2004">2004</option>
            <option value="2005">2005</option>
            <option value="2006">2006</option>
            <option value="2007">2007</option>
            <option value="2008">2008</option>
            <option value="2009">2009</option>
            <option value="2010">2010</option>
            <option value="2011">2011</option>
            <option value="2012">2012</option>
            <option value="2013">2013</option>
            <option value="2014">2014</option>
            <option value="2015">2015</option>
            <option value="2016">2016</option>
            <option value="2017">2017</option>
            <option value="2018">2018</option>
            <option value="2019">2019</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            <option value="2023">2023</option>
            <option value="2024">2024</option>
            <option value="2025">2025</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        className="text-white bg-[#5865f2] hover:bg-blue-700 duration-200 font-bold py-2 px-4 rounded h-12"
      >
        Continue
      </button>
    </form>
  );
}
