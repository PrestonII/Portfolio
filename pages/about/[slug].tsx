import AboutLayout from '../../components/about/about.layout';
import { PostProps } from '../../types/post';
import {
  getPostBySlug,
  getSlugFullDirectory,
  getAllPostsByDirectory,
} from '../../services/services.post';
import { convertMarkdownToHtml } from '../../services/services.markdown';
import AboutPage from '../../components/about/about.main';

type Params = {
  params: {
    slug: string;
  };
};

export default function SlugLayout(props: PostProps) {
  return props.post.slug === 'me' ? <AboutPage /> : <AboutLayout {...props} />;
}

export async function getStaticProps({ params }: Params) {
  const postType = 'about';
  const fullPath = getSlugFullDirectory(postType, params.slug);
  const post = getPostBySlug(fullPath);
  const content = await convertMarkdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPostsByDirectory(['slug'], 'about');

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
