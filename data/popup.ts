import { atom } from "jotai";



export type ModalOptions = {
    type: 'login'
} 

export const modalData = atom<ModalOptions | undefined>(undefined);