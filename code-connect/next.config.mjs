/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            'raw.githubusercontent.com'
        ],
        /*
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                port: '',
                pathname: '/account123/**',
            },
        ],
        */
    }
};

export default nextConfig;
