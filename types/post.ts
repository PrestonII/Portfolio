export interface IPostProps {
  fileContents: string;
  postName: string;
  fields?: string[]
}

export interface IPostData {
  slug: string
  title: string
  date: string
  coverImage: string
  excerpt?: string
  ogImage?: {
    url: string
  }
  content: string
}

export class PostData implements IPostData {
  title = '';
  coverImage = '';
  excerpt?: string | undefined;
  ogImage?: { url: string; } | undefined;
  slug = '';
  content = '';
  date: string = new Date().toString();
  // extraData: Record<string, unknown> = {};
}

export const PostFields = {
  Title: 'title',
  Date: 'date',
  Slug: 'slug',
  Content: 'content',
  Cover: 'coverImage'
}

export type PostType = PostData;

export type PostProps = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}