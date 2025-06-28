import os
import subprocess
import shutil

raw_name = input("Enter the component name (e.g. button): ").strip()
stencil_name = f"sh-{raw_name}"
out_folder = f"./{stencil_name}-output"
tsx_path = f"components/ui/{raw_name}.tsx"

if not os.path.exists(f"my-app/{tsx_path}"):
    print(f"❌ my-app/{tsx_path} does not exist!")
    exit(1)

if os.path.exists("transpiled"):
    shutil.rmtree("transpiled")

print("⚡ Running Babel transpile...")
os.chdir("my-app")
subprocess.run(
    f'npx babel components/ui/{raw_name}.tsx --extensions ".tsx" --out-dir ../transpiled --presets @babel/preset-react,@babel/preset-typescript,@babel/preset-env',
    shell=True
)
os.chdir("..")

if os.path.exists(out_folder):
    shutil.rmtree(out_folder)
os.makedirs(out_folder)

stencil_path = f"shadcn-xt/src/components/{stencil_name}"
if os.path.exists(stencil_path):
    print(f"⚠️ Stencil component {stencil_name} already exists. Skipping generate.")
else:
    print("⚡ Generating Stencil component...")
    subprocess.run(f"npx stencil generate {stencil_name}", shell=True)

print("⚡ Generating Stencil switch code...")
subprocess.run(f"node cva-to-switch.cjs {stencil_name}", shell=True)

print("⚡ Generating HTML from transpiled JS...")
transpiled_file = f"transpiled/{raw_name}.js"
if os.path.exists(transpiled_file):
    subprocess.run(f"node generator.cjs {raw_name}", shell=True)
else:
    print(f"❌ Transpiled file not found: {transpiled_file}")

if os.path.exists("transpiled"):
    shutil.move("transpiled", f"{out_folder}/transpiled")

if os.path.exists("output"):
    shutil.move("output", f"{out_folder}/html-output")

switch_out = f"{stencil_name}-switch-output.txt"
if os.path.exists(switch_out):
    shutil.move(switch_out, f"{out_folder}/{switch_out}")

print(f"✅ All output moved to {out_folder}")

print("⚙️ Build the CSS")
subprocess.run("npx @tailwindcss/cli -i ./examples/shadcn/globals.css -o ./examples/build/globals.css", shell=True)
