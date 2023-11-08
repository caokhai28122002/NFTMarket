import { INFT } from "@/apis/types";
import axios from "axios";
import { ethers } from "ethers";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useContractNoSigner } from "./useContract";

const useNFTByTokenID = (tokenId: string) => {
  const { contract } = useContractNoSigner();
  const [loading, setLoading] = useState(true);
  const [nft, setNFT] = useState<INFT>();
  const refresh = useCallback(async () => {
    try {
      setLoading(true);
      const data = await contract?.NFTByTokenID(ethers.getUint(tokenId));
      const tokenUri = await contract?.tokenURI(data.tokenId);

      const meta = await axios.get(tokenUri);
      const price = ethers.formatEther(data.price.toString());

      setNFT({
        price: price,
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
    refresh();
  }, [refresh]);

  return useMemo(
    () => ({
      loading,
      nft,
      contract,
      refresh,
    }),
    [contract, refresh, loading, nft]
  );
};

export default useNFTByTokenID;
