import MainLayout from "@/layout/MainLayout";
import { NextPageWithLayout } from "@/types";
import React from "react";
import Monster from "./components/Monster";
import LiveAuctions from "./components/LiveAuctions";
import StepByStep from "./components/StepByStep";

const NFTs: NextPageWithLayout = () => {
  return (
    <div>
      <Monster />
      <LiveAuctions />
      <StepByStep />
    </div>
  );
};

export default NFTs;

NFTs.getLayout = function (page) {
  return <MainLayout>{page}</MainLayout>;
};
