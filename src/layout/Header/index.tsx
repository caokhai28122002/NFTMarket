import Button from "@/components/Button";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ConnectWallet from "./ConnectWallet";

type Props = {};

export const MENU = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "NFTs",
    path: "/nfts",
  },
  {
    name: "Mint",
    path: "/mint",
  },
];

const Header = (props: Props) => {
  const { asPath } = useRouter();
  return (
    <div className="w-full h-32 bg-[#2B0D34] flex flex-1 justify-center">
      <div className="w-10/12 flex justify-between items-center">
        <div className="uppercase text-5xl font-bold text-white">
          NFT-<span className="text-[#E05BFF]">MARKETPLACE</span>
        </div>
        <div className="flex justify-end items-center space-x-3">
          {MENU.map((item) => (
            <Link href={item.path} key={item.name}>
              <div
                className={`min-w-[140px] bg-transparent border-[#E05BFF] hover:-skew-x-[8deg]
              p-2 rounded-full group hover:border-[#E05BFF99] hover:border-[2px]  text-center
              border-[${asPath === item.path ? "2px" : "0px"}]`}
              >
                <span className="text-white uppercase font-semibold text-xl group-hover:text-[#E05BFF]">
                  {item.name}
                </span>
              </div>
            </Link>
          ))}
          <ConnectWallet />
        </div>
      </div>
    </div>
  );
};

export default Header;
