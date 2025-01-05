/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: '/',
				destination: '/login',
				permanent: true,
			},
      {
				source: '/admin',
				destination: '/admin/mentor',
				permanent: true,
			},
		];
	},
   reactStrictMode: false,
   images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // Google profile picture domain
        port: "", // Leave empty if no specific port
        pathname: "/**", // Allow all paths
      },
    ],
  },
};

export default nextConfig;
