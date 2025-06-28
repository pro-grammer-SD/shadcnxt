import { writeFile } from 'node:fs/promises';

const componentName = process.argv[2];

if (!componentName) {
  console.error('❌ Provide component name as argument!');
  process.exit(1);
}

// Here you can customize per-component configs if needed
const cvaConfig = {
  variant: {
    default: "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
    destructive: "bg-destructive text-white shadow-xs hover:bg-destructive/90",
    outline: "border bg-background",
    secondary: "bg-secondary text-secondary-foreground",
    ghost: "hover:bg-accent",
    link: "text-primary underline-offset-4 hover:underline"
  },
  size: {
    default: "h-9 px-4 py-2",
    sm: "h-8 rounded-md px-3",
    lg: "h-10 rounded-md px-6",
    icon: "size-9"
  }
};

function generateSwitch(name, map) {
  let out = `switch (this.${name}) {\n`;
  for (const key in map) {
    out += `  case '${key}': ${name}Class = '${map[key]}'; break;\n`;
  }
  out += `  default: ${name}Class = '${map.default}';\n`;
  out += `}`;
  return out;
}

const variantSwitch = generateSwitch('variant', cvaConfig.variant);
const sizeSwitch = generateSwitch('size', cvaConfig.size);

const final = `
get classes() {
  let base = 'inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50';
  let variantClass = '';
  let sizeClass = '';

  ${variantSwitch}

  ${sizeSwitch}

  return \`\${base} \${variantClass} \${sizeClass}\`;
}
`;

await writeFile(`${componentName}-switch-output.txt`, final);
console.log(`✅ Switch code written to ${componentName}-switch-output.txt`);
