import React from 'react';
import Link from 'next/link';
import styles from './home.module.scss';

interface props {
  title: string;
}

export function Home({title}: props) {
  return (
    <>
      <h1>{title}</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </>
  )
}