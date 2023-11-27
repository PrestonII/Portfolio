import React from 'react';
import Layout from '../Layout';
import PostSection from '../post/PostSection';
import { PostProps } from '../../types/post';

const WorkDetailPage = (props: PostProps) => {
  const { title, content, date, coverImage } = props.post;

  return (
    <Layout title={`Preston Smith | ${title}`} navMethodList={{}}>
      <PostSection
        title={title}
        sectionTitle="Now"
        sectionContent={content}
        date={date}
        coverImage={coverImage}
      />
    </Layout>
  );
};

export default WorkDetailPage;
