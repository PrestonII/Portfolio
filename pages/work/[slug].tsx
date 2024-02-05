import WorkDetailPage from '../../components/work/WorkDetail';
import { PostProps } from '../../types/post';
import {
  getPostBySlug,
  getSlugFullDirectory,
  getAllPostsByDirectory,
} from '../../services/services.post';
import { convertMarkdownToHtml } from '../../services/services.markdown';

type Params = {
  params: {
    slug: string;
  };
};

export default function SlugLayout(props: PostProps) {
  return <WorkDetailPage {...props} />;
}

export async function getStaticProps({ params }: Params) {
  const postType = 'work';
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
  const posts = getAllPostsByDirectory(['slug'], 'work');
  // const posts = getAllPosts(['slug'])

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
