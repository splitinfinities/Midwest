export const isTextArea = function (type: string) {
	return (type === "textarea")
}

export const isFileUpload = function (type: string) {
	return (type === "file")
}

export const isSearch = function (type: string) {
	return (type === "search")
}

export const hasIncrements = function (type: string) {
	return (type === "number")
}

export const shouldBeAnInput = function (type: string) {
	return !(isTextArea(type) || isFileUpload(type))
}

export const isColorPicker = function (type: string) {
	return (type === "color")
}

export const isDatePicker = function (type: string) {
	return (["date", "month", "date-range"].includes(type))
}

export const isTimePicker = function (type: string) {
	return (["time"].includes(type))
}

export const isDateTimePicker = function (type: string) {
	return (["datetime"].includes(type))
}

export const hasValue = function (value: any) {
	return (value && value !== "" && value.length >= 1)
}

export const formatBytes = function (a: any, b = 2) { if (0 === a) return "0 Bytes"; const c = 1e3; const e: string[] = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]; const f = Math.floor(Math.log(a) / Math.log(c)); return parseFloat((a / Math.pow(c, f)).toFixed(b)) + " " + e[f] }

export const forEach = function (arr: any[], cb: (el: any, index: number) => void) {
	const length = arr.length;
	for (let index = 0; index < length; index++) {
		const element = arr[index];
		cb(element, index)
	}
}
