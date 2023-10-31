import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import useAccount from "@/hooks/useAccount";
import { cutString } from "@/libraries/utils";
// import { useEthers } from "@usedapp/core";
import React from "react";

const ConnectWallet = () => {
  const { account, request } = useAccount();
  if (account)
    return (
      <Button className="flex items-center gap-2">
        <Avatar username={account} className="w-8 h-8 border rounded-full" />
        {cutString(account)}
      </Button>
    );
  else return <Button onClick={request}>CONNECT WALLET</Button>;
};

export default ConnectWallet;
