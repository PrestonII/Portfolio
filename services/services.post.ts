import fs from 'fs';
import * as path from 'path';

import { getAllFiles } from './services.files';
import { convertMarkdownToPostData } from './services.markdown';

const postsDirectory = path.join(process.cwd(), '__content__');

export function getAllPostSlugs() {
  return getAllFiles(postsDirectory);
}

export function getAllPostSlugsByDirectory(type: string) {
  return getAllFiles(path.join(postsDirectory, type));
}

export function getSlugFullDirectory(type: string, slug:string) {
  return path.join(postsDirectory, type, `${slug}.md`);
}

export function getPostBySlug(fullPath: string, fields?: string[]) {
  const postName = path.basename(fullPath).replace(/\.md$/, '');
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const data = convertMarkdownToPostData({fileContents, postName, fields});

  return data;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getAllPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1)) // pause sorting for now
  return posts
}

export function getAllPostsByDirectory(fields: string[] = [], type: string) {
  const slugs = getAllPostSlugsByDirectory(type);
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1)) // pause sorting for now
  return posts
}

export function addTwo(value: number): number {
  const additional = 2;
  const added = value + additional;
  
  return added;
}

