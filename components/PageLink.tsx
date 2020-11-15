import React from 'react';
import Link from 'next/link';
import styles from './pagelink.module.scss';
import { OverflowHiddenAnchor } from './containers/container.hidden';


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
  <p className={`${styles.pagelink} link`}>
    <Link href={props.route}>
      <a ref={ref}>{props.text}</a>
    </Link>
  </p>
));

export const PageLinkWithHiddenText = React.forwardRef((props: PageLinkProps, ref: React.Ref<HTMLAnchorElement>) => (
  <p className={`${styles.pagelink} link`}>
    <Link href={props.route}>
      <OverflowHiddenAnchor text={props.text} ref={ref}/>
    </Link>
  </p>
));

export default PageLink;