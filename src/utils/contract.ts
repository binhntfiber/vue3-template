import { ethers } from "ethers";
import type { Signer } from "ethers";
import { getSimpleRpcProvider } from "./provider";
import type { CHAIN } from "@/types/chain.type";
import {
  Erc20Abi,
  MultiCallAbi,
  LendingPoolAbi,
  LendingPoolConfigAbi,
  LendingPoolDataProviderAbi,
  PriceOracle,
  WETHGatewayAbi,
} from "@/abis";
import { MULTICALL_CONTRACT } from "@/constants/contracts";

export const getContract = (
  abi: any,
  address: string,
  chainId: CHAIN,
  signer?: Signer
) => {
  const signerOrProvider = signer ?? getSimpleRpcProvider(chainId);
  return new ethers.Contract(address, abi, signerOrProvider);
};

export const getMultiCallContract = (chainId: CHAIN) => {
  return getContract(MultiCallAbi, MULTICALL_CONTRACT, chainId);
};

export const getErc20Contract = (
  chainId: CHAIN,
  tokenAddress: string,
  signer?: Signer
) => {
  return getContract(Erc20Abi, tokenAddress, chainId, signer);
};

export const getLendingPoolContract = (
  chainId: CHAIN,
  LendingPoolAddress: string,
  signer?: Signer
) => {
  return getContract(LendingPoolAbi, LendingPoolAddress, chainId, signer);
};

export const getLendingPoolDataProviderContract = (
  chainId: CHAIN,
  LendingPoolDataProviderAddress: string,
  signer?: Signer
) => {
  return getContract(
    LendingPoolDataProviderAbi,
    LendingPoolDataProviderAddress,
    chainId,
    signer
  );
};

export const getLendingPoolConfigContract = (
  chainId: CHAIN,
  address: string,
  signer?: Signer
) => {
  return getContract(LendingPoolConfigAbi, address, chainId, signer);
};

export const getPriceOracleContract = (
  chainId: CHAIN,
  address: string,
  signer?: Signer
) => {
  return getContract(PriceOracle, address, chainId, signer);
};

export const getEthGatewayContract = (
  chainId: CHAIN,
  address: string,
  signer?: Signer
) => {
  return getContract(WETHGatewayAbi, address, chainId, signer);
};
