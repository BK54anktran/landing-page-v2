'use client';

import {
    useEffect,
    useState,
    ReactNode,
    createContext,
    useContext
} from 'react';
import { Modal } from '../popup';
import { usePathname } from 'next/navigation';
import { Contents, language, Languages, Translation } from '../locales';
import { useRouter } from 'next/navigation';
import { modalData, ModalOptions } from '@/data/popup';
import { useAtom } from 'jotai';

// Language Context
interface LanguageContextType {
    currentLanguage: Languages;
    setLanguage: (lang: Languages) => void;
    translations: Translation;
    t: (key: Contents) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
    undefined
);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};

// Language Provider
const LanguageProvider = ({
    children,
    locale
}: {
    children: ReactNode;
    locale: Languages;
}) => {
    const router = useRouter();
    const pathname = usePathname();
    const translations = language();
    const setLanguage = (lang: Languages) => {
        const segments = pathname.split('/');
        segments[1] = lang;
        router.push(segments.join('/'));
    };

    useEffect(() => {
        if (translations.get(locale) == undefined) setLanguage('en')
        localStorage.setItem('language', locale.toUpperCase());
    }, []);

    const t = (key: Contents): string => {
        const langMap = translations.get(locale);
        return langMap?.get(key) || `Missing: ${[key]}`;
    };

    return (
        <LanguageContext.Provider
            value={{ currentLanguage: locale, setLanguage, translations, t }}
        >
            {children}
        </LanguageContext.Provider>
    );
};





const PopupProvider = ({
    children,
    close,
    popup 
}: {
    children: ReactNode;
    close: () => void;
    popup: ModalOptions | undefined;
}) => {
    if (popup == undefined) return <>{children}</>
    return (
        <>
            <Modal type={popup.type} close={close}></Modal>
            {children}
        </>
    );
};


export const StateProvider = ({
    children,
    locale
}: {
    children: ReactNode;
    locale: string;
}) => {
    const [popup,setPopup] = useAtom(modalData)


    

    return (
        <LanguageProvider locale={locale as Languages}>
            <div className="bg-white dark:bg-gray-900 text-black dark:text-white">
                <PopupProvider popup={popup} close={() => setPopup(undefined)}>
                    {children}
                </PopupProvider>
            </div>
        </LanguageProvider>
    );
};
