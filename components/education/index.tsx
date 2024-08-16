import { IDateCardProps } from "../experience"
import DateCard from "../ui/DateCard"
import SectionWrapper from "../ui/sectionWrapper"

const Education = ({ data }: IDateCardProps) => {
	return (
		<SectionWrapper title="education">
			{data?.map((item, index) => (
				<DateCard key={item.title} {...item} />
			))}
		</SectionWrapper>
	)
}
export default Education
