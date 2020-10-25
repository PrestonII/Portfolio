import fs from 'fs';
import * as path from 'path';

export function getAllFiles(baseDir: string): string[] {
  let files: string[] = [];

  fs
    .readdirSync(baseDir)
    .forEach(file => {
      const fileName = path.join(baseDir, file);
      
      if(isDirectory(fileName)) {
        files.push(...getAllFiles(fileName))
      } else {
        files.push(fileName);
      }
    })

  return files;
}

export function isDirectory(fileName: string): boolean {
  return fs.statSync(fileName).isDirectory();
}