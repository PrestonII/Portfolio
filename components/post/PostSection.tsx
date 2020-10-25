import React from 'react';
import PageLink from '../PageLink';
import ROUTES from '../Routes';
import PostCoverImage from './PostCoverImage';
import PostBody from './PostBody';
import styles from './post.module.scss';

interface IPostSection {
  title: string;
  sectionTitle: string;
  date?: string;
  coverImage?: string;
  sectionContent: string;
  sectionNext?: string;
}

const PostSection = ({title, sectionTitle, sectionContent, coverImage, sectionNext}: IPostSection) => {
  const imageUrl = coverImage ?? '';

  return (
    <div className={styles.post}>
      <div className={styles.post__title}>
        <h2>{title}</h2>
      </div>
      <div className={styles.post__jumbotron}>
        <PostCoverImage title={title} src={imageUrl} slug={sectionNext} />
      </div>
      <div className={styles.post__summary}>
        <div className={styles.post__summary__header}>
          <h2>{sectionTitle}</h2>
          <h4>hlw</h4>
        </div>
        <PostBody content={sectionContent} />
      </div>
    </div>
  )
}

export default PostSection;