import { useCallback, useMemo } from "react";
import toast from "react-hot-toast";
import useContract from "./useContract";

import { ethers } from "ethers";

const useMintNFT = () => {
  const { contract } = useContract();

  const createSale = useCallback(
    async (url: string, price: string) => {
      try {
        const unitPrice = ethers.parseEther(price)
        let transaction = await contract?.createToken(url, unitPrice, {
          value: ethers.parseUnits("0", "wei"),
        });
        await transaction.wait();
        toast.success("Your NFT has been listed.");
      } catch (e) {
        console.error(e);
        toast.error("Error went execute transaction");
      }
    },
    [contract]
  );
  return useMemo(() => ({ createSale }), [createSale]);
};

export default useMintNFT;
