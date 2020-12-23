import React, { ReactNode, useEffect } from 'react'
import { TimelineMax as Timeline, Power1, gsap } from 'gsap';
import Link from 'next/link';
import styles from './sidebar.module.scss';

export interface ISidebar {
  children?: ReactNode;
  title?: string;
  sectionTitle?: string;
}


const Sidebar = () => {

  useEffect(() => {
    console.log('Starting up...');
  },[])

  return (
    <header className={styles.bar}>
      <nav>
      {/* <nav ref={navRef}> */}
        <Link href="/">
          <a>Home</a>
        </Link>{' '}
        |{' '}
        <Link href="/about">
          <a>About</a>
        </Link>{' '}
        |{' '}
        <Link href="/work/recreating-space-virtually">
          <a>Work</a>
        </Link>{' '}
        {/* <Link href="/users">
          <a>Users List</a>
        </Link>{' '} */}
        {/* | <a href="/api/users">Users API</a> */}
      </nav>
    </header>
  )
}

export default Sidebar;