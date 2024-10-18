import React from "react";
import type { SVGProps } from "react";

export function Cross(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 21 21"
      {...props}
    >
      <g
        fill="none"
        fillRule="evenodd"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        transform="translate(2 2)"
      >
        <circle cx={8.5} cy={8.5} r={8}></circle>
        <path d="m5.5 5.5l6 6m0-6l-6 6"></path>
      </g>
    </svg>
  );
}
