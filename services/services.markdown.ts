import remark from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';
import { IPostProps, PostFields } from '../types/post';

export async function convertMarkdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

export function convertMarkdownToPostData({
  fileContents,
  postName,
  fields,
}: IPostProps) {
  const { data, content } = matter(fileContents);

  const dataFields = fields ?? Object.values(PostFields);

  type Meta = {
    [key: string]: any;
  };
  const meta: Meta = {};
  for (const field of dataFields) {
    if (!Object.keys(data).includes(field)) continue;
    meta[field] = data[field];
  }

  meta.slug = postName;
  meta.content = content;

  return meta;
}
