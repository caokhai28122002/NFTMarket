import Avatar from "@/components/Avatar";
import Button from "@/components/Button";
import { cutString } from "@/libraries/utils";
import { useEthers } from "@usedapp/core";
import React from "react";

type Props = {};

const ConnectWallet = (props: Props) => {
  const { account, deactivate, activateBrowserWallet } = useEthers();
  
  if (account)
    return (
      <Button onClick={() => deactivate()} className="flex items-center gap-1">
        <Avatar username={account} className="w-8 h-8" />
        {cutString(account)}
      </Button>
    );
  else
    return (
      <Button onClick={() => activateBrowserWallet()}>CONNECT WALLET</Button>
    );
};

export default ConnectWallet;
