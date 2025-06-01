import { FCC } from "@/types";

import { createPublicClient, http } from "viem";
import { hardhat } from "viem/chains";
import { WagmiConfig, createConfig } from "wagmi";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: hardhat,
    transport: http(),
  }),
});

const Web3Provider: FCC = ({ children }) => {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};

export default Web3Provider;
