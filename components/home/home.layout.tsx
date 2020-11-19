import React from 'react';

import Layout from '../Layout'
import { Home } from './home.component';
import ThreeGuy from '../canvas/canvas.three';

export default function HomeLayout() {
  const title = "FullStack Designer & Developer"

  return (
    <Layout title={`Preston Smith | ${title}`}>
      <ThreeGuy />
      {/* <Home title={title}/>
      <Home title={title}/>
      <Home title={title}/> */}
    </Layout>
  )
}