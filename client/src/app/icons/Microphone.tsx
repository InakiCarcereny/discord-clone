import React from "react";
import type { SVGProps } from "react";

export function Microphone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 36 36"
      {...props}
    >
      <path
        fill="currentColor"
        d="M18 24c3.9 0 7-3.1 7-7V9c0-3.9-3.1-7-7-7s-7 3.1-7 7v8c0 3.9 3.1 7 7 7"
        className="clr-i-solid clr-i-solid-path-1"
      ></path>
      <path
        fill="currentColor"
        d="M30 17h-2c0 5.5-4.5 10-10 10S8 22.5 8 17H6c0 6.3 4.8 11.4 11 11.9V32h-3c-.6 0-1 .4-1 1s.4 1 1 1h8c.6 0 1-.4 1-1s-.4-1-1-1h-3v-3.1c6.2-.5 11-5.6 11-11.9"
        className="clr-i-solid clr-i-solid-path-2"
      ></path>
      <path fill="none" d="M0 0h36v36H0z"></path>
    </svg>
  );
}
