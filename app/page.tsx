import {
    Applications,
    CTA,
    FAQ,
    Feature,
    Footer,
    Hero,
    Preview,
    Pricing,
    SocialProof
} from '@/components';

export default function Home() {
    return (
        <>
            <Hero></Hero>
            <Feature></Feature>
            <Pricing></Pricing>
            <Applications></Applications>
            <Preview></Preview>
            <SocialProof></SocialProof>
            <FAQ />
            <CTA></CTA>
        </>
    );
}
