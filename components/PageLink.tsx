import React, { useEffect } from 'react';
import Link from 'next/link';
import { TimelineMax as Timeline, Power1, gsap } from 'gsap';
import styles from './pagelink.module.scss';
import { OverflowHiddenAnchor, OverflowHiddenParagraph } from './containers/container.hidden';


interface PageLinkProps {
  route: string;
  text: string;
}

interface LinkRefProps extends PageLinkProps {
  ref: React.Ref<HTMLAnchorElement>
}

const PageLink = ({route, text}: PageLinkProps) => (
  <p className={`${styles.pagelink} link`}>
    <Link href={route}>
      <a>{text}</a>
    </Link>
  </p>
);

export const PageLinkWithRef = React.forwardRef((props: PageLinkProps, ref: React.Ref<HTMLAnchorElement>) => (
  <div className={`${styles.pagelink} link`}>
    <Link href={props.route}>
      <a ref={ref}>{props.text}</a>
    </Link>
  </div>
));

export const PageLinkWithHiddenText = React.forwardRef((props: PageLinkProps, ref: React.Ref<HTMLParagraphElement>) => {
  const outline = React.createRef<HTMLDivElement>();
  // const red = '#EB5757';

  // useEffect(() => {
  //   const timeline = new Timeline({paused: true});

  //   // timeline
  //   //   .to(outline.current, { textDecorationLine: 'underline', textDecorationColor: red, textDecorationStyle: '.25rem' });

  //   timeline.play();

  // }, [outline])

  return (
    <div className={`${styles.pagelink} link`} ref={outline}>
      <Link href={props.route}>
        <OverflowHiddenParagraph text={props.text} ref={ref}/>
      </Link>
    </div>
  );
});

export default PageLink;