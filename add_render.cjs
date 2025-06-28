const fs = require('fs');

const file = process.argv[2];
const componentName = process.argv[3];

if (!file || !componentName) {
  console.error('❌ Usage: node append-render.cjs <path-to-js> <ComponentName>');
  process.exit(1);
}

const code = fs.readFileSync(file, 'utf-8');

const renderExport = `
const React = require('react');

module.exports.render = function(pragma) {
  return pragma(React.createElement(${componentName}));
};
`;

fs.writeFileSync(file, code + '\n' + renderExport);

console.log(`✅ render() export appended to ${file}`);
