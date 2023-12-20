export function contrastColor(color, threshold=0.5) {

    const b = parseInt(color.substring(color.length - 2, color.length - 0), 16);
    const g = parseInt(color.substring(color.length - 4, color.length - 2), 16);
    const r = parseInt(color.substring(color.length - 6, color.length - 4), 16);

	let luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
	let d = luminance > threshold ? '000000' : 'ffffff';
	return `${(color.charAt(0) === '#') ? '#' : ''}${d}`;
}	