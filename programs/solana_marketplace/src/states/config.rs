use anchor_lang::prelude::*;

#[account(zero_copy)]
#[derive(Default)]
pub struct Config {
    pub owner: Pubkey,
    pub fee_account: Pubkey,
    /// (0-10000), 1: 0.01%; 10: 0.1%; 100: 1%; 1000: 10%; 10000: 100%
    pub fee_rate: u64,
    pub order_id: u64,
    pub order_count: u64,
    pub freeze: bool,
    pub bump: u8,
}

impl Config {
    pub const LEN: usize = (32 * 2) + (8 * 3) + 1 + 1;
}
