import React, { useCallback, useEffect, useMemo, useState } from "react";
import useContract from "./useContract";
import axios from "axios";
import { ethers } from "ethers";
import toast from "react-hot-toast";
import { INFT } from "@/apis/types";

const useNFTByTokenID = (tokenId: string) => {
  const { contract } = useContract();
  const [loading, setLoading] = useState(true);
  const [nft, setNFT] = useState<INFT>();
  const call = useCallback(async () => {
    try {
      setLoading(true);
      const data = await contract?.NFTByTokenID(ethers.getUint(tokenId));
      const tokenUri = await contract?.tokenURI(data.tokenId);

      // const tokenURL =
      //   "https://teal-rainy-fly-99.mypinata.cloud/ipfs/QmNvyzER1Hr9yZs7qabnAV1ii2LHAmbGFsqJ89B2Refm5Z";
      //to do update to token uri
      const meta = await axios.get(tokenUri);
      const price = ethers.formatEther(data.price.toString());

      setNFT({
        price: Number(price),
        tokenId: Number(data.tokenId),
        seller: data.seller,
        owner: data.owner,
        image: meta.data.image,
        name: meta.data.name,
        description: meta.data.description,
        createdAt: meta.data.createdAt,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }, [contract, tokenId]);

  useEffect(() => {
    call();
  }, [call]);

  return useMemo(
    () => ({
      loading,
      nft,
      contract,
      call,
    }),
    [contract, call, loading, nft]
  );
};

export default useNFTByTokenID;
