import React from "react";
import type { SVGProps } from "react";

export function Hash(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="M9.697 4L6.678 21M17.054 4l-3.019 17M21 8.781H3m18 7.438H3"
      ></path>
    </svg>
  );
}
