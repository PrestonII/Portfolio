/* eslint-disable react/no-unescaped-entities */
import React, { useEffect } from 'react';
import { TimelineMax as Timeline, Power1, gsap } from 'gsap';
import styles from './home.module.scss';
import { InternalLink} from '../PageLink';
import ROUTES from '../Routes';
import { 
  OverflowHiddenAnchor, 
  OverflowHiddenHeaderOne, 
  OverflowHiddenHeaderTwo, 
  OverflowHiddenParagraph 
} from '../containers/container.hidden';

interface props {
  title: string | JSX.Element;
}

export function Home({title}: props) {
  const nodeHome = React.createRef<HTMLDivElement>();
  const nodeTitle = React.createRef<HTMLHeadingElement>();
  const nodeLink = React.createRef<HTMLParagraphElement>();
  const name = 'Preston Smith';
  const linkText = 'More About Me';
  const canoaSupply = (<b>Canoa Supply</b>)
  const summary = 
  <>
  I love making & learning to make things using both digital & physical tools. Currently, I'm working as a Senior Fullstack Developer helping to decarbonize the built environment with {canoaSupply}. 
  <br/>
  <br/>
  See more about my work by scrolling below or feel free to reach out for a chat.
  </>

  useEffect(() => {
    const timeline = new Timeline({paused: true});

    timeline
      .from(nodeHome.current, { display: 'none', opacity: 0, ease: Power1.easeOut }, 0)
      .from(nodeTitle.current, { display: 'none', opacity: 0, y: 50, ease: Power1.easeOut, duration: .5 }, 1)
      .from(nodeLink.current, { display: 'none', opacity: 0, y: 150, duration: .5 }, 1.5);

    timeline.play();
  }, [])

  return (
    <div className={`${styles.main}`} ref={nodeHome}>
      <div className={styles.main__inner}>
        <div className={styles.main__inner__header}>
        <span className={styles.main__inner__header__name}>
          { name }
        </span> 
        <OverflowHiddenHeaderTwo ref={nodeTitle}>
          { title }
        </OverflowHiddenHeaderTwo>
        </div>
        <OverflowHiddenParagraph>
        { summary }
      </OverflowHiddenParagraph>
      <div className={styles.link}>
        <InternalLink 
          route={ROUTES.ABOUT} 
          ref={nodeLink} 
        >
          {linkText}
        </InternalLink>
      </div>  
      </div>
      <InternalLink 
        route={ROUTES.CONTACT} 
        ref={nodeLink} 
        classOverrides={styles.home__contact}
      >
        Get In Touch
      </InternalLink>
      
    </div>
  )
}
