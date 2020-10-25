import * as path from 'path';
import { getAllPostSlugs, getPostBySlug, getSlugFullDirectory} from './services.post';

describe("Post Service", () => {
  it("gets files from the post directory", () => {
    const files = getAllPostSlugs();
    const mainIndexFile = path.join(process.cwd(), '__content__', 'about', 'me.md');

    expect(files).not.toBeNull();
    expect(files).not.toBeUndefined();
    expect(files).toContain<string>(mainIndexFile);
    expect(files.length).toBeGreaterThan(1);
  });

  it(`gets the main 'About' page from the directory`, () => {
    const slug = 'me';
    const postType = 'about';
    const fullPath = getSlugFullDirectory(postType, slug);

    const post = getPostBySlug(fullPath, [
      'title',
      'date',
      'slug',
      // 'author',
      'content',
      // 'ogImage',
      'coverImage',
    ]);

    expect(post).not.toBeNull();
    expect(post).not.toBeUndefined();
  })
});
