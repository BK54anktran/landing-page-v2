import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
    experimental: {
        useCache: true
    },
    images: {
        remotePatterns: [
            // TODO: download all images and then remove remotePatterns if no need
            {
                protocol: 'https',
                hostname: 'flowbite.s3.amazonaws.com'
            },
            {
                protocol: 'https',
                hostname: 'saigon2.thinkmay.net'
            },
            {
                protocol: 'https',
                hostname: 'shared.akamai.steamstatic.com'
            },
            {
                protocol: 'https',
                hostname: 'cdn.vn.garenanow.com'
            },
            {
                protocol: 'https',
                hostname: 'pub-d00f534024b04d0e8036586fc78a41fa.r2.dev'
            },
            {
                protocol: 'https',
                hostname: 'link.storjshare.io',
                pathname: '/raw/**' // cho phép tất cả ảnh raw
            }
        ]
    }
};

export default withNextIntl(nextConfig);
