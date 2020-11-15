import React from 'react';
import styles from './container.module.scss';

interface OverflowProps {
  children: JSX.Element;
}

interface OverflowAnchorProps {
  text: string;
}

const OverflowHiddenContainer = ({children}: OverflowProps) => (
  <div className={`${styles.overflow} ${styles.overflow__hidden} overflow overflow__hidden`}>
    { children }
  </div>
)

export const OverflowHiddenAnchor = React.forwardRef((props: OverflowAnchorProps, ref: React.Ref<HTMLAnchorElement>) => {
  return (
    <div className={`${styles.overflow} ${styles.overflow__hidden} overflow overflow__hidden`}>
      <a ref={ref}>{props.text}</a>
    </div>
  )
})

export default OverflowHiddenContainer;
