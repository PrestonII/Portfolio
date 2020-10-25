import AboutLayout from '../../components/about/about.layout';
import Post from '../../components/post/Post';
import { PostType, PostProps } from '../../types/post';
import { getPostBySlug, getSlugFullDirectory, getAllPosts } from '../../services/services.post';
import { convertMarkdownToHtml } from '../../services/services.markdown';

type Params = {
  params: {
    slug: string
  }
}

export default function SlugLayout(props: PostProps) {
  return <AboutLayout {...props}/>
}

export async function getStaticProps({ params }: Params) {
  const postType = 'about';
  const fullPath = getSlugFullDirectory(postType, params.slug);

  const post = getPostBySlug(fullPath, [
    'title',
    'date',
    'slug',
    'content',
    'coverImage',
  ]);
  
  const content = await convertMarkdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      }
    }),
    fallback: false,
  }
}