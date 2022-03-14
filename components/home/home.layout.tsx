import React from 'react';
import Layout from '../Layout'
import { Home } from './home.component';
import styles from './home.module.scss'

export default function HomeLayout(): JSX.Element {
  const title = "FullStack Designer & Developer"
  // const heading = "A Developer that can also Design products"
  const heading = (
    <div className={styles.home__title}>
      A <span>Developer</span> that can also <span>Design</span> products
    </div>
  )

  return (
    <Layout title={`Preston Smith | ${title}`}>
      <Home title={heading}/>
      <Home title={heading}/>
      <Home title={heading}/>
    </Layout>
  )
}