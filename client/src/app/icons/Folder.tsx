import React from "react";
import type { SVGProps } from "react";

export function Folder(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <defs>
        <mask id="ipSFolderPlus0">
          <g fill="none" strokeWidth={4}>
            <path
              fill="#fff"
              stroke="#fff"
              strokeLinejoin="round"
              d="M5 8a2 2 0 0 1 2-2h12l5 6h17a2 2 0 0 1 2 2v26a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2z"
            ></path>
            <path
              stroke="#000"
              strokeLinecap="round"
              d="M18 27h12m-6-6v12"
            ></path>
          </g>
        </mask>
      </defs>
      <path
        fill="currentColor"
        d="M0 0h48v48H0z"
        mask="url(#ipSFolderPlus0)"
      ></path>
    </svg>
  );
}
