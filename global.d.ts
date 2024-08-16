declare module "html2canvas" {
	export default function html2canvas(
		element: HTMLElement,
		options?: any
	): Promise<HTMLCanvasElement>
}

declare module "jspdf" {
	export class jsPDF {
		constructor(options?: any)
		addImage(
			imageData: string,
			format: string,
			x: number,
			y: number,
			width: number,
			height: number
		): void
		addPage(): void
		save(filename: string): void
	}
}
interface Window {
	html2canvas: any
	jspdf: {
		jsPDF: any
	}
}
