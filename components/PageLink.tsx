import React from 'react';
import Link from 'next/link';
import styles from './pagelink.module.scss';

interface PageLinkProps {
  route: string;
  text: string;
}

const PageLink = ({route, text}: PageLinkProps) => (
  <p className={styles.pagelink}>
    <Link href={route}>
      <a>{text}</a>
    </Link>
  </p>
)

export default PageLink;