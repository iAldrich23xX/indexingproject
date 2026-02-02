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
    if (!input) return { r: 0, g: 0, b: 0, a: 1 };

    let alpha = 1;
    let className = input;

    if (input.includes('/')) {
        const parts = input.split('/');
        className = parts[0];
        alpha = parseInt(parts[1], 10) / 100;
    }

    if (className.startsWith('#')) {
        const rgb = hexToRgb(className);
        return { ...rgb, a: alpha };
    }

    if (className.startsWith('bg-')) {
        if (typeof window === 'undefined') {
            return { r: 0, g: 0, b: 0, a: alpha };
        }

        const el = document.createElement('div');
        el.className = className;
        document.body.appendChild(el);

        const color = getComputedStyle(el).backgroundColor;
        document.body.removeChild(el);

        const rgb = parseCssColor(color);
        return { ...rgb, a: alpha };
    }

    return { r: 0, g: 0, b: 0, a: alpha };
}

function parseCssColor(css) {
    const m = css.match(
        /^rgba?\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)(?:\s*,\s*([\d.]+))?\s*\)$/
    );

    if (!m) return { r: 0, g: 0, b: 0, a: 1 };

    return {
        r: parseInt(m[1], 10),
        g: parseInt(m[2], 10),
        b: parseInt(m[3], 10),
        a: m[4] !== undefined ? parseFloat(m[4]) : 1
    };
}