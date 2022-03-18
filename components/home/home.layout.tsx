import React from 'react';
import Layout from '../Layout';
import { Home } from './home.main';
import DesignHome from './home.design';
import DevelopHome from './home.develop';
import styles from './home.module.scss';
import useScrollToAnchor from '../sidebar/hooks/useScrollToAnchor';

export default function HomeLayout(): JSX.Element {
  const title = 'Design Engineer';
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
  const heading = <div className={styles.home__title}>{headingText2}</div>;
  const {
    anchorRef: homeRef,
    scrollToAnchor: homeScroll,
  } = useScrollToAnchor();
  const {
    anchorRef: designRef,
    scrollToAnchor: designScroll,
  } = useScrollToAnchor();
  const { anchorRef: devRef, scrollToAnchor: devScroll } = useScrollToAnchor();

  const list = { Home: homeScroll, Design: designScroll, Develop: devScroll };

  return (
    <Layout title={`Preston Smith | ${title}`} navMethodList={list}>
      <Home title={heading} anchorRef={homeRef} />
      <DesignHome anchorRef={designRef} />
      <DevelopHome anchorRef={devRef} />
    </Layout>
  );
}
