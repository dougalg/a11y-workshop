export const clampNumber = (min: number, max: number, val: number) => {
	return Math.max(Math.min(max, val), min);
};
