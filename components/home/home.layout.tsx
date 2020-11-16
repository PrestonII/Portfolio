import React from 'react';
import dynamic from 'next/dynamic';
import Layout from '../Layout'
// import TwoComponent from '../shapes/Canvas';
import { Home } from './home.component';


const DynamicComponentWithNoSSR = dynamic(
  () => import('../shapes/Canvas'), {
  ssr: false
})

const DynamicTwo = () => <DynamicComponentWithNoSSR />


export default function HomeLayout() {
  const title = "FullStack Designer & Developer"

  return (
    <Layout title={`Preston Smith | ${title}`}>
      <DynamicTwo />
      {/* <TwoComponent /> */}
      {/* <Home title={title}/>
      <Home title={title}/>
      <Home title={title}/> */}
    </Layout>
  )
}