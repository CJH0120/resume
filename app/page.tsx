import IntroSection from "@/components/intro"
import styles from "./page.module.scss"
import image from "@/public/tesing.jpg"
import Introduce from "@/components/introduce"
import Skill from "@/components/skill"
import Experience from "@/components/experience"
export default function Home() {
	return (
		<main className={styles.main}>
			<IntroSection
				image={image}
				name={"최종현"}
				careerStartDate="2022-01-01"
				inputs={[
					{ email: "cjh0120@gmail.com" },
					{ github: "https://github.com/CJH0120" },
				]}
			/>
			<Introduce
				introducing={[
					"React, Next.js, TypeScript, CSS-in-JS, SCSS, RESTful API 등을 활용하여 사용자 경험을 향상시키기 위해 노력하며, 확장성과 유지 보수를 고려하여 항상 효율적인 코드를 고민하고 있습니다. 기획자 및 디자이너와는 Figma를 활용해 디자인과 기획의 명확한 커뮤니케이션을 진행하며, 백엔드 팀과는 Swagger를 사용해 API 문서를 공유하여 원활한 협업을 하고 있습니다",
					"혼자 작업하면서 가끔 제 방향이 맞는지에 대해 의문을 느끼기도 합니다. 하지만 코딩에는 정답이 없다고 생각하며, 비록 덜 효율적일지라도 새로운 접근 방식을 이해하려고 노력합니다. 이후 리서치나 학습을 통해 더 나은 방법을 발견하면 이를 빠르게 채택하려는 자세를 유지하고 있습니다.",
				]}
			/>
			<Skill
				skillItems={[
					{
						skillName: "language",
						skillValue: ["TypeScript", "JavaScript", "Golang", "Python"],
					},
					{
						skillName: "fameWorks & libraries",
						skillValue: [
							"React.JS",
							"Next.JS",
							"Node.JS",
							"ReactNative",
							"Flutter",
						],
					},
					{
						skillName: "database",
						skillValue: ["MySQL", "MariaDB", "FireBase"],
					},
					{ skillName: "tool", skillValue: ["Figma", "Git"] },
				]}
			/>
			<Experience
				data={[
					{
						startDate: "2023.11.13",
						isCurrent: true,
						isPeriod: true,
						title: "엑스포럼",
						subTitle: "DX팀 프론트엔드 개발자",
						list: [
							"기존 프로젝트 유지보수 및 제작",
							"Jenkins 기반 CICD 구축",
							"글로벌 프로젝트 제작",
							"신규 비즈니스 로직 구현",
						],
					},
					{
						startDate: "2023.08.14",
						endDate: "2023.10.19",
						isPeriod: true,
						title: "막시마",
						subTitle: "개발팀 프론트엔드 개발자",
						list: [
							"신규 앱/웹 제작",
							"MySQL / NoSQL 데이터베이스 유지보수 및 관리",
						],
					},
					{
						startDate: "2022.06.22",
						endDate: "2023.08.12",
						isPeriod: true,
						title: "바나나코퍼레이션",
						subTitle: "개발팀 프론트엔드 개발자",
						list: [
							"기존 프로젝트 유지보수 작업",
							"E-Commerce 신규 개발 ",
							"신규 서비스 개발(ReactNative)",
						],
					},
				]}
			/>
		</main>
	)
}
