import { FCC } from "@/types";
import React, { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string;
};

const Button: FCC<Props> = ({ children, className, ...props }) => {
  return (
    <div className="border-[#E05BFF] border-[2px] p-2 rounded-full group hover:border-[#E05BFF99]">
      <button
        {...props}
        className={`bg-[#E05BFF] rounded-full min-h-[42px] px-3 font-semibold text-white ring-8 ring-[#E05BFF40] group-hover:bg-[#E05BFF99] ${className}`}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
