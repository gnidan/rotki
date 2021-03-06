import { StakingState } from '@/store/staking/types';

export const defaultState = (): StakingState => ({
  eth2Deposits: [],
  eth2Details: [],
  adexBalances: {},
  adexHistory: {}
});

export const state: StakingState = defaultState();
