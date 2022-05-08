
export const imgToString = (img: Blob | MediaSource): string => URL.createObjectURL(img);

export const map = (
	current: number,
	in_min: number,
	in_max: number,
	out_min: number,
	out_max: number
): number => ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
