import React, {CSSProperties} from 'react';
import styles from './container.module.scss';

export type OverridableStyling = {
  classOverrides?: string;
  style?: CSSProperties;
}

export type ContainerType<T> = OverridableStyling & {
  ref?: React.Ref<T>
}

const OverflowHiddenContainer: React.FC = (props) => (
  <div className={`${styles.overflow} ${styles.overflow__hidden}`}>
    { props.children }
  </div>
);

export const OverflowHiddenAnchor = React.forwardRef((props: React.PropsWithChildren<unknown>, ref: React.Ref<HTMLAnchorElement>) => {
  return (
    <div className={`${styles.overflow} ${styles.overflow__hidden} overflow overflow__hidden`}>
      <a ref={ref}>{props.children}</a>
    </div>
  )
});

export const OverflowHiddenParagraph: React.FC<ContainerType<HTMLParagraphElement>> = (
  props
) => (
  <div className={`${styles.overflow} ${styles.overflow__hidden} ${styles.text__override} ${props.classOverrides}`} style={props.style}>
    <p ref={props.ref}>{props.children}</p>
  </div>
);

export const OverflowHiddenHeaderOne: React.FC<ContainerType<HTMLHeadingElement>> = (props) => (
    <div className={`${styles.overflow} ${styles.overflow__hidden} ${styles.text__override} ${props.classOverrides}`} style={props.style}>
      <h1 ref={props.ref}>{props.children}</h1>
    </div>
  );

export const OverflowHiddenHeaderTwo: React.FC<ContainerType<HTMLHeadingElement>> = (props) => (
    <div className={`${styles.overflow} ${styles.overflow__hidden} ${styles.text__override} ${props.classOverrides}`} style={props.style}>
      <h2 ref={props.ref}>{props.children}</h2>
    </div>
  );


export default OverflowHiddenContainer;
