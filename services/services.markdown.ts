import remark from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';
import { IPostProps, PostMetadata, PostFields } from '../types/post';

export async function convertMarkdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export function convertMarkdownToPostData({fileContents, postName, fields}: IPostProps ) {
  const { data, content } = matter(fileContents)

  const dataFields = fields ?? Object.values(PostFields);

  const meta = new PostMetadata();
  meta.slug = postName;
  meta.postLocation = content;
  
  return meta;
}