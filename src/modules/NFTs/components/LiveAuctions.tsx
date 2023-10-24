import Symbol from "@/icons/Symbol";
import { FCC } from "@/types";
import React from "react";
import ActionCard from "./ActionCard";

type Props = {};

const LiveAuctions: FCC = (props: Props) => {
  return (
    <div>
      <div className="h-full w-full min-h-[calc(100vh-128px)] items-center pt-16">
        <div className="flex flex-row justify-between text-white">
          <p className="text-2xl">Live Auctions</p>
          <p className="">EXPLORE MORE</p>
        </div>
        <div className="flex flex-row w-full justify-between">
          {Array.from({ length: 4 }).fill(0).map((v,i) => (
            <ActionCard key={i} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LiveAuctions;
