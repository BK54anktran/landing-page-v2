import type { NextConfig } from 'next';
import withFlowbiteReact from 'flowbite-react/plugin/nextjs';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
    experimental: {
        useCache: true,
        dynamicIO: true
    }
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(withFlowbiteReact(nextConfig));
