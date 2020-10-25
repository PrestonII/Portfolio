import fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), '__content__');

export function getAllPostSlugs() {
  return getPostSlugs(postsDirectory);
}

export function getPostSlugs(baseDir: string): string[] {
  let files: string[] = [];

  fs
    .readdirSync(baseDir)
    .forEach(file => {
      const fileName = path.join(baseDir, file);
      
      if(isDirectory(fileName)) {
        files.push(...getPostSlugs(fileName))
      } else {
        files.push(fileName);
      }
    })

  return files;
}

export function isDirectory(fileName: string): boolean {
  return fs.statSync(fileName).isDirectory();
}