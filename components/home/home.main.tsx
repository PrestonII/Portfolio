import React from 'react';
import styles from './home.module.scss';
import { ExternalLink, InternalLink } from '../PageLink';
import ROUTES from '../Routes';
import OverflowContainer from '../containers/container.hidden';

interface props {
  title: string | JSX.Element;
  anchorRef: React.RefObject<HTMLDivElement>;
  onContact: () => void;
}

export function Home({ title, anchorRef, onContact }: props): JSX.Element {
  const nodeTitle = React.createRef<HTMLHeadingElement>();
  const nodeLink = React.createRef<HTMLParagraphElement>();
  const name = 'Preston Smith';
  const linkText = 'More About Me';
  const canoaSupply = (
    <ExternalLink route="https://www.canoa.supply/" containerType="paragraph">
      <b style={{ fontSize: 18 }}>Canoa Supply</b>
    </ExternalLink>
  );
  const hlw = (
    <ExternalLink route="https://www.hlw.design/" containerType="paragraph">
      <b style={{ fontSize: 18 }}>HLW</b>
    </ExternalLink>
  );

  const summary = (
    <>
      Preston is a software developer operating out of New York City.
      <br />
      <br />
      He's been working on revamping this site since <b>2020</b> but promises
      that, for sure, <b>2024</b> will be his year. Previously, he worked some
      really awesome teams like {canoaSupply}, {hlw} and a host of smaller teams
      building niche tools in the BIM space.
      <br />
      <br />
      He's had a very weird career - click the link below to find out more or
      reach out for a chat
    </>
  );

  return (
    <div className={`${styles.main}`} ref={anchorRef}>
      <div className={styles.main__inner}>
        <div className={styles.main__inner__header}>
          <span className={styles.main__inner__header__name}>{name}</span>
          <OverflowContainer wrapperRef={nodeTitle} containerType={'h2'}>
            {title}
          </OverflowContainer>
        </div>
        <OverflowContainer containerType="paragraph">
          {summary}
        </OverflowContainer>
        <div className={styles.link}>
          <InternalLink route={ROUTES.ABOUT} wrapperRef={nodeLink}>
            {linkText}
          </InternalLink>
        </div>
      </div>
    </div>
  );
}
