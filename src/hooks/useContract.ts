import React, { useEffect, useMemo, useState } from "react";
import { Contract, InterfaceAbi, ethers } from "ethers";
import { ContractRunner } from "ethers";
import { NFTMarketAddress } from "@/constants";
import NFTMarket from "@@/artifacts/contracts/NFTMarket.sol/NFTMarket.json";

const useContract = () => {
  const [error, setError] = useState(false);
  const [message, setMessage] = useState("");
  const [contract, setContract] = useState<Contract>();
  async function requestAccount() {
    await window.ethereum.request({ method: "eth_requestAccounts" });
  }
  const getSmartContract = (
    address: string,
    abi: InterfaceAbi,
    provider: ContractRunner
  ): Contract => new ethers.Contract(address, abi, provider);

  useEffect(() => {
    const getContracts = async () => {
      try {
        await requestAccount();
        const provider = new ethers.BrowserProvider(window.ethereum);
        const signer = await provider.getSigner();
        const contract = getSmartContract(
          NFTMarketAddress,
          NFTMarket.abi,
          signer
        );
        setError(false);
        setContract(contract);
      } catch (err) {
        setError(false);
        setMessage((err as { message: string }).message);
        setContract(undefined);
      }
    };
    getContracts();
    return;
  }, []);

  return useMemo(
    () => ({
      error,
      message,
      contract,
    }),
    [contract, error, message]
  );
};

export default useContract;
