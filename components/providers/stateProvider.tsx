'use client';

import { APPURL } from '@/utils/constants';
import React, { useState } from 'react';
import { Modal } from '../popup';
import { loggedin, logout } from '@/api/auth';

export const StateProvider = ({ children }: { children: React.ReactNode }) => {
    const [popup, setPopup] = useState<string>('close');

    return (
        <div>
            <Header openLogin={() => setPopup('login')}></Header>
            <Modal type={popup} action={() => setPopup('close')}></Modal>
            {children}
        </div>
    );
};

export const Header = ({ openLogin }: { openLogin?: () => void }) => {
    const loggedIn = loggedin();
    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href={APPURL} className="flex items-center">
                        <img
                            src="/img/logo_white.png"
                            className="mr-3 h-6 sm:h-9"
                            alt="Flowbite Logo"
                        />
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                            Thinkmay
                        </span>
                    </a>
                    <div className="flex items-center lg:order-2">
                        {loggedIn ? (
                            <>
                                <a
                                    className="text-white hover:bg-blue-800 focus:ring-4 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-2 focus:outline-none cursor-pointer"
                                    onClick={logout}
                                >
                                    Logout
                                </a>
                                <a
                                    className="text-white font-bold bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 cursor-pointer"
                                    href="/play/index.html"
                                >
                                    Play now
                                </a>
                            </>
                        ) : (
                            <a
                                className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 lg:px-5 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800 cursor-pointer"
                                onClick={openLogin}
                            >
                                Login
                            </a>
                        )}
                        <button
                            data-collapse-toggle="mobile-menu-2"
                            type="button"
                            className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            aria-controls="mobile-menu-2"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                className="w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                            <svg
                                className="hidden w-6 h-6"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <a
                                    href="/"
                                    className="block py-2 pr-4 pl-3 border-b border-gray-100 text-primary-600 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-primary-500 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-primary-500 lg:dark:hover:bg-transparent dark:border-gray-700"
                                    aria-current="page"
                                >
                                    Home
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/pricing"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-primary-500 lg:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Pricing
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/faq"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-primary-500 lg:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Faq
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/blog"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-primary-500 lg:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Blog
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/legal"
                                    className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-600 lg:p-0 dark:text-gray-400 lg:dark:hover:text-primary-500 dark:hover:bg-gray-700 dark:hover:text-primary-500 lg:dark:hover:bg-transparent dark:border-gray-700"
                                >
                                    Legal
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};
