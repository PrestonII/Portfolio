import React, { useEffect } from 'react';
import Link from 'next/link';
import { TimelineMax as Timeline, Power1, gsap } from 'gsap';
import styles from './pagelink.module.scss';
import { ContainerType, OverflowHiddenParagraph } from './containers/container.hidden';
import { IconArrow } from './icons/Icon.arrow';

interface PageLinkProps<T> extends ContainerType<T> {
  route: string;
}

export const ExternalLink: React.FC<PageLinkProps<HTMLAnchorElement>> = (props) => (
  <div className={`${styles.pagelink}`}>
    <a href={props.route} ref={props.ref}>{props.children}</a>
  </div>
);

export const InternalLink: React.FC<PageLinkProps<HTMLParagraphElement>> = (props) => {
  const outline = React.createRef<HTMLDivElement>();

  return (
    <div ref={outline} className={`${styles.link} ${props.classOverrides}`}>
      <Link href={props.route}>
        <div className={styles.link__inner}>
          <OverflowHiddenParagraph ref={props.ref} classOverrides={styles.pagelink}>{props.children}</OverflowHiddenParagraph>
          <IconArrow direction='NE' />
        </div>
      </Link>
    </div>
  );
};
