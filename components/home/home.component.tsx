import React, { useEffect } from 'react';
// import * as Greensock from 'gsap';
import { TimelineMax as Timeline, Power1, gsap } from 'gsap';
import styles from './home.module.scss';
import PageLink, { PageLinkWithHiddenText} from '../PageLink';
import ROUTES from '../Routes';
import { 
  OverflowHiddenAnchor, 
  OverflowHiddenHeaderOne, 
  OverflowHiddenHeaderTwo, 
  OverflowHiddenParagraph 
} from '../containers/container.hidden';

interface props {
  title: string;
}

export function Home({title}: props) {
  const nodeHome = React.createRef<HTMLDivElement>();
  const nodeTitle = React.createRef<HTMLHeadingElement>();
  const nodeLink = React.createRef<HTMLParagraphElement>();
  const name = 'Preston Smith';
  const summary = `
    Over the last 10 years I've made a career of tackling difficult challenges
     at the intersection of design and technology. With a background in architecture, 
     visual design and software development I've been able to take a unique 
     approach to problem solving that leads to incredible results. 
     I've also contributed to the industry by speaking about my work at 
     multiple industry conferences, including Autodesk University.
  `

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
      <h4>{ name }</h4>
      <OverflowHiddenHeaderTwo text={title} ref={nodeTitle} />
      <p>{ summary} </p>
      <PageLinkWithHiddenText route={ROUTES.ABOUT} text="What's That?" ref={nodeLink} />
    </div>
  )
}
