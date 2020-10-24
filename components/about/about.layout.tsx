import React from 'react';
import Layout from '../Layout';
import About from './about.component';

const AboutLayout = () => {
  const title = 'I Used To Be An Architect, Now I Build Software';

  return (
    <Layout title="Preston Smith | About">
      <About 
        title={title}
        sectionTitle={'Now'}
      />
    </Layout>
  )
}

export default AboutLayout;