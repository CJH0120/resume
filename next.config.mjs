/** @type {import('next').NextConfig} */
const prefix =
	process.env.NODE_ENV === "production"
		? "https://cjh0120.github.io/resume/"
		: ""

const nextConfig = {
	output: "export",
	assetPrefix: prefix,
}
export default nextConfig
