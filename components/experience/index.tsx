import DateCard, { DateCardProps } from "../ui/DateCard"
import SectionWrapper from "../ui/sectionWrapper"
import styles from "./experience.module.scss"

export interface IDateCardProps {
	data: DateCardProps[]
}
const Experience = ({ data }: IDateCardProps) => {
	return (
		<SectionWrapper title="experience">
			<div className={styles["experience-wrap"]}>
				{data?.map((item, index) => (
					<DateCard key={item.title} {...item} />
				))}
			</div>
		</SectionWrapper>
	)
}
export default Experience
