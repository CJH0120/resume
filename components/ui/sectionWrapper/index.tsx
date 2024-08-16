import styles from "./section.wrapper.module.scss"
interface SectionWrapperProps {
	classNames?: string
	title: string
	children?: React.ReactNode
}
const SectionWrapper = ({
	title,
	children,
	classNames,
}: SectionWrapperProps) => {
	return (
		<section className={[styles["section-wrapper"], classNames].join(" ")}>
			<h2 className={styles["section-title"]}>{title}</h2>
			{children}
		</section>
	)
}
export default SectionWrapper
