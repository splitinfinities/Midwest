export const styleContents = (size) => {

	const steps = [
		1.125, // 18
		1.0625, // 17
		1, // 16
		.9375, // 15
		.875, // 14
		.8125, // 13
		.75, // 12
		.6825, // 11
		.625 // 10
	];

	return `
:root,
html {
	font-size: ${size * steps[8]}px;
}

@media (min-width: 400px) {
	:root,
	html {
		font-size: ${size * steps[7]}px;
	}
}

@media (min-width: 600px) {
	:root,
	html {
		font-size: ${size * steps[6]}px;
	}
}

@media (min-width: 800px) {
	:root,
	html {
		font-size: ${size * steps[5]}px;
	}
}

@media (min-width: 1000px) {
	:root,
	html {
		font-size: ${size * steps[4]}px;
	}
}

@media (min-width: 1200px) {
	:root,
	html {
		font-size: ${size * steps[3]}px;
	}
}

@media (min-width: 1400px) {
	:root,
	html {
		font-size: ${size * steps[2]}px;
	}
}

@media (min-width: 1600px) {
	:root,
	html {
		font-size: ${size * steps[1]}px;
	}
}

@media (min-width: 1800px) {
	:root,
	html {
		font-size: ${size * steps[0]}px;
	}
}`;
}