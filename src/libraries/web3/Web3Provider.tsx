import { FCC } from "@/types";

import { createPublicClient, http } from "viem";
import { bscTestnet } from "viem/chains";
import { WagmiConfig, createConfig } from "wagmi";

const config = createConfig({
  autoConnect: true,
  publicClient: createPublicClient({
    chain: bscTestnet,
    transport: http(),
  }),
});

const Web3Provider: FCC = ({ children }) => {
  return <WagmiConfig config={config}>{children}</WagmiConfig>;
};

export default Web3Provider;
