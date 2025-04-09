import { CTA, FAQ, Feature, Hero, Preview, SocialProof } from '@/components';
import { Applications } from '@/components/ssr/apps';
import { Pricing } from '@/components/ssr/pricing';

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
