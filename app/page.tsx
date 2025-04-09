import { CTA, FAQ, Feature, Hero, Preview, SocialProof } from '@/components';
import { Applications } from '@/components/cache/apps';
import { Pricing } from '@/components/cache/pricing';

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
