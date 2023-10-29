import { FCC } from "@/types";
// import {
//   Config,
//   DAppProvider,
//   Goerli,
//   Mainnet
// } from "@usedapp/core";
// import { getDefaultProvider } from "ethers";

// const config: Config = {
//   readOnlyChainId: Mainnet.chainId,
//   readOnlyUrls: {
//     [Mainnet.chainId]: getDefaultProvider("mainnet"),
//     [Goerli.chainId]: getDefaultProvider("goerli"),
//   },
// };

const Web3Provider: FCC = ({ children }) => {
  return <>{children}</>;
};

export default Web3Provider;
