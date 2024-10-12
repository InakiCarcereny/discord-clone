import React from "react";
import type { SVGProps } from "react";

export function Separator(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 2048 2048"
      {...props}
    >
      <path fill="currentColor" d="M1024 128v1792H896V128z"></path>
    </svg>
  );
}
