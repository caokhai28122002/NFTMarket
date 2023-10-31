import MainLayout from "@/layout/MainLayout";
import { NextPageWithLayout } from "@/types";
import React from "react";
import HeroSection from "./components/HeroSection";
import MintNFT from "./components/MintNFT";

const MintNFTPage: NextPageWithLayout = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center py-16">
      <HeroSection />
      <MintNFT />
    </div>
  );
};

export default MintNFTPage;

MintNFTPage.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};
