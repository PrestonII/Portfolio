import React from 'react';

import Layout from '../Layout'
import { Home } from './home.component';

export default function HomeLayout() {
  const title = "FullStack Designer & Developer"
  const heading = "A Developer that can also Design products"

  return (
    <Layout title={`Preston Smith | ${title}`}>
      <Home title={heading}/>
      <Home title={heading}/>
      <Home title={heading}/>
    </Layout>
  )
}