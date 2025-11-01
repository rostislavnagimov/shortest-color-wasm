import * as wasm from './shortest_color_wasm.js';

// Реэкспортируем функцию напрямую
export const shorten_css_color_js = wasm.shorten_css_color_js;
