import Avatar from "@/components/Avatar";
import { cutString } from "@/libraries/utils";
import { FCC } from "@/types";
import React from "react";
import { useAccount } from "wagmi";

const MyInfo: FCC = () => {
  const { address } = useAccount();

  return (
    <div className="flex flex-row items-center gap-3 px-4 py-8 w-full ">
      <Avatar
        username={address ?? ""}
        className="w-40 h-40 border rounded-3xl"
      />
      <div className="flex flex-col w-full">
        <a className="text-[#8A8AA0] text-lg">Owned By</a>
        <a className="text-3xl text-white uppercase">{cutString(address ?? "", 10, 7)}</a>
      </div>
    </div>
  );
};

export default MyInfo;
