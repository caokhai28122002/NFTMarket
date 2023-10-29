import Symbol from "@/icons/Symbol";

import Eye from "@/icons/Eye";
import { FCC } from "@/types";
import React, { useEffect, useState } from "react";
import clsx from "clsx";

type Props = {};

const NFTDetail: FCC = (props: Props) => {
  const [time, setTime] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
    milliseconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Cập nhật thời gian sau mỗi mili giây (1 giây = 1000 mili giây)
      const newMilliseconds = (time.milliseconds + 1) % 1000;
      const newSeconds =
        (time.seconds + Math.floor((time.milliseconds + 1) / 1000)) % 60;
      const newMinutes =
        (time.minutes + Math.floor((time.seconds + 1) / 60)) % 60;
      const newHours = time.hours + Math.floor((time.minutes + 1) / 60);

      setTime({
        hours: newHours,
        minutes: newMinutes,
        seconds: newSeconds,
        milliseconds: newMilliseconds,
      });
    }, 1); // Cập nhật mỗi 1 mili giây

    return () => {
      clearInterval(intervalId);
    };
  }, [time]);
  const [count, setCount] = useState(0);
  const [love, setlove] = useState(0);
  const [data, setData] = useState({
    nameOwned: "Ralph Garraway",
    nameCreated: "Freddie Carpenter",
    dateTime: new Date(),
    ETH: "4.89 ETH",
    time: "8 hours ago",
  });
  const action = {
    Artist: "Ralph Garraway",
    Size: "3000 x 3000",
    Create: "04 April , 2021",
    Collection: "Cyberpunk City Art",
    context:
      "Habitant sollicitudin faucibus cursus lectus pulvinar dolor nonultrices eget. Facilisi lobortisal morbi fringilla urna amet sedipsum vitae ipsum malesuada. Habitant sollicitudin faucibus cursuslectus pulvinar dolor non ultrices eget. Facilisi lobortisal morbifringilla urna amet sed ipsum",
  };
  const menuItems = ["Bid History", "Info", "Provenance"];
  const [activeMenuItem, setActiveMenuItem] = useState<number | null>(null);
  return (
    <div className="h-full w-full flex justify-center items-center py-16">
      <div className="container max-w-screen-2xl grid grid-cols-12 gap-12">
        <div className="col-span-12 xl:col-span-6">
          <img src="/images/Flower.png" alt="banner image" />
        </div>
        <div className="col-span-12 xl:col-span-6 items-center lg:items-start flex flex-col gap-6">
          <div className="flex flex-row w-full items-center gap-2 justify-between">
            <p className="text-white font-bold text-[24px] uppercase ">
              “The Pretty Fantasy Flower illu…
            </p>
            <div className="flex space-x-1">
              <button
                className="flex h-[35px] w-[76.05px] space-x-1 bg-gray-950 justify-center items-center border rounded-[100px] hover:border-[#ffffff]"
                onClick={() => {
                  setCount(count + 1);
                }}
              >
                <Eye /> <a className="text-white">{count}</a>
              </button>
              <button
                className={clsx(
                  "flex h-[35px] w-[76.05px] space-x-1 justify-center text-center items-center rounded-[100px] border hover:border-[#ffffff]",
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
          </div>
          <div className="flex flex-row  w-full space-x-8 gap-y-2">
            <div className="flex flex-row items-center gap-3 px-2 w-full h-[68px] border rounded-2xl border-[#343444] bg-[#343444]">
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
            <div className="flex flex-row items-center gap-3 px-2 w-full h-[68px] border rounded-2xl border-[#343444] bg-[#343444] ">
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
          <a className="text-white text-sm font-normal w-full h-[65px]">
            {action.context}
          </a>
          <div className="grid w-full grid-cols-2 gap-6">
            <div className="text-white flex flex-col bg-[#343444] border rounded-lg border-[#343444] p-4">
              <a className="p-2">
                Artist :{" "}
                <span className="font-semibold text-base">{action.Artist}</span>
              </a>
              <a className="p-2">
                Size :{" "}
                <span className="font-semibold text-base">{action.Size}</span>
              </a>
              <a className="p-2">
                Create :{" "}
                <span className="font-semibold text-base">{action.Create}</span>
              </a>
              <a className="p-2">
                Collection :{" "}
                <span className="font-semibold text-base">{action.Artist}</span>
              </a>
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="flex items-center text-white bg-[#343444] border rounded-lg border-[#343444] justify-between p-4 px-6">
                Current Bid
                <a className="">{data.ETH}</a>
              </div>
              <div className="text-white bg-[#343444] border rounded-lg border-[#343444] flex justify-center items-center font-bold text-2xl p-4 px-6">
                <p>   {time.hours.toString().padStart(2, '0')}:{time.minutes.toString().padStart(2, '0')}:{time.seconds.toString().padStart(2, '0')}</p>
              </div>
            </div>
          </div>
          <button className="flex w-full h-[50px] justify-center items-center border rounded-full text-white hover:bg-[#E250E5] hover:ring-2 hover:ring-white">
            Place a bid
          </button>
          <div className="flex flex-row w-full gap-12 text-white pb-2">
            {menuItems.map((item, index) => (
              <a
                key={index}
                className={`hover:text-blue-500 text-[15px] font-semibold cursor-pointer ${
                  activeMenuItem === index ? "border-b border-blue-500" : ""
                }`}
                onMouseEnter={() => setActiveMenuItem(index)}
                onMouseLeave={() => setActiveMenuItem(null)}
              >
                {" "}
                {item}
              </a>
            ))}
          </div>

          <div className="text-white flex justify-between w-full h-[68px] pb-2 border-b-[1px] border-b-[#1F1F2C]">
            <div className="text-[15px] flex flex-row gap-2 items-center">
              <img
                className="rounded-2xl"
                src="/images/avatar.png"
                alt="avatar"
              />
              <div className="flex flex-col">
                <a className="h-[21px] w-[125px]">{data.nameCreated}</a>{" "}
                <a>{data.time}</a>
              </div>
            </div>
            <a className="px-2">{data.ETH}</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetail;
