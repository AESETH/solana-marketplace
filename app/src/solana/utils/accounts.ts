import { PublicKey } from '@solana/web3.js';
import { findProgramAddress } from '.';
import { CONFIG_PDA_SEED, NFT_VAULT_PDA_SEED, SELL_PDA_SEED } from './constant';

export const findConfigAddress = () =>
  findProgramAddress([Buffer.from(CONFIG_PDA_SEED)]);

export const findVaultAddress = (mint: PublicKey) =>
  findProgramAddress([Buffer.from(NFT_VAULT_PDA_SEED), mint.toBuffer()]);

export const findSellAddress = (seller: PublicKey, mint: PublicKey) =>
  findProgramAddress([
    Buffer.from(SELL_PDA_SEED),
    seller.toBuffer(),
    mint.toBuffer(),
  ]);
