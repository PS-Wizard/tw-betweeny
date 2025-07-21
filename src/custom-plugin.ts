// tailwind.plugin.ts
import plugin from 'tailwindcss/plugin';

const clampValue = (min: string, max: string, unit = '') =>
    `clamp(${min}${unit}, calc(${min}${unit} + (${parseFloat(max) - parseFloat(min)} * ((100vw - 320px) / 1280))), ${max}${unit})`;

const extractUnit = (val: string) => {
    const match = val.match(/^(-?\d*\.?\d+)([a-z%]*)$/);
    return match ? { num: match[1], unit: match[2] || '' } : { num: val, unit: '' };
};

const resolveThemeValue = (themeSection: any, key: string) => {
    if (!themeSection) return key;
    return typeof themeSection[key] === 'string' ? themeSection[key] : themeSection[key]?.[0] ?? key;
};

const propertiesMap = {
    'text': 'font-size',
    'p': 'padding',
    'pt': 'padding-top',
    'pr': 'padding-right',
    'pb': 'padding-bottom',
    'pl': 'padding-left',
    'px': ['padding-left', 'padding-right'],
    'py': ['padding-top', 'padding-bottom'],
    'm': 'margin',
    'mt': 'margin-top',
    'mr': 'margin-right',
    'mb': 'margin-bottom',
    'ml': 'margin-left',
    'mx': ['margin-left', 'margin-right'],
    'my': ['margin-top', 'margin-bottom'],
    'w': 'width',
    'h': 'height',
    'max-w': 'max-width',
    'max-h': 'max-height',
    'min-w': 'min-width',
    'min-h': 'min-height',
};

export default plugin(function({ matchUtilities, theme }) {
    Object.keys(propertiesMap).forEach((prefix) => {
        const cssProps = propertiesMap[prefix];
        const themeSection =
            prefix.startsWith('p') || prefix.startsWith('m')
                ? theme('spacing')
                : prefix === 'text'
                    ? theme('fontSize')
                    : theme(prefix);

        matchUtilities(
            {
                [prefix]: (value) => {
                    if (!value.includes('~')) return {}; // let normal tailwind handle it

                    const [minRaw, maxRaw] = value.split('~');

                    let minVal = resolveThemeValue(themeSection, minRaw) || minRaw;
                    let maxVal = resolveThemeValue(themeSection, maxRaw) || maxRaw;

                    if (Array.isArray(minVal)) minVal = minVal[0];
                    if (Array.isArray(maxVal)) maxVal = maxVal[0];

                    const { num: min, unit } = extractUnit(minVal);
                    const { num: max } = extractUnit(maxVal);

                    const clamp = clampValue(min, max, unit);

                    if (Array.isArray(cssProps)) {
                        return Object.fromEntries(cssProps.map((prop) => [prop, clamp]));
                    } else {
                        return { [cssProps]: clamp };
                    }
                },
            },
            { values: themeSection }
        );
    });
});
