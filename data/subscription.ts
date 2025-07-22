import { atom } from "jotai";

type Metadata = {
  reach_time_limit: boolean;
  reach_date_limit: boolean;
  nearly_reach_time_limit?: number;
  nearly_reach_date_limit?: number;
};

export type SubscriptionData = {
  created_at?: string;
  last_payment?: string;
  ended_at?: string;
  plan_name?: string;
  policy?: {
    limit_hour: number;
    total_days: number;
    name: string;
  };
  next_plan?: string;
  metadata?: Metadata;
};

export type WalletData = {
  balance?: number;
};

export const subscriptionData = atom<SubscriptionData>({});
export const walletData = atom<WalletData>({});
export const subscriptionPlan = atom<any[]>([])
