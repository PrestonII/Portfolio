import React, { useEffect } from 'react';
// import * as Greensock from 'gsap';
import { TimelineMax as Timeline, Power1, gsap } from 'gsap';
import styles from './home.module.scss';
import PageLink, { PageLinkWithHiddenText} from '../PageLink';
import ROUTES from '../Routes';

interface props {
  title: string;
}

export function Home({title}: props) {
  const nodeHome = React.createRef<HTMLDivElement>();
  const nodeTitle = React.createRef<HTMLHeadingElement>();
  const nodeLink = React.createRef<HTMLAnchorElement>();

  useEffect(() => {
    const home = document.querySelectorAll('.home')[0];
    const title = document.querySelectorAll('.home > h1')[0];
    const link = document.querySelectorAll('.overflow__hidden')[0];
    const timeline = new Timeline({paused: true});

    console.log(link);

    timeline
      .from(home, { display: 'none', opacity: 0, ease: Power1.easeOut }, 0)
      .from(title, { display: 'none', opacity: 0, y: 50, ease: Power1.easeOut, duration: 1 }, 1)
      .from(link, { display: 'none', opacity: 0, y: 50, duration: .5 }, 1.5);

    // gsap.from(nodeHome.current, { opacity: 0, duration: .5 })
    // gsap.from(nodeTitle.current, { opacity: 0, y: 50, ease: Power1.easeOut, duration: 1, delay: .5 })
    // gsap.from(nodeLink.current, { y: -20, delay: 1, duration: 1 });

    timeline.play();
  }, [])

  return (
    <div className={`${styles.main} home`}>
      {/* <div className={`${styles.overflow__hidden}`}> */}
        <h1>{title}</h1>
      {/* </div> */}
      <PageLinkWithHiddenText route={ROUTES.ABOUT} text="What's That?" ref={nodeLink} />
    </div>
  )
}
