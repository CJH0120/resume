import SectionWrapper from "../ui/sectionWrapper"
import styles from "./skill.module.scss"

interface SkillProps {
	skillItems: SkillItemProps[]
}
const Skill = ({ skillItems }: SkillProps) => {
	return (
		<SectionWrapper title="Skill">
			<div className={styles["skill-wrap"]}>
				{skillItems.map((skillItem) => (
					<SkillItem key={skillItem.skillName} {...skillItem} />
				))}
			</div>
		</SectionWrapper>
	)
}

export default Skill
export interface SkillItemProps {
	skillName: string
	skillValue: string[]
}
const SkillItem = ({ skillName, skillValue }: SkillItemProps) => {
	return (
		<div className={styles["skill-item-wrap"]}>
			<h3 className={styles["skill-item-title"]}>{skillName}</h3>
			<ul className={styles["skill-item-list"]}>
				{skillValue.map((skill) => (
					<li className={styles["skill-item"]} key={skill}>
						{skill}
					</li>
				))}
			</ul>
		</div>
	)
}
