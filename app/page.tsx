import Image from "next/image"
import styles from "./page.module.scss"
import image from "@/public/tesing.jpg"
export default function Home() {
	return (
		<main className={styles.main}>
			<p className={styles.description}>CSS테스트</p>
			<Image
				src={image.src}
				alt="Vercel Logo"
				width={image.width}
				height={image.height}
			/>
		</main>
	)
}
