import MainLayout from "@/layout/MainLayout";
import { NextPageWithLayout } from "@/types";
import React from "react";
import MyInfo from "./components/MyInfo";
import MyAssets from "./components/MyAssets";

const MyNFTPage: NextPageWithLayout = () => {
  return (
    <div className="flex w-full flex-col py-20">
      <MyInfo />
      <div className="flex h-1 bg-[#343444]" />
      <MyAssets />
    </div>
  );
};

export default MyNFTPage;

MyNFTPage.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};
