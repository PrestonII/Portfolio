import React from 'react';
import Layout from '../Layout';
import { Home } from './home.component';
import DesignHome from './home.design';
import DevelopHome from './home.develop';
import styles from './home.module.scss';

export default function HomeLayout(): JSX.Element {
  const title = 'FullStack Designer & Developer';
  const headingText1 = (
    <div className="">
      A <span>Developer</span> that also <span>Designs</span> and{' '}
      <span>Builds</span>
    </div>
  );
  const headingText2 = (
    <div className="">
      A <span>Developer</span> that can also <span>Design</span> product
    </div>
  );
  const heading = <div className={styles.home__title}>{headingText1}</div>;

  return (
    <Layout title={`Preston Smith | ${title}`}>
      <Home title={heading} />
      <DesignHome />
      <DevelopHome />
    </Layout>
  );
}
