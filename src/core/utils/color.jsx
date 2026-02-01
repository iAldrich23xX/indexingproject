export function hexToRgb(hex) {
    const m = hex.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (!m) return { r: 0, g: 0, b: 0 };
    return {
        r: parseInt(m[1], 16),
        g: parseInt(m[2], 16),
        b: parseInt(m[3], 16)
    };
}

export function resolveColor(input) {
    if (!input) return '#000000';

    if (input.startsWith('#')) return input;

    if (input.startsWith('bg-')) {
        if (typeof window === 'undefined') return '#000000';

        const el = document.createElement('div');
        el.className = input;
        document.body.appendChild(el);

        const color = getComputedStyle(el).backgroundColor;
        document.body.removeChild(el);

        return rgbStringToHex(color);
    }

    return '#000000';
}

function rgbStringToHex(rgb) {
    const m = rgb.match(
        /^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/
    );
    if (!m) return '#000000';

    const toHex = v => {
        const h = parseInt(v, 10).toString(16);
        return h.length === 1 ? '0' + h : h;
    };

    return `#${toHex(m[1])}${toHex(m[2])}${toHex(m[3])}`;
}