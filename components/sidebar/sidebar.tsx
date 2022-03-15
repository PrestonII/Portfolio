import React, { ReactNode, useEffect } from 'react'
import { TimelineMax as Timeline, Power1, gsap } from 'gsap';
import Link from 'next/link';
import { SidebarIcon } from './SidebarIcon';
import styles from './sidebar.module.scss';
import { OverflowHiddenParagraph } from '../containers/container.hidden';

export interface ISidebar {
  children?: ReactNode;
  title?: string;
  sectionTitle?: string;
}

const HistoryPoint = () => (
  <div className={styles.history} style={{top: 500, left: '50%'}}>
    <div className={styles.history__dot} style={{ }} />
    <OverflowHiddenParagraph classOverrides={styles.history__text}>NOW</OverflowHiddenParagraph>
  </div>
  
)

const Sidebar = () => {
  useEffect(() => {
    // tl.play();
  },[])

  return (
    <header className={styles.bar}>
      <nav>
        <div className={styles.icon}>
          <SidebarIcon />
        </div>
        <div className={styles.line} />
        <HistoryPoint />
      </nav>
      <div className={styles.place}>
        <p>HOME</p>
      </div>
    </header>
  )
}

export default Sidebar;