import * as path from 'path';
import matter from 'gray-matter';
import { getAllFiles } from './services.files';

const postsDirectory = path.join(process.cwd(), '__content__');

export function getAllPostSlugs() {
  return getAllFiles(postsDirectory);
}

