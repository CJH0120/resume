import { PropsWithChildren } from "react"
import styles from "./dateCard.module.scss"
import { periodDate } from "@/utils/convertDate"
export interface DateCardProps {
	startDate: string
	endDate?: string
	title: string
	isPeriod?: boolean
	subTitle?: string
	list?: string[]
	isCurrent?: boolean
}

const DateCard = ({
	endDate,
	isPeriod = false,
	startDate,
	subTitle,
	title,
	list,
	children,
	isCurrent = false,
}: PropsWithChildren<DateCardProps>) => {
	const getYYYYMM = (date: string) => {
		let newDate = new Date(date)
		return (
			newDate.getFullYear() + "." + ("0" + (newDate.getMonth() + 1)).slice(-2)
		)
	}
	return (
		<div className={styles["date-card"]}>
			<div className={styles["date-card-date"]}>
				<div className={styles["date-wrap"]}>
					<div className={styles["date"]}>
						<span>{getYYYYMM(startDate)}</span>
						{(!!endDate || isCurrent) && <span>~</span>}
						{endDate && <span>{getYYYYMM(endDate!)}</span>}
					</div>
					<div className={styles["date-period-wrap"]}>
						<div className={styles["date-period"]}>
							{isPeriod &&
								periodDate(startDate, endDate ?? new Date().toISOString())}
							개월
						</div>
						{isCurrent && <div className={styles["date-period"]}>재직중</div>}
					</div>
				</div>
			</div>
			<div className={styles["date-card-content"]}>
				<div className={styles["date-card-title"]}>{title}</div>
				{subTitle && (
					<div className={styles["date-card-subtitle"]}>{subTitle}</div>
				)}
				{list?.length && (
					<ol className={styles["date-card-list"]}>
						{list?.map((item) => (
							<li className={styles["date-card-item"]} key={item}>
								{item}
							</li>
						))}
					</ol>
				)}
				{children}
			</div>
		</div>
	)
}

export default DateCard
