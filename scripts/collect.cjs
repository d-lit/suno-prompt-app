#!/usr/bin/env node

const fs = require("fs").promises;
const path = require("path");

const SRC_DIR = path.resolve("./src");
const OUTPUT_FILE = path.resolve("./collected.txt");

// Список расширений, которые собираем
const FILE_EXTENSIONS = [".ts", ".tsx", ".js", ".jsx"];

// Рекурсивно собираем все файлы из папки
async function collectFiles(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  let files = [];

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      const nested = await collectFiles(fullPath);
      files = files.concat(nested);
    } else if (FILE_EXTENSIONS.includes(path.extname(entry.name))) {
      files.push(fullPath);
    }
  }

  return files;
}

async function main() {
  try {
    const files = await collectFiles(SRC_DIR);
    let output = "";

    for (const file of files) {
      const relative = path.relative(SRC_DIR, file).replace(/\\/g, "/");

      const content = await fs.readFile(file, "utf-8");

      output += `\n\n// ----------------------------\n`;
      output += `// File: src/${relative}\n`;
      output += `// ----------------------------\n\n`;
      output += content + "\n";
    }

    await fs.writeFile(OUTPUT_FILE, output, "utf-8");

    console.log(
      `✅ Successfully collected ${files.length} files into ${OUTPUT_FILE}`,
    );
  } catch (err) {
    console.error("❌ Error during collection:", err);
    process.exit(1);
  }
}

main();
