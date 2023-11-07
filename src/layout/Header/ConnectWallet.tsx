import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import { cutString } from "@/libraries/utils";
import { useRouter } from "next/router";
import { bscTestnet } from "viem/chains";
import { useAccount, useConnect } from "wagmi";
import { MetaMaskConnector } from "wagmi/connectors/metaMask";

const ConnectWallet = () => {
  const { address } = useAccount();
  const { connect } = useConnect({
    connector: new MetaMaskConnector({
      chains: [bscTestnet],
    }),
  });
  const { push } = useRouter();

  if (address)
    return (
      <Button
        onClick={() => push("/my-nfts")}
        className="flex items-center gap-2"
      >
        <Avatar username={address} className="w-8 h-8 border rounded-full" />
        {cutString(address)}
      </Button>
    );
  else return <Button onClick={() => connect()}>CONNECT WALLET</Button>;
};

export default ConnectWallet;
