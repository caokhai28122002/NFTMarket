import React, { SVGProps } from "react";

const Menu = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="130"
      height="130"
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect
        x="31"
        y="38.0001"
        width="69"
        height="65"
        fill="url(#patternmenu)"
      />
      <path
        d="M128.82 64.9101C128.82 100.207 100.207 128.82 64.91 128.82C29.6135 128.82 1 100.207 1 64.9101C1 29.6136 29.6135 1.00012 64.91 1.00012C100.207 1.00012 128.82 29.6136 128.82 64.9101Z"
        stroke="#FFE5FF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <defs>
        <pattern
          id="patternmenu"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_10_2457"
            transform="scale(0.0144928 0.0153846)"
          />
        </pattern>
        <image
          id="image0_10_2457"
          width="69"
          height="65"
          xlinkHref="data:image/png;base64,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"
        />
      </defs>
    </svg>
  );
};

export default Menu;
