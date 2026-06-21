"use client";

import { LiquidGlass } from 'react-liquid-glass-svg';
import type { LiquidGlassProps } from 'react-liquid-glass-svg';

/**
 * Thin wrapper around react-liquid-glass-svg with project defaults.
 *
 * Per Apple's HIG, Liquid Glass belongs to the functional/navigation layer
 * (headers, floating controls, menus) — never the content layer. Keep usage
 * to chrome that floats above scrolling content.
 *
 * The default tint adapts to light/dark via the --glass-tint CSS variable
 * defined in globals.css, so the same component reads correctly in both themes.
 */
const Glass = (props: LiquidGlassProps) => {
    return (
        <LiquidGlass
            backdropBlur={3}
            tintColor="var(--glass-tint)"
            displacementScale={60}
            turbulenceSeed={2}
            glassBorder
            {...props}
        />
    );
};

export default Glass;
