import Button from "@/components/Button";
import Right from "@/icons/Right";
import { FCC } from "@/types";
import Image from "next/image";
import React from "react";

const OurBlogSection: FCC = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-128px)] w-full items-center gap-16 px-8">
      <div className="flex flex-col items-center">
        <p className="font-extrabold text-7xl text-white uppercase">
          OUR BLOGS
        </p>
      </div>
      <div className="w-full py-8 flex flex-col gap-12">
        <div className="bg-[#620079] h-36 px-20 rounded-3xl flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-center gap-2 w-full mx-8 cursor-pointer">
            <Right />
            <p className="text-white uppercase text-2xl font-bold">
              HEALTH CARE
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 w-full mx-8 cursor-pointer relative">
            <Right />
            <p className="text-white uppercase text-2xl font-bold">FIN TECH</p>
            <div className="absolute border-[#E05BFF] rounded-xl border-[2px] h-44 w-full"></div>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 w-full mx-8 cursor-pointer">
            <Right />
            <p className="text-white uppercase text-2xl font-bold">
              RETAIL & E-COM
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 w-full mx-8 cursor-pointer">
            <Right />
            <p className="text-white uppercase text-2xl font-bold">
              SOCIAL MEDIA
            </p>
          </div>
          <div className="flex flex-row items-center justify-center gap-2 w-full mx-8 cursor-pointer">
            <Right />
            <p className="text-white uppercase text-2xl font-bold">
              SOCIAL MEDIA
            </p>
          </div>
        </div>
        <div className="h-full w-full items-center pt-16">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-12 xl:col-span-5 items-center lg:items-start">
              <div className="flex flex-col w-full xl:w-fit">
                <p className="text-[#E05BFF] font-semibold text-[32px] xl:text-[40px] uppercase">
                  A-ROOM FOR:
                </p>
                <p className="text-white font-extrabold text-[50px] xl:text-[100px] uppercase">
                  FIN TECH
                </p>
                <p className="text-[23px] text-white uppercase">
                  LOREM IPSUM DOLOR SIT AMET, CONSECTETUR
                  <br className="hidden sm:block" />
                  ADIPISCING ELIT, SED DO EIUSMOD TEMPOR
                  <br className="hidden sm:block" />
                  INCIDIDUNT VIVERRA MAECENAS ACCUMSANL
                  <br className="hidden sm:block" />
                  FACILISIS.
                </p>
                <div className="flex flex-col py-8">
                  <div className="flex flex-row items-center gap-4">
                    <Button>LEARN MORE</Button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-12 xl:col-span-7 relative">
              <Image
                layout="fill"
                src="/images/server.png"
                alt="banner image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurBlogSection;
