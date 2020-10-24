import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Sidebar from './Sidebar';
import styles from './Layout.module.scss';

type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className={styles.layout}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    
    <Sidebar />

    <main>
      {children}
    </main>
  </div>
)

export default Layout
