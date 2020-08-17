import delay from 'async-delay';
import contains from '@f/contains-element';
import { InputDate } from '../input';
import { Dayjs } from 'dayjs';


export const getDateTimeFromModal = async (self: InputDate) => {
	let open: boolean;

	console.log("one")
	
	self.removeOtherDateTimePickers()
	console.log("two")

	const dateTime = document.createElement("midwest-datetime-picker");
	dateTime.setAttribute("name", self.name);
	dateTime.setAttribute("value", self.value ?? "now");
	dateTime.setAttribute("method", self.type);
	dateTime.setAttribute("range", self.range);
	dateTime.setAttribute("min", `${self.min}`);
	dateTime.setAttribute("max", `${self.max}`);

	self.dateTimeElement = dateTime;

	dateTime.addEventListener("micro-update", (e: any) => {
		self.value = e.detail.value;
	});

	dateTime.addEventListener("update", (e: any) => {
		self.value = e.detail.value;
		self.removeDateTimePicker();
		self.input.focus();
		open = false;
	});

	self.handleDateTimePosition();

	document.body.append(dateTime);

	await delay(10);

	open = true;

	const hideEl = (e: any) => {
		if (open && !contains(e.target, dateTime)) {
			self.removeDateTimePicker();
			document.removeEventListener("click", hideEl)
		}
	}

	document.addEventListener("click", hideEl);
}


export const currentFocusDayjs = (self: InputDate) => {
	let value;

	if (self.range && self.dateRangeFocus === "from") {
		value = self._from.clone();
	} else if (self.range && self.dateRangeFocus === "to") {
		value = self._to.clone();
	} else {
		value = self._date.clone();
	}

	return value;
}

export const setUpdatedDayjs = (self: InputDate, value: Dayjs) => {
	if (self.range && self.dateRangeFocus === "from") {
		self._from = undefined;
		self._from = value;
	} else if (self.range && self.dateRangeFocus === "to") {
		self._to = undefined;
		self._to = value;
	} else {
		self._date = undefined;
		self._date = value;
	}
}

export const incrementSomething = async (self: InputDate) => {
	const shiftValue = ["month", "hour"].includes(self.dateFocus) ? 3 : self.dateFocus === "minute" ? 15 : 5
	let value = currentFocusDayjs(self);
	const clonedValue = value.clone()

	if (self.dateFocus === "ampm") {
		const current = value.hour();

		// tslint:disable-next-line: prefer-conditional-expression
		if (value.format('a') === "am") {
			value = value.set("hour", current + 12)
		} else {
			value = value.set("hour", current - 12)
		}
	} else {
		const current = value[self.dateFocus]()
		const newValue = self.shift ? (current + shiftValue) : (current + 1);
		value = value.set(self.dateFocus, newValue)
	}

	["date", "month", "year", "hour", "minute"].forEach((unit: any) => {
		if (unit !== self.dateFocus && self.dateFocus !== "ampm") {
			// @ts-ignore
			value = value.set(unit, clonedValue[unit]())
		}
	});

	if (value.isBefore("2200-01-01")) {
		setUpdatedDayjs(self, value)
	}
}

export const decrementSomething = async (self: InputDate) => {
	const shiftValue = ["month", "hour"].includes(self.dateFocus) ? 3 : self.dateFocus === "minute" ? 15 : 5;
	let value = currentFocusDayjs(self);
	const clonedValue = value.clone()

	if (self.dateFocus === "ampm") {
		const current = value.hour();

		// tslint:disable-next-line: prefer-conditional-expression
		if (value.format('a') === "am") {
			value = value.set("hour", current + 12)
		} else {
			value = value.set("hour", current - 12)
		}
	} else {
		const current = value[self.dateFocus]()
		const newValue = self.shift ? (current - shiftValue) : (current - 1);
		value = value.set(self.dateFocus, newValue)
	}

	["date", "month", "year", "hour", "minute"].forEach((unit: any) => {
		if (unit !== self.dateFocus && self.dateFocus !== "ampm") {
			// @ts-ignore
			value = value.set(unit, clonedValue[unit]())
		}
	});

	if (value.isAfter("1900-01-01")) {
		setUpdatedDayjs(self, value)
	}
}