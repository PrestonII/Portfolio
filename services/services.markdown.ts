import remark from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';
import { IPostProps, PostData, PostFields } from '../types/post';

export async function convertMarkdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown)
  return result.toString()
}

export function convertMarkdownToPostData({fileContents, postName, fields}: IPostProps ) {
  const { data, content } = matter(fileContents)

  const dataFields = fields ?? Object.values(PostFields);

  type Meta = {
    [key: string]: any;
  }
  const meta: Meta = {};
  dataFields.forEach((field) => {
    meta[field] = data[field];
  });
  
  meta['slug'] = postName;
  meta['content'] = content;

  // const postData = new PostData();
  
  return meta;
}
