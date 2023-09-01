import React, { SVGProps } from "react";

const MonthlyIncome = ({ ...props }: SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="96"
      height="96"
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <circle
        cx="48.4208"
        cy="48.1698"
        r="46.58"
        stroke="#E05BFF"
        stroke-width="2"
        stroke-linejoin="round"
      />
      <rect
        x="34.001"
        y="30.9998"
        width="29"
        height="35"
        fill="url(#pattern1)"
      />
      <defs>
        <pattern
          id="pattern1"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            xlinkHref="#image0_10_2288"
            transform="scale(0.0344828 0.0285714)"
          />
        </pattern>
        <image
          id="image0_10_2288"
          width="29"
          height="35"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAjCAYAAABo4wHSAAAABHNCSVQICAgIfAhkiAAABMFJREFUSEutlwmIVmUUhp9RM9IytELMck8qrWiPCne01CgrU0Ezo2yTItsxBbHcFbdypTQiSyNKykJsMbVstywSaZEK3LFFo80mHjl3uHPnzv3nDz/4ucPc7zvvd855z3vOraisrKSM9TwwFfi0jDM1tlaUAG0IXAq0iJPPAf5eBX4ANv4f8FKg44AHga/C+AHgaOAo4FxgAPBaucClQJcBAt2VY1hvXwKeOpKgw4HZgCHWm4qUcYlwPfAlcB+wphzgIk+/AdYCm4FTc4x+D9wC7AeuPFKgbwKjgc8LDJrTmcDTmT31gK+BF/LOFnmql6OA44GHAUPqT4P/AncAZwArgsXp2qsPXA1cBryXBS4F+giwD+iec+OVwM3A5ZHf7JZ3gfnA8nJBZwCvF4TXCLQJIul5Eo1HgXuAF4GXywW9HWgJTEkZlMUavzYiYF6t5dNTxj8BngEWlgtqGVgyRcU/BrgAuAk4IS4j9g7gFWBaVEA1Z4ty+hYwCJAUg1MGE0+XAjcA5wPuNSpGYHt4rnDIavfVCbQP8EaEVcKYr5NSJw8Bw4B+wG1Az9Q7PTfXPhvEc2caNc9TN8pYC1/DjcP4H5kLq78S7R9gDjAyNPqBaAiPB5E85uWqVh7oXKAH0Cl2KQ7vR/gahQ53A/xbpdLrPUBTYEM0gVaAlzwNkFTtY89hk1nQ4wBDcQmwJcLzN7AV+Bi4GPgWsAbN2W9AX+DCEA2j4tkPgCFxadO0C1DLc0HtKq0BPXGpNhoaH4YM4eKCuvWVYd8NdImLnx1Es/T+zHraDPgJOC886xhPZa8rMCka+rFxGVmt2tRgJ/AscCJwRVzwoygdFa5aePVKg4bLtS6IcWc8JYvFblhlsk9FQW29LuN98xD8c4Afg93a9yKVSU4NqfUlMfTWzZuCLJJCKTwzDEsao6Exe61MN4e9MsCrgV9SubUV2vAnJKCqjxOC0ub6DFgP3A1Yp96wf6iMrHVuquIFsDf6brpe7UCyXm3+GRgIzFJWBe0MfBjDlzfzxjLOWchyuBcYCvwF/B4l8WsOmZS+bZH/5LXRkvnKpMvBYJqgbwM27MfihZOCBFHkkyXJrEPLpWgJ/F30UfdZSs5Sps+6tf7nC6peWlPOtIbH5q2+jgAuAu4HDpYAS78WWF4I6DJNku0h4FZgkaAWrVqph2dFhzCMJ0e4TsmErC74X0Q65MSTYVdxUTKnJERqEkWvZJlPpc//qThGwgZQauKTyQ5otjTXovDMZq6n9lvrt4YM+j9DY34XROEbJgllvaqtRctoOT9ZUi7tqG6ONFUrq70Wv0lXSWxnhsb8mg/7ZdtaEBX0hGRWgsOcnhklc+yXQpV8ZkFtuh2AscE65c+QSwZLSyba7rLrnQBIBjjVqneomjV+Vejx4XNZ0GOAJ6KuFAUnB71XDPx2UYXsk/MyqH5g+TElgSTlBEDtXgVMD2WqNbzJC7v+kuiBeph8tSkQMtBPCmVOstgQbPguwymwkndNbckvmpGUsYlRq5JBj6W99exo2S5C7uCmlxJIoXdu8lOj1lXqq82Dk4Ebw1tJZaNXBu0wTntexqHbXuxnSJ5EVrtAXUA9YHglmZJpzTr92aTVahmtXivqdVr/AZjUhle18NQMAAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default MonthlyIncome;
