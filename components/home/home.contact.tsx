import React from 'react';
import styles from './home.module.scss';
import { ExternalLink } from '../PageLink';
import OverflowContainer from '../containers/container.hidden';

const ContactHome: React.FC<{
  anchorRef: React.RefObject<HTMLDivElement>;
}> = ({ anchorRef }) => {
  const nodeTitle = React.createRef<HTMLHeadingElement>();
  const name = 'Get In Touch';
  const contactText = 'Write Me An Email';
  const title = `Let's Work On Something Together`;

  const summary = (
    <>
      I love talking about new projects and if I can't find a way to help you,
      I'll certainly point you to someone in my network who can. <br />
      <br /> Reaching out to me via email typically gets the fastest response -
      try it below.
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
          <ExternalLink
            containerType="anchor"
            route="mailto:prestonmakesstuff@gmail.com?subject=Hi!"
          >
            {contactText}
          </ExternalLink>
        </div>
      </div>
      <div className={styles.home__links}>
        <ExternalLink
          route="https://www.linkedin.com/in/prestonsmithbim/"
          containerType="anchor"
        >
          LinkedIn
        </ExternalLink>
        <ExternalLink
          route="https://twitter.com/prestonthemaker"
          containerType="anchor"
        >
          Twitter
        </ExternalLink>
        <ExternalLink
          route="https://www.instagram.com/preston_makes_stuff/"
          containerType="anchor"
        >
          Instagram
        </ExternalLink>
      </div>
    </div>
  );
};

export default ContactHome;
