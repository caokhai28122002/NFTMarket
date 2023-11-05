import React, { useCallback, useEffect, useMemo, useState } from "react";
import useContract from "./useContract";
import axios from "axios";
import { ethers } from "ethers";
import toast from "react-hot-toast";
import { INFT } from "@/apis/types";

const useBuyNFT = () => {
  const { contract } = useContract();
  const [loading, setLoading] = useState(true);
  const mutate = useCallback(
    async (nft: INFT) => {
      try {
        const price = ethers.parseUnits(nft.price.toString(), "wei");
        const transaction = await contract?.createMarketSale(nft.tokenId, {
          value: price,
        });
        await transaction.wait();
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [contract]
  );

  return useMemo(
    () => ({
      loading,
      contract,
      mutate,
    }),
    [contract, mutate, loading]
  );
};

export default useBuyNFT;
