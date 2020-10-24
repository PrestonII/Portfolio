import React from 'react';
import styles from './home.module.scss';
import PageLink from '../PageLink';
import ROUTES from '../Routes';

interface props {
  title: string;
}

export function Home({title}: props) {
  return (
    <div className={styles.main}>
      <h1>{title}</h1>
      <PageLink route={ROUTES.ABOUT} text="What's That?" />
    </div>
  )
}
