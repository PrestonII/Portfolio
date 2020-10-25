import * as path from 'path';
import { getAllPostSlugs} from './services.post';

describe("Post Service", () => {
  it("gets files from the post directory", () => {
    const files = getAllPostSlugs();
    const mainIndexFile = path.join(process.cwd(), '__content__', 'about', 'index.md');

    expect(files).not.toBeNull();
    expect(files).not.toBeUndefined();
    expect(files).toContain<string>(mainIndexFile);
    expect(files.length).toBeGreaterThan(1);
  });
});