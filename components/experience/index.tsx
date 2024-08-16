import DateCard, { DateCardProps } from "../ui/DateCard"
import SectionWrapper from "../ui/sectionWrapper"
import styles from "./experience.module.scss"

interface ExperienceProps {
	data: DateCardProps[]
}
const Experience = ({ data }: ExperienceProps) => {
	return (
		<SectionWrapper title="experience">
			{data?.map((item, index) => (
				<DateCard key={item.title} {...item} />
			))}
		</SectionWrapper>
	)
}
export default Experience
