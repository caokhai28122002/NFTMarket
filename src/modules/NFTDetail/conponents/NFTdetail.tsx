import Symbol from "@/icons/Symbol";

import Avatar from "@/components/Avatar";
import useAccount from "@/hooks/useAccount";
import useBuyNFT from "@/hooks/useBuyNFT";
import useNFTs from "@/hooks/useNFTByTokenID";
import Eye from "@/icons/Eye";
import { cutString } from "@/libraries/utils";
import Custom404 from "@/pages/404";
import { FCC } from "@/types";
import clsx from "clsx";
import { useRouter } from "next/router";
import { useState } from "react";
import TimeLive from "./TimeLive";
import NFTLoading from "./NFTLoading";

type Props = {};

const NFTDetail: FCC = (props: Props) => {
  const { query } = useRouter();
  const { nft, loading } = useNFTs(String(query.id));

  const { mutate, isDisable } = useBuyNFT(nft);

  const [love, setLove] = useState(0);

  const action = {
    Artist: "Ralph Garraway",
    Size: "3000 x 3000",
    Collection: "Cyberpunk City Art",
  };
  const menuItems = ["Bid History", "Info", "Provenance"];
  const [activeMenuItem, setActiveMenuItem] = useState<number | null>(null);

  if (loading) {
    return <NFTLoading />;
  }

  if (!loading && !nft) {
    return <Custom404 />;
  }

  return (
    <div className="h-full min-h-[calc(100vh-256px)] w-full flex justify-center items-center py-16">
      <div className="container max-w-screen-2xl grid grid-cols-12 gap-12">
        <div className="col-span-12 xl:col-span-6">
          <img
            src={nft?.image ?? ""}
            className="w-full aspect-square rounded-xl"
            alt="banner image"
          />
        </div>
        <div className="col-span-12 xl:col-span-6 items-center lg:items-start flex flex-col gap-6">
          <div className="flex flex-row w-full items-center gap-2 justify-between">
            <p className="text-white font-bold text-[24px] uppercase ">
              {nft?.name}
            </p>
            <div className="flex space-x-1">
              <button className="flex h-[35px] w-[76.05px] space-x-1 bg-gray-950 justify-center items-center border rounded-[100px] hover:border-[#ffffff]">
                <Eye /> <a className="text-white">1</a>
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
                  setLove((prev) => prev + 1);
                }}
              >
                <Symbol />
                <a className="text-white">{love}</a>
              </button>
            </div>
          </div>
          <div className="flex flex-row  w-full space-x-8 gap-y-2">
            <div className="flex flex-row items-center gap-3 px-2 w-full h-[68px] border rounded-2xl border-[#343444] bg-[#343444]">
              <Avatar
                username={nft?.owner ?? ""}
                className="w-12 h-12 border rounded-xl"
              />
              <div className="flex flex-col w-full">
                <a className="text-[#8A8AA0] text-sm">Owned By</a>
                <a className="text-lg text-white">{cutString(nft?.owner, 7)}</a>
              </div>
            </div>
            <div className="flex flex-row items-center gap-3 px-2 w-full h-[68px] border rounded-2xl border-[#343444] bg-[#343444] ">
              <Avatar
                username={nft?.seller ?? ""}
                className="w-12 h-12 border rounded-xl"
              />
              <div className="flex flex-col w-full">
                <a className="text-[#8A8AA0] text-sm">Seller By</a>
                <a className="text-lg text-white">
                  {cutString(nft?.seller, 7)}
                </a>
              </div>
            </div>
          </div>
          <a className="text-white text-sm font-normal w-full min-h-[65px]">
            {nft?.description}
          </a>
          <div className="grid w-full grid-cols-2 gap-6">
            <div className="text-white flex flex-col bg-[#343444] border rounded-lg border-[#343444] p-4">
              <a className="p-2">
                Artist :
                <span className="font-semibold text-base">{action.Artist}</span>
              </a>
              <a className="p-2">
                Size :
                <span className="font-semibold text-base">{action.Size}</span>
              </a>
              <a className="p-2">
                Create :
                <span className="font-semibold text-base">
                  {new Date(nft?.createdAt ?? "").toDateString()}
                </span>
              </a>
              <a className="p-2">
                Collection :
                <span className="font-semibold text-base">{action.Artist}</span>
              </a>
            </div>
            <div className="grid grid-rows-2 gap-4">
              <div className="flex items-center text-white bg-[#343444] border rounded-lg border-[#343444] justify-between p-4 px-6">
                Current Bid
                <a className="">{nft?.price} BNB</a>
              </div>
              <div className="text-white bg-[#343444] border rounded-lg border-[#343444] flex justify-center items-center font-bold text-2xl p-4 px-6">
                <TimeLive lastTime={new Date(nft?.createdAt ?? "").getTime()} />
              </div>
            </div>
          </div>
          <button
            onClick={mutate}
            disabled={isDisable}
            className="flex w-full h-[50px] justify-center disabled:bg-slate-400 disabled:cursor-not-allowed disabled:hover:ring-0 items-center border rounded-full text-white hover:bg-[#E250E5] hover:ring-2 hover:ring-white"
          >
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
                {item}
              </a>
            ))}
          </div>

          <div className="text-white flex justify-between w-full h-[68px] pb-2 border-b-[1px] border-b-[#1F1F2C]">
            <div className="text-[15px] flex flex-row gap-2 items-center">
              <Avatar
                username={nft?.seller ?? ""}
                className="w-12 h-12 border rounded-xl"
              />
              <div className="flex flex-col">
                <a className="h-[21px] w-[125px]">{cutString(nft?.seller)}</a>{" "}
                <a>{new Date(nft?.createdAt ?? "").toDateString()}</a>
              </div>
            </div>
            <a className="px-2">{nft?.price} BNB</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NFTDetail;
