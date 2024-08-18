import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import "./globals.scss"
import Footer from "@/components/footer"
import ogImage from "@/public/og/og.png"
import { GoogleAnalytics } from "@next/third-parties/google"

const NSK = Noto_Sans_KR({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "최종현 | 프론트엔드 개발자 이력서",
	description: "안녕하세요, 프론트엔드 개발자 최종현입니다",
	metadataBase: new URL("https://cjh0120.github.io/resume"),
	keywords: [
		"프론트엔드 개발자 이력서",
		"프론트엔드",
		"개발자",
		"최종현 이력서",
	],
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
		},
	},
	authors: [{ name: "cjh0120", url: "https://cjh0120.github.io/resume" }],
	verification: {
		google: "xpesEEYKOKSfiNiQUY_b3BKO6-r9dGg7Ag7LgMqgls4",
	},
	openGraph: {
		type: "profile",
		images: [
			{
				url: ogImage.src,
				alt: "OG IMAGE",
			},
		],
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ko">
			<body className={NSK.className}>
				{children}
				<Footer />
			</body>
			<GoogleAnalytics gaId="G-RQ8D556WN2" />
		</html>
	)
}
