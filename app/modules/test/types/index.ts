export interface IQuestion {
	id: number
	type: string
	data: any
}

export interface IAnsweredData {
	id: string | number
	correct: boolean
}
