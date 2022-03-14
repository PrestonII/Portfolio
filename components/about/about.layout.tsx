import React from 'react';
import Layout from '../Layout';
import PostSection from '../post/PostSection';
import { PostProps } from '../../types/post';

const AboutPost = (props: PostProps) => {
  const { title, content, date, coverImage } = props.post;

  return (
    <Layout title="Preston Smith | About">
      <PostSection 
        title={title}
        sectionTitle="Now"
        sectionContent={content}
        date={date}
        coverImage={coverImage}
      />
    </Layout>
  )
}

export default AboutPost;