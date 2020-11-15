import React from 'react';
import styles from './container.module.scss';

interface OverflowProps {
  children: JSX.Element;
}

interface OverflowAnchorProps {
  text: string;
}

interface OverflowHeaderProps {
  text: string;
}

const OverflowHiddenContainer = ({children}: OverflowProps) => (
  <div className={`${styles.overflow} ${styles.overflow__hidden} overflow overflow__hidden`}>
    { children }
  </div>
);

export const OverflowHiddenAnchor = React.forwardRef((props: OverflowAnchorProps, ref: React.Ref<HTMLAnchorElement>) => {
  return (
    <div className={`${styles.overflow} ${styles.overflow__hidden} overflow overflow__hidden`}>
      <a ref={ref}>{props.text}</a>
    </div>
  )
});

export const OverflowHiddenParagraph = React.forwardRef((props: OverflowAnchorProps, ref: React.Ref<HTMLParagraphElement>) => {
  return (
    <div className={`${styles.overflow} ${styles.overflow__hidden} overflow overflow__hidden`}>
      <p ref={ref}>{props.text}</p>
    </div>
  )
});

export const OverflowHiddenHeaderOne = React.forwardRef((props: OverflowHeaderProps, ref: React.Ref<HTMLHeadingElement>) => {
  return (
    <div className={`${styles.overflow} ${styles.overflow__hidden} overflow overflow__hidden`}>
      <h1 ref={ref}>{props.text}</h1>
    </div>
  )
});

export default OverflowHiddenContainer;
