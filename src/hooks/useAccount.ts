import { useCallback, useEffect, useMemo, useState } from "react";

const useAccount = () => {
  const [account, setAccount] = useState("");
  const request = useCallback(async () => {
    try {
      const [walletAddress] = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setAccount(walletAddress);
    } catch {}
  }, []);

  return useMemo(
    () => ({
      account,
      request,
    }),
    [account, request]
  );
};

export default useAccount;
