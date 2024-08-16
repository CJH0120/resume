import SectionWrapper from "../ui/sectionWrapper"
import styles from "./introduce.module.scss"

export interface IntroduceProps {
	introducing: string[]
}
const Introduce = ({ introducing }: IntroduceProps) => {
	return (
		<SectionWrapper title="Introduce">
			<div className={[styles.introduce_wrap].join(" ")}>
				{introducing?.map((introduce, index) => (
					<p className={styles.introduce_p} key={introduce}>
						{introduce}
					</p>
				))}
			</div>
		</SectionWrapper>
	)
}
export default Introduce
