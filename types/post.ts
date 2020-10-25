export interface IPostProps {
  fileContents: string;
  postName: string;
  fields?: string[]
}

export interface IPostMetadata {
  slug: string;
  postLocation: string;
  extraData: Object;
  date: Date;
}

export class PostMetadata implements IPostMetadata {
  slug: string = '';
  postLocation: string = '';
  extraData: Object = {};
  date: Date = new Date();
}