export function calculateColor(color, f) {
    const compute = (c, f) => Math.floor(Math.min(parseInt(c, 16) * f, 255)).toString(16).padStart(2, '0');
    const b = compute(color.substring(color.length - 2, color.length - 0), f);
    const g = compute(color.substring(color.length - 4, color.length - 2), f);
    const r = compute(color.substring(color.length - 6, color.length - 4), f);
    return `${(color.charAt(0) === '#') ? '#' : ''}${r}${g}${b}`;
}
