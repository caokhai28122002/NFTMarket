import React, { SVGProps } from "react";

const Right = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="12"
      height="20"
      viewBox="0 0 12 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect width="12" height="20" fill="url(#right-icon)" />
      <defs>
        <pattern
          id="right-icon"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_10_2363" transform="scale(0.0833333 0.05)" />
        </pattern>
        <image
          id="image0_10_2363"
          width="12"
          height="20"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAUCAYAAAC58NwRAAAABHNCSVQICAgIfAhkiAAAAM1JREFUKFON0zsKwkAUheE/vZ1rsLP2CW5I8AHqHlTwAa7FwhUoqNi4CMHOUuXKwERuwp1MUibnmzsnmSQiUgMOwANoEbkSEXkCVZ87xZADO6CvFj4CHUCsYQ64+ytgXAalwGXXwCiGNAihtt5aHlgo8yIsUNgpBEKoVwQcmgBL1eEWAwNgq8C9CMyBmQpfgW4ILICpCp/9139bIB+++PP1cQvkgRVuAt90mgbWnhs6rCeUCqdgAwytgqHj/QIq/mGmYAjUgb36Rf8FLfADddBviYgUW8MAAAAASUVORK5CYII="
        />
      </defs>
    </svg>
  );
};

export default Right;
