import React from 'react';
import Layout from '../Layout';
import About from './about.component';
import { PostProps } from '../../types/post';

const AboutPost = (props: PostProps) => {
  const { title, content, date, coverImage } = props.post;

  return (
    <Layout title="Preston Smith | About">
      <About 
        title={title}
        sectionTitle={'Now'}
        sectionContent={content}
      />
    </Layout>
  )
}

export default AboutPost;