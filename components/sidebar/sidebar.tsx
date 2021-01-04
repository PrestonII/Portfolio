import React, { ReactNode, useEffect } from 'react'
import { TimelineMax as Timeline, Power1, gsap } from 'gsap';
import Link from 'next/link';
import { FiActivity } from 'react-icons/fi';
import styles from './sidebar.module.scss';

export interface ISidebar {
  children?: ReactNode;
  title?: string;
  sectionTitle?: string;
}


const Sidebar = () => {
  useEffect(() => {
    // tl.play();
  },[])

  return (
    <header className={styles.bar}>
      <nav>
        <FiActivity />
      </nav>
    </header>
  )
}

export default Sidebar;