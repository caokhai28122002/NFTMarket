import { FCC } from "@/types";
import React from "react";

type Props = {};

const HeroSection: FCC = (props: Props) => {
  return (
    <div className="container bg-[#E05BFF] ring-2 ring-[#E05BFF50] py-6 rounded-xl bg-opacity-50 px-10 my-20">
      <span className="font-bold text-white text-2xl">
        Home / Create Your NFT
      </span>
    </div>
  );
};

export default HeroSection;
