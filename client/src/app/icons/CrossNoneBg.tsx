import React from "react";
import type { SVGProps } from "react";

export function CrossNoneBg(props: SVGProps<SVGSVGElement>) {
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
        strokeWidth={2}
        d="M20 20L4 4m16 0L4 20"
      ></path>
    </svg>
  );
}
