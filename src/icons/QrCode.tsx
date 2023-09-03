import React, { SVGProps } from "react";

const QrCode = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      {...props}
      width="130"
      height="130"
      viewBox="0 0 130 130"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <rect x="39" y="39.0001" width="52" height="52" fill="url(#qrcode)" />
      <path
        d="M128.82 64.9101C128.82 100.207 100.207 128.82 64.91 128.82C29.6135 128.82 1 100.207 1 64.9101C1 29.6136 29.6135 1.00012 64.91 1.00012C100.207 1.00012 128.82 29.6136 128.82 64.9101Z"
        stroke="#FFE5FF"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <defs>
        <pattern
          id="qrcode"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use xlinkHref="#image0_10_2453" transform="scale(0.0192308)" />
        </pattern>
        <image
          id="image0_10_2453"
          width="52"
          height="52"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAA0CAYAAADFeBvrAAAABHNCSVQICAgIfAhkiAAABNZJREFUaEPtmnvInmMcxz8vY5j9wXLMHFrMJmqEhLQhh2yRDFv7A4XNHxSKUZuk/DGFPxglRFEOKWHlGCm0Tf5wiOTUcpjmbM7P+tTvqcv93tfz3vf9Hp5nz/P+6q3nve/rd93X7/r9ru/vdA21Wq2fqU7TgWXAo9VZRjVyT+B9YFrFWaYPtVqtVsXB7WGXAA/V5Gk6fAbwRQ2B6HuBlgKvATtltnQH4Dvgt6ZbXpPP7x0ADHXg2w14BjjMMUUNnQa8XPOj3R6+O/AWcMRACaSKbwXOb7D9uwBPAdcF7wnx/0/Am8AK4C/gGOBJ4I8G3/gHOAXYAlTSkLZ7P3BZg4/J8jhwcfCeCrwUv18EFgJ/AicDrzecX4H2BzZPChQ7uCZ8z86ZHf0XuAi4Md7/AHwaaKljvCV8yS/xXN+Xauhb4DhAv1NG/wFTgbfj5ag1dA1w1wjmsRy4p2SMqCl6FikV6CvgwBHmdzM1VWmwBPLQSjsC6wM5iqCQakjnexWwNVDq3uBPNfQKsBLQ6R0CXBpotgG4Gfi7YHKphjzsa4P3S+DKQMWchlz3sWHSU3WsZZruJJALvS2YNEOFlVKB6qJcKtAs4F3AQPgj4OjYvJxA/1v/pEDAwcDsOJiaxCdjrKFdgePjCBgzvgOIcuOmoRwYjZXJ5eafFCjdmSIoeEg/DDMo20GR5dCIz3yfgsLewBmBVN8Ab4QJpX7od+AJwDgwN79odkGJH2oECiP4vGGvU4FyvGMVyw2mQKYPJ7azwJrqmQJ8HJmvrHOBVZHlGtfpuwxd9gUWxe/0E3sBq8P8vo44UEeckqinFQxLPXJ+qKYMHYfn0occU86xVlrTwAikyS0BzDbrkgUWc/wHgzHVkCHOc4DpRo7MZj8LJDRlMBYsFknkvwn4tThJ1dCnrlC5WK7KPOZR8wBzp8OBjYDRQ0pp+jDhKJdqqGsCqWJzfyPdlDQHF7ggHmpaz3dwuFUEaDJGlLujrD7YBBRy6UO6MNPxx+JBLmPtGZTrC4HOBE4CjLlSk0sTPLPGc4A0YzQm9JA/HOrQx1je0vnmaA/giiiKfA/cV+J8R21ydwJXl6ygSsaasp0OPBuLbXJ22jy1Ua74se1eIFFuPjAnHNx+UTMT5XS2ZpRSFQ3ZPVgcJSgbVzPDLH1+Xsyjg7TYYlGljDRj0weTSKm2hrpZJMmZ4rhlrONd9emqQBbhHwlzsJ4mirmTZqWik5SmDz8CH0RdzrDmhhiTlrEsX50bZWQ7FjazjN0mREPpbnoGbJV0ohzK9UxdricFUvWSQPB5OE9R7vJAOp2gEa/1N1FOx3hh8JiZWt41ZVgHPBDPLbzbkDLTtLPwajw/Crg+HKvFk3ZMmGpoH+D2iLA3RUfD7+ZMznUfFL5tStUeaxU/lGqrSiw3od2H4jnoC4F0qiKX6j47HKr9GZHMP8le6t2FawCOOSu6D47RXHWIopc90fdK6nJeFTBe9OZIGbUbXi/EyzHtD6V+aARQG/a6Z3qsaX9ouxRIlLs2zMB83uzw6djvdsPLVKIupQ2vI6OF2W4z1plLRyvS6qgrtfXrTN7tsYMlkKVZD27u8pKmaG+1WJodLy35PVOOTpeXfG9PV1QednnJxQqJOerFC4AKax5lxNCf9+X66ormNmaxphWpTaE8AAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default QrCode;
