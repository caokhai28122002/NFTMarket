import MainLayout from "@/layout/MainLayout";
import { NextPageWithLayout } from "@/types";
import React from "react";
import NFTdetail from "./conponents/NFTdetail";

const NFTDetailPage: NextPageWithLayout = () => {
  return (
    <div>
      <NFTdetail />
    </div>
  );
};

export default NFTDetailPage;

NFTDetailPage.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};
