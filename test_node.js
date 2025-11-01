const { shorten_css_color_js } = require('./index.cjs');

console.log('Testing Node.js (sync)...');
console.log('#ffffff →', shorten_css_color_js('#ffffff'));
console.log('rgb(255,0,0) →', shorten_css_color_js('rgb(255,0,0)'));
console.log('✅ Node.js works!');