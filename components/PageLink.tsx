import React, { useEffect } from 'react';
import Link from 'next/link';
import { TimelineMax as Timeline, Power1, gsap } from 'gsap';
import styles from './pagelink.module.scss';
import  OverflowHiddenParagraph, { ContainerProps, getWrapper } from './containers/container.hidden';
import { IconArrow } from './icons/Icon.arrow';

interface PageLinkProps extends ContainerProps {
  route: string;
}

export const ExternalLink: React.FC<PageLinkProps> = (props) => (
  <div className={`${styles.pagelink}`}>
    { getWrapper({containerType: 'anchor', children: props.children, wrapperRef: props.wrapperRef, linkSrc: props.route})}
  </div>
);

export const InternalLink: React.FC<Omit<PageLinkProps, 'containerType'>> = (props) => {
  const outline = React.createRef<HTMLDivElement>();

  return (
    <div ref={outline} className={`${styles.link} ${props.classOverrides}`} style={props.style} >
      <Link href={props.route}>
        <div className={styles.link__inner}>
          <OverflowHiddenParagraph containerType='paragraph' wrapperRef={props.wrapperRef} classOverrides={styles.pagelink}>{props.children}</OverflowHiddenParagraph>
          <IconArrow direction='NE' />
        </div>
      </Link>
    </div>
  );
};
