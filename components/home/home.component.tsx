import React, { useEffect } from 'react';
import { TimelineMax as Timeline, Power1, gsap } from 'gsap';
import styles from './home.module.scss';
import { InternalLink} from '../PageLink';
import ROUTES from '../Routes';
import OverflowContainer from '../containers/container.hidden';

interface props {
  title: string | JSX.Element;
}

export function Home({title}: props): JSX.Element {
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

  return (
    <div className={`${styles.main}`} ref={nodeHome}>
      <div className={styles.main__inner}>
        <div className={styles.main__inner__header}>
        <span className={styles.main__inner__header__name}>
          { name }
        </span> 
        <OverflowContainer wrapperRef={nodeTitle} containerType={'h2'}>
          { title }
        </OverflowContainer>
        </div>
        <OverflowContainer containerType='paragraph'>
        { summary }
      </OverflowContainer>
      <div className={styles.link}>
        <InternalLink 
          route={ROUTES.ABOUT} 
          wrapperRef={nodeLink} 
        >
          {linkText}
        </InternalLink>
      </div>  
      </div>
      <InternalLink 
        route={ROUTES.CONTACT} 
        wrapperRef={nodeLink} 
        classOverrides={styles.home__contact}
      >
        Get In Touch
      </InternalLink>
      
    </div>
  )
}
