import React, { ReactNode } from 'react';
import Head from 'next/head';
import HomeSidebar from './sidebar/Sidebar.Home';
import styles from './Layout.module.scss';

type Props = {
  children?: ReactNode;
  title?: string;
  navMethodList: (() => void)[];
};

const Layout = ({
  children,
  title = 'This is the default title',
  navMethodList,
}: Props) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <HomeSidebar navMethodList={navMethodList} />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
