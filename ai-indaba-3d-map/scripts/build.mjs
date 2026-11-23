import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { resolve } from 'node:path';
const root = resolve(import.meta.dirname, '..');
const data = (await readFile(resolve(root, 'src/map-data.js'), 'utf8')).replace(/^export\s+/gm, '');
const component = (await readFile(resolve(root, 'src/ai-indaba-map.js'), 'utf8'))
  .replace(/^import\s+\{[^\n]+\}\s+from\s+'\.\/map-data\.js';\s*$/m, '')
  .replace(/^export\s+\{\s*AiIndabaMap\s*\};?\s*$/m, '');
const banner = `/* Sasol AI Indaba 2.0 - self-contained 3D venue map v1.0.0 */\n`;
const bundle = `${banner}(() => {\n${data}\n${component}\n})();\n`;
await mkdir(resolve(root, 'dist'), { recursive: true });
await writeFile(resolve(root, 'dist/ai-indaba-map.js'), bundle);
await writeFile(resolve(root, 'dist/ai-indaba-map.iife.js'), bundle);
console.log(`Built dist/ai-indaba-map.js (${Math.round(bundle.length/1024)} KB, no runtime dependencies)`);
