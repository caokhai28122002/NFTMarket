import { INFT } from "@/apis/types";
import { ethers } from "ethers";
import { useCallback, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";
import useAccount from "./useAccount";
import useContract from "./useContract";

const useBuyNFT = (nft?: INFT) => {
  const { contract } = useContract();
  const { account, request } = useAccount();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    request();
  }, [request]);

  const isDisable = useMemo(
    () =>
      nft?.owner.toLowerCase() === account.toLowerCase() ||
      nft?.seller.toLowerCase() === account.toLowerCase(),
    [account, nft?.owner, nft?.seller]
  );

  const mutate = useCallback(async () => {
    try {
      const price = ethers.parseEther(nft?.price.toString() ?? '0');
      const transaction = await contract?.createMarketSale(nft?.tokenId, {
        value: price,
      });
      await transaction.wait();
      toast.success("Your buy NFT successfully");
    } catch (error) {
      console.error(error);
      toast.error("Error execute transaction");
    } finally {
      setLoading(false);
    }
  }, [contract, nft?.price, nft?.tokenId]);

  return useMemo(
    () => ({
      loading,
      contract,
      mutate,
      isDisable,
    }),
    [loading, contract, mutate, isDisable]
  );
};

export default useBuyNFT;
