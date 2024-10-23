import React from "react";
import type { SVGProps } from "react";

export function InviteUser(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 20 20"
      {...props}
    >
      <path
        fill="currentColor"
        d="M13 6a3 3 0 1 1-6 0a3 3 0 0 1 6 0m5 2a2 2 0 1 1-4 0a2 2 0 0 1 4 0m-4 7a4 4 0 0 0-8 0v3h8zM6 8a2 2 0 1 1-4 0a2 2 0 0 1 4 0m10 10v-3a6 6 0 0 0-.75-2.906A3.005 3.005 0 0 1 19 15v3zM4.75 12.094A6 6 0 0 0 4 15v3H1v-3a3 3 0 0 1 3.75-2.906"
      ></path>
    </svg>
  );
}
