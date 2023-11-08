import React, { useCallback, useEffect, useMemo, useState } from "react";
import useContract from "./useContract";
import axios from "axios";
import { ethers } from "ethers";
import toast from "react-hot-toast";
import { INFT } from "@/apis/types";

const useMyNFTs = () => {
  const { contract } = useContract();
  const [loading, setLoading] = useState(true);
  const [nfts, setNFTs] = useState<INFT[]>([]);
  const loadNFTs = useCallback(async () => {
    try {
      setLoading(true);
      const data = await contract?.fetchMyNFTs.staticCall();
      const items: INFT[] = await Promise.all(
        data.map(async (i: any) => {
          const tokenUri = await contract?.tokenURI(i.tokenId);

          const meta = await axios.get(tokenUri);
          const price = ethers.formatEther(i.price.toString());
          return {
            price: price,
            tokenId: Number(i.tokenId),
            seller: i.seller,
            owner: i.owner,
            image: meta.data.image,
            name: meta.data.name,
            description: meta.data.description,
            createdAt: meta.data.createdAt,
          } as INFT;
        })
      );
      setNFTs(items);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [contract]);

  useEffect(() => {
    loadNFTs();
  }, [loadNFTs]);

  return useMemo(
    () => ({
      loading,
      nfts,
      contract,
      loadNFTs,
    }),
    [contract, loadNFTs, loading, nfts]
  );
};

export default useMyNFTs;
