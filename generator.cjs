const path = require('path');
const fs = require('fs/promises');

const rawName = process.argv[2];

if (!rawName) {
  console.error("❌ Component name argument missing. Example: node generator.cjs button");
  process.exit(1);
}

const transpiledPath = path.join(__dirname, 'sh-button-output', 'transpiled', `${rawName}.js`);

let transpiled;
try {
  transpiled = require(transpiledPath);
} catch (err) {
  console.error(`❌ Could not load transpiled file: ${transpiledPath}`);
  console.error(err);
  process.exit(1);
}

if (typeof transpiled.render !== 'function') {
  console.error(`❌ No render() export found in ${transpiledPath}`);
  process.exit(1);
}

const htmlTsx = require('html-tsx');
const html = transpiled.render(htmlTsx.pragma);

console.log(`✅ Generated HTML:`);
console.log(html);
