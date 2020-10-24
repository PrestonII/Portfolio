import Link from 'next/link'
import Layout from '../../components/Layout'
import React from 'react';

export default function Home() {
  const title = "FullStack Designer & Developer"

  return (
    <Layout title={`Preston Smith | ${title}`}>
      <h1>{title}</h1>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  )
}