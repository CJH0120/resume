"use client"
import { useEffect } from "react"
import Link from "next/link"
import html2canvas from "html2canvas"
import { jsPDF } from "jspdf"

const Footer = () => {
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
			</div>
			<div className="footer-text">© 2024. CJH0120. All rights reserved.</div>
		</footer>
	)
}

export default Footer
