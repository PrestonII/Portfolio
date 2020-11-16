import React from 'react';

import Layout from '../Layout'
import { Home } from './home.component';

export default function HomeLayout() {
  const title = "FullStack Designer & Developer"

  return (
    <Layout title={`Preston Smith | ${title}`}>
      <Home title={title}/>
      <Home title={title}/>
      <Home title={title}/>
    </Layout>
  )
}