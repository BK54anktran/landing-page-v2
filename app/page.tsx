'use client'
import { Applications, CTA, Feature, Footer, Header, Hero, Preview, Pricing, SocialProof } from '@/components';
import { Modal } from '@/components/popup';
import { useState } from 'react';


export default function Home() {
    const [openPopup,setOpenPopup] = useState(false)
    return (
        <>
            <Header></Header>
            <Hero></Hero>
            <Feature></Feature>
            <Pricing></Pricing>
            <Applications></Applications>
            <Preview></Preview>
            <SocialProof></SocialProof>
            <CTA></CTA>
            <Modal></Modal>
            <Footer></Footer>
        </>
    );
}
