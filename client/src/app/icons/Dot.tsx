import React from "react";
import type { SVGProps } from "react";

export function Dot(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <path
        fill="currentColor"
        stroke="currentColor"
        strokeWidth={4}
        d="M24 33a9 9 0 1 0 0-18a9 9 0 0 0 0 18Z"
      ></path>
    </svg>
  );
}
