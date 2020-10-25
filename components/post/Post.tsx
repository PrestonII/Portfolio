import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { PostType } from '../../types/post';

type Props = {
  post: PostType
  morePosts?: PostType[]
  preview?: boolean
}

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return null;
}

export default Post;