import { NFTMarketAddress } from "@/constants";
import NFTMarket from "@@/artifacts/contracts/NFTMarket.sol/NFTMarket.json";
import {
  BrowserProvider,
  Contract,
  JsonRpcProvider,
  JsonRpcSigner,
  ethers,
} from "ethers";
import { useMemo } from "react";
import { WalletClient, useNetwork, useWalletClient } from "wagmi";

const useContract = () => {
  const { data: walletClient } = useWalletClient({ chainId: 97 });

  function walletClientToSigner(walletClient: WalletClient) {
    const { account, chain, transport } = walletClient;
    const network = {
      chainId: chain.id,
      name: chain.name,
      ensAddress: chain.contracts?.ensRegistry?.address,
    };
    const provider = new BrowserProvider(transport, network);
    const signer = new JsonRpcSigner(provider, account.address);
    return signer;
  }

  return useMemo(
    () => ({
      contract: new ethers.Contract(
        NFTMarketAddress,
        NFTMarket.abi,
        walletClient ? walletClientToSigner(walletClient) : undefined
      ),
    }),
    [walletClient]
  );
};

export default useContract;

export function useContractNoSigner() {
  const { chains } = useNetwork();

  const rpcUrls = useMemo(
    () => chains.find((x) => x.id == 97)?.rpcUrls,
    [chains]
  );

  return useMemo(() => {
    const rpc = rpcUrls?.default ?? rpcUrls?.public;
    return {
      contract: new Contract(
        NFTMarketAddress,
        NFTMarket.abi,
        new JsonRpcProvider(rpc?.http[0])
      ),
    };
  }, [rpcUrls]);
}
