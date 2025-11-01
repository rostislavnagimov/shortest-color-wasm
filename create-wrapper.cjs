const fs = require('fs');

console.log('📦 Creating wrappers...');

// Node.js версия
let nodeJs = fs.readFileSync('pkg-node/shortest_color_wasm.js', 'utf8');
nodeJs = nodeJs.replace(/shortest_color_wasm_bg\.wasm/g, 'node_bg.wasm');
fs.writeFileSync('node.js', nodeJs);
fs.copyFileSync('pkg-node/shortest_color_wasm_bg.wasm', 'node_bg.wasm');

// Bundler версия
fs.copyFileSync('pkg-bundler/shortest_color_wasm.js', 'shortest_color_wasm.js');
fs.copyFileSync('pkg-bundler/shortest_color_wasm_bg.js', 'shortest_color_wasm_bg.js');
fs.copyFileSync('pkg-bundler/shortest_color_wasm_bg.wasm', 'shortest_color_wasm_bg.wasm');

console.log('✓ Copied WASM files');

// index.cjs
fs.writeFileSync('index.cjs', `const wasm = require('./node.js');
module.exports = { shorten_css_color_js: wasm.shorten_css_color_js };
`);

// index.mjs - упрощённая версия без init
fs.writeFileSync('index.mjs', `import * as wasm from './shortest_color_wasm.js';

// Реэкспортируем функцию напрямую
export const shorten_css_color_js = wasm.shorten_css_color_js;
`);

fs.writeFileSync('index.d.ts', `export function shorten_css_color_js(input: string): string | Promise<string>;
`);

console.log('✅ Done!');