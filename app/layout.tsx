import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { StateProvider } from '@/components/providers/stateProvider';
import { Footer } from '@/components';
import Script from 'next/script';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
});

export const metadata: Metadata = {
    title: 'Thinkmay Cloud PC - chơi game trên mây',
    description:
        'Work and game on cloud PC - no need to download anything, games on any devices, work from anywhere'
};

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <Script>
                    {`document.documentElement.classList.add('dark');`}
                </Script>
            </head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased`}
            >
                <StateProvider>
                    {children}
                    <Footer />
                </StateProvider>
                <Script
                    async
                    src="https://www.googletagmanager.com/gtag/js?id=G-M7MLPFDFXL"
                    strategy="afterInteractive"
                ></Script>
                <Script strategy="afterInteractive">
                    {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){window.dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'G-M7MLPFDFXL');
                `}
                </Script>

                <Script>
                    {`
                        
                          window.__ow = window.__ow || {};
                          window.__ow.organizationId = "665cfa3a-048b-4599-9f49-f67c08de5592";
                          window.__ow.template_id = "316dd0ca-d3da-4b95-affe-e246db87f35d";
                          window.__ow.integration_name = "manual_settings";
                          window.__ow.product_name = "chatbot";   
                          ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[OpenWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.openwidget.com/openwidget.js",t.head.appendChild(n)}};!n.__ow.asyncInit&&e.init(),n.OpenWidget=n.OpenWidget||e}(window,document,[].slice))
                       
                    `}
                </Script>
                <noscript>
                    You need to{' '}
                    <a
                        href="https://www.chatbot.com/help/chat-widget/enable-javascript-in-your-browser/"
                        rel="noopener nofollow"
                    >
                        enable JavaScript
                    </a>{' '}
                    in order to use the AI chatbot tool powered by{' '}
                    <a
                        href="https://www.chatbot.com/"
                        rel="noopener nofollow"
                        target="_blank"
                    >
                        ChatBot
                    </a>
                </noscript>
            </body>
        </html>
    );
}
