'use server';
import {
    CTA,
    FAQ,
    Feature,
    Footer,
    Hero,
    Preview,
    SocialProof
} from '@/components';
import { Applications } from '@/components/cache/apps';
import { Pricing } from '@/components/cache/pricing';

export default async function Home({
    searchParams
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
    const params = await searchParams;
    const url = `/play/index.html${params.ref ? `ref=${params.ref}` : ''}`;

    return (
        <>
            <Hero url={url}></Hero>
            <Feature></Feature>
            <Applications url={url}></Applications>
            <Pricing url={url}></Pricing>
            <Preview></Preview>
            <SocialProof></SocialProof>
            <FAQ />
            <CTA url={url}></CTA>
            <Footer url={url} />
        </>
    );
}
