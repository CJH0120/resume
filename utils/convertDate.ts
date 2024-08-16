export const convertDate = (date: string) => {
	const startDate = new Date(date)
	const today = new Date(
		new Intl.DateTimeFormat("ko-KR", {
			timeZone: "Asia/Seoul",
		}).format(new Date())
	)

	let years = today.getFullYear() - startDate.getFullYear()
	let months = today.getMonth() - startDate.getMonth()
	let days = today.getDate() - startDate.getDate()
	if (months < 0) {
		years--
		months += 12
	}
	if (days < 0) {
		months--
		const previousMonth = new Date(today.getFullYear(), today.getMonth(), 0)
		days += previousMonth.getDate()
		if (months < 0) {
			years--
			months += 12
		}
	}
	return { years, months, days }
}

export const periodDate = (startDate: string, endDate: string) => {
	const start = new Date(startDate)
	const end = new Date(endDate)

	let months
	months = (end.getFullYear() - start.getFullYear()) * 12
	months -= start.getMonth()
	months += end.getMonth()

	return months <= 0 ? 0 : months
}
