import { IDateCardProps } from "../experience"
import DateCard from "../ui/DateCard"
import SectionWrapper from "../ui/sectionWrapper"
import styles from "./project.module.scss"
const Project = ({ data }: IDateCardProps) => {
	return (
		<SectionWrapper title="Project">
			<div className={styles["project-wrap"]}>
				{data?.map((item, index) => (
					<DateCard key={item.title} {...item} />
				))}
			</div>
		</SectionWrapper>
	)
}
export default Project
