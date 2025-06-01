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
import { hardhat } from "viem/chains";
import { WalletClient, useNetwork, useWalletClient } from "wagmi";

const useContract = () => {
  const { data: walletClient } = useWalletClient({ chainId: hardhat.id });

  function walletClientToSigner(walletClient: WalletClient) {
    const { account, chain, transport } = walletClient;
    const network = {
      chainId: 1337,
      name: hardhat.name,
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
    () => chains.find((x) => x.id == 1337)?.rpcUrls,
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
