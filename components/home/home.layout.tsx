import React from 'react';
import Layout from '../Layout';
import { Home } from './home.main';
import DesignHome from './home.design';
import DevelopHome from './home.develop';
import styles from './home.module.scss';
import useScrollToAnchor from '../sidebar/hooks/useScrollToAnchor';
import ContactHome from './home.contact';

export default function HomeLayout(): JSX.Element {
  const title = 'Design Engineer';
  const headingText2 = <div className="">SITE IS UNDER MAINTENANCE</div>;
  const heading = <div className={styles.home__title}>{headingText2}</div>;
  const { anchorRef: homeRef, scrollToAnchor: homeScroll } =
    useScrollToAnchor();
  const { anchorRef: designRef, scrollToAnchor: designScroll } =
    useScrollToAnchor();
  const { anchorRef: devRef, scrollToAnchor: devScroll } = useScrollToAnchor();
  const { anchorRef: contactRef, scrollToAnchor: contactScroll } =
    useScrollToAnchor();

  const list = {
    Home: homeScroll,
    Design: designScroll,
    Develop: devScroll,
    Contact: contactScroll,
  };

  return (
    <Layout title={`Preston Smith | ${title}`} navMethodList={list}>
      <Home title={heading} anchorRef={homeRef} onContact={contactScroll} />
      {/* <DesignHome anchorRef={designRef} />
      <DevelopHome anchorRef={devRef} />
      <ContactHome anchorRef={contactRef} /> */}
    </Layout>
  );
}
