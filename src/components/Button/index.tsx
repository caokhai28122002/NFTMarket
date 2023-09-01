import { FCC } from "@/types";
import React from "react";

const Button: FCC = ({ children }) => {
  return (
    <div className="border-[#E05BFF] border-[2px] p-2 rounded-full group hover:border-[#E05BFF99]">
      <button className="bg-[#E05BFF] rounded-full min-h-[42px] px-3 font-semibold text-white ring-8 ring-[#E05BFF40] group-hover:bg-[#E05BFF99]">
        {children}
      </button>
    </div>
  );
};

export default Button;
