import { CTA, FAQ, Feature, Hero, Preview, SocialProof } from '@/components';
import { Applications } from '@/components/cache/apps';
import { Pricing } from '@/components/cache/pricing';

export default function Home() {
    return (
        <>
            <Hero></Hero>
            <Feature></Feature>
            <Applications></Applications>
            <Pricing></Pricing>
            <Preview></Preview>
            <SocialProof></SocialProof>
            <FAQ />
            <CTA></CTA>
        </>
    );
}
