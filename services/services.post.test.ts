import * as path from 'path';
import { getAllPostSlugs, getPostBySlug, getSlugFullDirectory, addTwo} from './services.post';

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

    const post = getPostBySlug(fullPath);

    expect(post).not.toBeNull();
    expect(post).not.toBeUndefined();
  })

  it(`gets the post called 'Recreating Space Virtually' from the directory`, () => {
    const slug = 'recreating-space-virtually';
    const postType = 'work';
    const fullPath = getSlugFullDirectory(postType, slug);

    const post = getPostBySlug(fullPath);

    expect(post).not.toBeNull();
    expect(post).not.toBeUndefined();
  })

  it(`should reliably add two to any value`, () => {
    // arrange
    const value = 10;
    const expectedValue = 12;

    // act 
    const returnedValue = addTwo(value);

    // assert
    expect(returnedValue).toEqual(expectedValue);
  })

});
