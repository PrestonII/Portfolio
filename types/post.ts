export interface IPostProps {
  fileContents: string;
  postName: string;
  fields?: string[]
}

export interface IPostMetadata {
  slug: string;
  content: string;
  extraData: Object;
  date: string;
}

export class PostMetadata implements IPostMetadata {
  slug: string = '';
  content: string = '';
  extraData: Object = {};
  date: string = new Date().toString();
}

export const PostFields = {
  Title: 'title',
  Date: 'date',
  Slug: 'slug',
  ContentLocation: 'contentLocation',
  Cover: 'coverImage'
}

export type PostType = {
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

export type PostProps = {
  post: PostType
  morePosts: PostType[]
  preview?: boolean
}