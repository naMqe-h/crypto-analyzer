/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            { hostname: "coin-images.coingecko.com" },
            { hostname: "img-v1.raydium.io" },
        ],
    }
};

export default nextConfig;
