import Symbol from "@/icons/Symbol";

import Eye from "@/icons/Eye";
import { FCC } from "@/types";
import React, { useState } from "react";
import clsx from "clsx";

type Props = {};

const NFTDetail: FCC = (props: Props) => {
  const [count, setCount] = useState(0);
  const [love, setlove] = useState(0);
  const [data, setData] = useState({
    nameOwned: "Ralph Garraway",
    nameCreated: "Freddie Carpenter",
    dateTime: new Date(),
  });

  return (
    <div className="h-full w-full min-h-[calc(100vh-128px)] items-center pt-16">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-7">
          <img src="/images/Flower.png" alt="banner image" />
        </div>
        <div className="col-span-12 xl:col-span-5 items-center lg:items-start">
          <div className="flex flex-row w-full xl:w-fit items-center gap-2 justify-between">
            <p className="text-white font-bold text-[24px] uppercase">
              “The Pretty Fantasy Flower illu…
            </p>
            <button
              className="flex h-[35px] w-[76.05px] j bg-gray-950 justify-center items-center border rounded-[100px] hover:border-[#ffffff]"
              onClick={() => {
                setCount(count + 1);
              }}
            >
              <Eye /> <a className="text-white">{count}</a>
            </button>
            <button
              className={clsx(
                "flex h-[35px] w-[76.05px] justify-center text-center items-center rounded-[100px] border hover:border-[#ffffff]",
                {
                  "bg-blue-700": love >= 1,
                  "bg-gray-950": love < 1,
                }
              )}
              onClick={() => {
                setlove((prev) => prev + 1);
              }}
            >
              <Symbol />
              <a className="text-white">{love}</a>
            </button>
          </div>
          <div className="flex flex-row gap-[150px] gap-y-2">
            <div className="flex flex-row gap-3 w-[300px] h-[68px] border rounded-2xl border-[#343444] bg-[#343444]">
              <img
                className="rounded-2xl"
                src="/images/avatar.png"
                alt="avatar"
              />
              <div className="flex flex-col w-full">
                {" "}
                <a className="text-[#8A8AA0] text-sm">Owned By</a>
                <a className="text-lg text-white">{data.nameOwned}</a>
              </div>
            </div>
            <div className="flex flex-row gap-3 w-[300px] h-[68px] border rounded-2xl border-[#343444] bg-[#343444] ">
              <img
                className="rounded-2xl"
                src="/images/avatar.png"
                alt="avatar"
              />
              <div className="flex flex-col w-full">
                {" "}
                <a className="text-[#8A8AA0] text-sm">Create By</a>
                <a className="text-lg text-white">{data.nameCreated}</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetail;
