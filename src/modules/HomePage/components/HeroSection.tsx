/* eslint-disable @next/next/no-img-element */
import MonthlyIncome from "@/icons/MonthlyIncome";
import Upgrade from "@/icons/Upgrade";
import { FCC } from "@/types";
import React from "react";

type Props = {};

const HeroSection: FCC = (props: Props) => {
  return (
    <div className="h-full w-full min-h-[calc(100vh-128px)] items-center pt-16">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 xl:col-span-5 items-center lg:items-start">
          <div className="flex flex-col w-full xl:w-fit items-center gap-6">
            <p className="text-white text-center font-bold text-[42px] xl:text-[71px] uppercase">
              CREATE YOUR <br className="hidden xl:block" />
              CUSTOM <br /> WORKSPACE.
            </p>
            <p className="text-[23px] text-white text-center uppercase">
              IN A BUILDING OR LARGE VEHICLE, LIKE
              <br className="hidden sm:block" />A SHIP, A ROOM TO WHICH ENTRY
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex flex-row items-center gap-4">
                <Upgrade className="w-16 h-16 lg:w-24 lg:h-24" />
                <div className="text flex flex-col">
                  <p className="text-lg xl:text-3xl text-white font-bold">
                    UPGRADEABLE
                  </p>
                  <p className="text-base lg:text-lg text-white font-medium">
                    1-3 LEVEL
                  </p>
                </div>
              </div>
              <div className="flex flex-row items-center gap-4">
                <MonthlyIncome className="w-16 h-16 lg:w-24 lg:h-24" />
                <div className="text flex flex-col">
                  <p className="text-lg xl:text-3xl text-white font-bold">
                    0.417%
                  </p>
                  <p className="text-base lg:text-lg text-white font-medium">
                    MONTHLY INCOME RATE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-7">
          <img src="/images/Clip.png" alt="banner image" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
