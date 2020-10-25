import * as path from 'path';
import { convertMarkdownToPostData, PostFields } from './services.markdown';

describe("Markdown Service", () => {
  it("can convert markdown to data", () => {
    const postName = 'me.md';
    const mainIndexFile = path.join(process.cwd(), '__content__', 'about', postName);
    const data = convertMarkdownToPostData({fileContents: mainIndexFile, postName});

    expect(data).not.toBeNull();
    expect(data).not.toBeUndefined();
    expect(data.content).not.toBeUndefined();
    expect(data.content).not.toBeNull();
    expect(data.slug).not.toBeUndefined();
    expect(data.slug).not.toBeNull();
  });
});