import { atom } from "jotai";


export type AppAccess = {
  id?: string;
  app_id?: string;
  created?: string;
  updated?: string;
};

export type Bucket = {
  id?: string;
  bucket_name?: string;
  created?: string;
  updated?: string;
};

export const appAccessData = atom<AppAccess>({});
export const bucketData = atom<Bucket>({});
