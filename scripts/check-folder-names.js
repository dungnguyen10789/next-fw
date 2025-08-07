import fs from 'fs';
import path from 'path';

function checkFolderNames(dir) {
  for (const file of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      // ignore special folders
      if (['@types', '__tests__', '__mocks__', 'node_modules', '.git'].includes(file)) {
        continue;
      }

      if (!/^[a-z0-9-]+$/.test(file)) {
        console.error(`Invalid folder name "${file}" — should be kebab-case.`);
        process.exit(1);
      }
      checkFolderNames(fullPath);
    }
  }
}

checkFolderNames('./src');

console.log('All desired folders are kebab-case!');
