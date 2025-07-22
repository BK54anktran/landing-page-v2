import { atom } from "jotai";

export interface IUser {
  avatar: string;
  collectionId: string;
  collectionName: string;
  created: string;
  email: string;
  emailVisibility: boolean;
  id: string;
  metadata: any;
  name: string;
  updated: string;
  username: string;
  verified: boolean;
}

export type UserOrNot = Partial<IUser>;

export const userData = atom<UserOrNot>({});
export const isAuthenticated = atom<boolean>(false);
export const sessionToken = atom<string>("");
