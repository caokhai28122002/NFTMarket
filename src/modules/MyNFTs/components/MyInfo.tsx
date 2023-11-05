import Avatar from "@/components/Avatar";
import useAccount from "@/hooks/useAccount";
import { cutString } from "@/libraries/utils";
import { FCC } from "@/types";
import React from "react";

const MyInfo: FCC = () => {
  const { account, request } = useAccount();
  request();

  return (
    <div className="flex flex-row items-center gap-3 px-4 py-8 w-full ">
      <Avatar
        username={account ?? ""}
        className="w-40 h-40 border rounded-3xl"
      />
      <div className="flex flex-col w-full">
        <a className="text-[#8A8AA0] text-sm">Owned By</a>
        <a className="text-3xl text-white">{cutString(account ?? "", 10, 7)}</a>
      </div>
    </div>
  );
};

export default MyInfo;
