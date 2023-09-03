import React, { SVGProps } from "react";

const ArrowRight = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <circle
        cx="40"
        cy="40.0001"
        r="39"
        stroke="#E05BFF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <rect
        x="35"
        y="29.0001"
        width="12"
        height="22"
        fill="url(#patternarrowr)"
      />
      <defs>
        <pattern
          id="patternarrowr"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_10_2311"
            transform="scale(0.0833333 0.0454545)"
          />
        </pattern>
        <image
          id="image0_10_2311"
          width="12"
          height="22"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAWCAYAAAD0OH0aAAAABHNCSVQICAgIfAhkiAAAASpJREFUOE+NkzlPAzEQhb8tuIJEQemKEkEQCeEqEBVS/jIIUSEhroomBbdgtwgQIQoojR67IbPGBtxZ+76d9zwzmc/9HHAAfABbOF755WQ+9y/AbKW5BlZwvKUYAT1g3ggEraYqCZgBjoBFA10C6zEo895DwTRwDDQNdAWshVAJ6BRMAefAgoFugZbNNAJKqAGcBVDNXh0YQaeRTJs4Bj+BdKUboBMH0pl6aWCYvGAf2Ble/wPsAt2/gYIx4ARo2ylIhZ6oGtky4geNTOxZx6s/W/F9NSr9sHExG99iVbOjIbG6vGxsPH7dHYN66ALZ0PDZgPLcwfFkd0PjrUk9DMR3wAaOfrhIAi6ApeA1tHXPsa0ToF2erD7KczslLkPnXuu5B7wD26HnsMonHVGJD8fAxbYAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

export default ArrowRight;
