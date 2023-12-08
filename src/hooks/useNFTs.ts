import { INFT } from "@/apis/types";
import axios from "axios";
import { ethers } from "ethers";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useContractNoSigner } from "./useContract";
import { PINATA_SECRET_GATEWAY_TOKEN } from "@/constants";

const useNFTs = () => {
  const { contract } = useContractNoSigner();
  const [loading, setLoading] = useState(true);
  const [nfts, setNFTs] = useState<INFT[]>([]);
  const loadNFTs = useCallback(async () => {
    try {
      setLoading(true);
      const data = await contract?.fetchMarketItems.staticCall();
      const items: INFT[] = await Promise.all(
        data.map(async (i: any) => {
          const tokenUri = await contract?.tokenURI(i.tokenId);

          const meta = await axios.get(
            tokenUri + "?pinataGatewayToken=" + PINATA_SECRET_GATEWAY_TOKEN
          );
          const price = ethers.formatEther(i.price.toString());

          return {
            price: price,
            tokenId: Number(i.tokenId),
            seller: i.seller,
            owner: i.owner,
            image:
              meta.data.image +
              "?pinataGatewayToken=" +
              PINATA_SECRET_GATEWAY_TOKEN,
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

export default useNFTs;
