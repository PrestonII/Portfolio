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
    const link = document.querySelectorAll('.home > .link')[0];
    const timeline = new Timeline({paused: true});

    timeline
      .from(home, { display: 'none', opacity: 0, ease: Power1.easeOut }, 0)
      .from(title, { display: 'none', opacity: 0, y: 50, ease: Power1.easeOut, duration: 1 }, 1)
      .from(link, { display: 'none', opacity: 0, y: 50, ease: Power1.easeOut, duration: .5 }, 2);

    // gsap
      // .from(home, { display: 'none', opacity: 0, ease: Power1.easeOut }, 0)
      // .from(title, { display: 'none', opacity: 0, y: 50, ease: Power1.easeOut, duration: 1 }, 1)
      // .from(nodeLink.current, { y: -20, delay: 1, duration: 1 });

    timeline.play();
  }, [])

  return (
    <div className={`${styles.main} home`}>
      <h1>{title}</h1>
      <PageLinkWithHiddenText route={ROUTES.ABOUT} text="What's That?" ref={nodeLink} />
    </div>
  )
}
