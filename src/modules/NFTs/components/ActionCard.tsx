import Symbol from "@/icons/Symbol";
import React from "react";

const ActionCard = () => {
  return (
    <div className="bg-[#343444] flex-grow lg:w-[calc(100%*(1/4)-10px-1px)] xl:w-[calc(100%*(1/5)-10px-1px)] h-fit p-4 text-white flex flex-col gap-4 rounded-xl">
      <div className="relative w-full h-fit">
        <img className="w-full rounded-xl" src="/images/boom.png" alt="anh" />
        <div className="flex flex-row justify-end items-center absolute right-3 top-3 bg-black rounded-lg px-2 py-1  ">
          <Symbol /> <p>100</p>
        </div>
      </div>
      <p className="flex justify-between text-xs md:text-lg">
        Hamlet Contemplates
        <span className="px-2 bg-[#5142FC] rounded-[10px] min-w-fit text-base uppercase">
          bsc
        </span>
      </p>
      <div className="w-full flex flex-row justify-between items-center">
        <div className="flex justify-start flex-row items-center gap-4 ">
          <img src="/images/avatar.png" className="rounded-md" alt="avatar" />
          <div className="flex flex-col items-start">
            <p className="text-[#8A8AA0]">Creator</p>
            <p>SalvadorDali</p>
          </div>
        </div>
        <div className="flex flex-col items-end">
          <p className="text-[#8A8AA0]">Current Bid</p>
          <p>4.89 ETH</p>
        </div>
      </div>
    </div>
  );
};

export default ActionCard;
