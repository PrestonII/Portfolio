import React, { ReactNode, useEffect } from 'react';
import { TimelineMax as Timeline, Power1, gsap } from 'gsap';
import Head from 'next/head';
import HomeSidebar from './sidebar/Sidebar.Home';
import styles from './Layout.module.scss';

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = 'This is the default title' }: Props) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <HomeSidebar />

      <main>{children}</main>
    </div>
  );
};

export default Layout;
