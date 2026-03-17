const fs = require('fs');
let css = fs.readFileSync('src/index.css', 'utf8');

const replacements = [
  { search: /#0a0a0f/gi, replace: 'var(--bg-main)' },
  { search: /rgba\(10,\s*10,\s*15,/g, replace: 'rgba(var(--bg-main-rgb),' },
  { search: /#e8e6f0/gi, replace: 'var(--text-main)' },
  { search: /rgba\(232,\s*230,\s*240,/g, replace: 'rgba(var(--text-main-rgb),' },
  { search: /rgba\(255,\s*255,\s*255,/g, replace: 'rgba(var(--text-inverse-rgb),' },
  { search: /rgba\(0,\s*0,\s*0,/g, replace: 'rgba(var(--bg-inverse-rgb),' },
  { search: /#ffffff\b/gi, replace: 'var(--color-white)' },
  { search: /#fff\b/gi, replace: 'var(--color-white)' }
];

replacements.forEach(r => {
  css = css.replace(r.search, r.replace);
});

const themeVars = `
:root {
  --bg-main: #0a0a0f;
  --bg-main-rgb: 10, 10, 15;
  --text-main: #e8e6f0;
  --text-main-rgb: 232, 230, 240;
  --text-inverse-rgb: 255, 255, 255;
  --bg-inverse-rgb: 0, 0, 0;
  --color-white: #ffffff;
}

[data-theme="light"] {
  --bg-main: #F4F6FB;
  --bg-main-rgb: 244, 246, 251;
  --text-main: #0F172A;
  --text-main-rgb: 15, 23, 42;
  --text-inverse-rgb: 15, 23, 42;
  --bg-inverse-rgb: 255, 255, 255;
  --color-white: #0F172A;
}
`;

if (!css.includes('--bg-main:')) {
  css = themeVars + "\n" + css;
}

fs.writeFileSync('src/index.css', css);
console.log('CSS refactored for theme variables');
