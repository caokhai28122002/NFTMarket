import Avatar from "@/components/Avatar";
import { cutString } from "@/libraries/utils";
import { FCC } from "@/types";
import React from "react";

const MyInfo: FCC = () => {
  return (
    <div className="flex flex-row items-center gap-3 px-4 py-8 w-full ">
      <Avatar
        username={"0x8435068Abdf9f9003c9CFb790F5446b9C4C0f3A6"}
        className="w-40 h-40 border rounded-3xl"
      />
      <div className="flex flex-col w-full">
        <a className="text-[#8A8AA0] text-sm">Owned By</a>
        <a className="text-3xl text-white">
          {cutString("0x8435068Abdf9f9003c9CFb790F5446b9C4C0f3A6", 10, 7)}
        </a>
      </div>
    </div>
  );
};

export default MyInfo;
