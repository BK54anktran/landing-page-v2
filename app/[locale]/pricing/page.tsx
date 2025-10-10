import { SocialProof } from '@/components';
import { Pricing } from '@/components/cache/pricing';

export default async function Home() {
    return (
        <>
            <Pricing></Pricing>
            <SocialProof></SocialProof>
        </>
    );
}
