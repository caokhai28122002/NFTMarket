import { INFT } from "@/apis/types";
import { ethers } from "ethers";
import { useCallback, useMemo, useState } from "react";
import toast from "react-hot-toast";
import { useAccount } from "wagmi";
import useContract from "./useContract";
import { getErrorMessage } from "@/libraries/utils";

const useBuyNFT = (nft?: INFT, onSuccess = () => {}, onError = () => {}) => {
  const { contract } = useContract();
  const { address } = useAccount();
  const [loading, setLoading] = useState(false);

  const isDisable = useMemo(
    () =>
      !address ||
      nft?.owner.toLowerCase() === address.toLowerCase() ||
      nft?.seller.toLowerCase() === address.toLowerCase() ||
      loading,
    [address, loading, nft?.owner, nft?.seller]
  );

  const mutate = useCallback(async () => {
    try {
      setLoading(true);
      const price = ethers.parseEther(nft?.price.toString() ?? "0");
      const transaction = await contract?.createMarketSale(nft?.tokenId, {
        value: price,
      });
      await transaction.wait();
      await onSuccess();
      toast.success("Your buy NFT successfully");
    } catch (error) {
      console.error(error);
      await onError();
      toast.error(getErrorMessage(error));
    } finally {
      setLoading(false);
    }
  }, [contract, nft?.price, nft?.tokenId, onError, onSuccess]);

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
