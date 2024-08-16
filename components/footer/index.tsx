"use client"
import { useEffect } from "react"
import Link from "next/link"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"

const Footer = () => {
	useEffect(() => {
		if (typeof window !== "undefined") {
			const loadLibraries = async () => {
				const jsPDF = (await import("jspdf")).jsPDF
				const html2canvas = (await import("html2canvas")).default
				window.html2canvas = html2canvas
				window.jspdf = { jsPDF }
			}
			loadLibraries()
		}
	}, [])

	const handleClick = () => {
		const content = document.querySelector("main")

		if (window.html2canvas && window.jspdf) {
			const { jsPDF } = window.jspdf

			html2canvas(content as HTMLElement).then((canvas) => {
				const imgData = canvas.toDataURL("image/png")
				const pdf = new jsPDF("p", "mm", "a4")
				const imgWidth = 210
				const pageHeight = 297
				const imgHeight = (canvas.height * imgWidth) / canvas.width

				let heightLeft = imgHeight
				let position = 0

				pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
				heightLeft -= pageHeight

				// 남은 이미지 부분을 추가 페이지로 나누어 추가
				while (heightLeft > 0) {
					position = heightLeft - imgHeight
					pdf.addPage()
					pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight)
					heightLeft -= pageHeight
				}

				pdf.save("최종현_이력서.pdf")
			})
		} else {
			alert("종속성 에러 새로고침후 이용해주세요")
		}
	}

	return (
		<footer className="footer">
			<div className="link-footer">
				<Link
					target="_blank"
					href="https://github.com/CJH0120/resume"
					className="footer-text-link"
				>
					GITHUB
				</Link>
				<div className="download" onClick={handleClick}>
					이력서 다운받기
				</div>
			</div>
			<div className="footer-text">© 2024. CJH0120. All rights reserved.</div>
		</footer>
	)
}

export default Footer
