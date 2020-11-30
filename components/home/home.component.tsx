import React, { useEffect } from 'react';
// import * as Greensock from 'gsap';
import { TimelineMax as Timeline, Power1, gsap } from 'gsap';
import styles from './home.module.scss';
import PageLink, { PageLinkWithHiddenText} from '../PageLink';
import ROUTES from '../Routes';
import { OverflowHiddenAnchor, OverflowHiddenHeaderOne, OverflowHiddenParagraph } from '../containers/container.hidden';

interface props {
  title: string;
}

export function Home({title}: props) {
  const nodeHome = React.createRef<HTMLDivElement>();
  const nodeTitle = React.createRef<HTMLHeadingElement>();
  const nodeLink = React.createRef<HTMLParagraphElement>();

  useEffect(() => {
    const timeline = new Timeline({paused: true});

    console.log(nodeLink.current);

    timeline
      .from(nodeHome.current, { display: 'none', opacity: 0, ease: Power1.easeOut }, 0)
      .from(nodeTitle.current, { display: 'none', opacity: 0, y: 50, ease: Power1.easeOut, duration: .5 }, 1)
      .from(nodeLink.current, { display: 'none', opacity: 0, y: 150, duration: .5 }, 1.5);

    timeline.play();

  }, [])

  return (
    <div className={`${styles.main} home`} ref={nodeHome}>
      <OverflowHiddenHeaderOne text={title} ref={nodeTitle} />
      <PageLinkWithHiddenText route={ROUTES.ABOUT} text="What's That?" ref={nodeLink} />
    </div>
  )
}
