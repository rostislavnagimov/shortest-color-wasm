import { shorten_css_color_js } from './index.mjs';

console.log('Testing Bundler (async)...');
console.log('#ffffff →', await shorten_css_color_js('#ffffff'));
console.log('rgb(255,0,0) →', await shorten_css_color_js('rgb(255,0,0)'));
console.log('✅ Bundler works!');