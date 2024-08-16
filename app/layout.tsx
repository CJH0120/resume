import type { Metadata } from "next"
import { Noto_Sans_KR } from "next/font/google"
import "./globals.scss"
import Link from "next/link"
import Footer from "@/components/footer"

const NSK = Noto_Sans_KR({ subsets: ["latin"] })

export const metadata: Metadata = {
	title: "최종현 | 프론트엔드 개발자 이력서",
	description: "안녕하세요, 프론트엔드 개발자 최종현입니다",
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="ko">
			<meta
				name="google-site-verification"
				content="xpesEEYKOKSfiNiQUY_b3BKO6-r9dGg7Ag7LgMqgls4"
			/>
			<body className={NSK.className}>
				{children}
				<Footer />
			</body>
		</html>
	)
}
