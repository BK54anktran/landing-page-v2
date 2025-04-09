import { SocialProof } from '@/components';
import { Pricing } from '@/components/ssr/pricing';

export default async function Home() {
    'use cache';
    return (
        <>
            <Pricing></Pricing>
            <SocialProof></SocialProof>
        </>
    );
}
