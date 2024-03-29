import React, { CSSProperties, useEffect, useState } from 'react';
import styles from './container.module.scss';

export type OverridableStyling = {
  classOverrides?: string;
  style?: CSSProperties;
};

type ContainerType =
  | 'div'
  | 'paragraph'
  | 'anchor'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'subtitle';

type WrapperProps = {
  containerType?: ContainerType;
  wrapperRef?: React.Ref<unknown>;
  linkSrc?: string;
} & OverridableStyling;

export type ContainerProps = WrapperProps & {
  hidden?: boolean;
  startHidden?: boolean;
  showOnHover?: boolean;
  onClick?: () => void;
};

export const getWrapper = ({
  containerType,
  children,
  wrapperRef: ref,
  linkSrc,
  style,
}: React.PropsWithChildren<WrapperProps>): JSX.Element => {
  let wrapper = (
    <div
      style={{ color: 'inherit', ...style }}
      ref={ref as React.Ref<HTMLDivElement>}
    >
      {children}
    </div>
  );

  switch (containerType) {
    case 'anchor':
      wrapper = (
        <a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={linkSrc}
          target="_blank"
        >
          {children}
        </a>
      );
      break;
    case 'div':
      wrapper = (
        <div
          style={{ color: 'inherit' }}
          ref={ref as React.Ref<HTMLDivElement>}
        >
          {children}
        </div>
      );
      break;
    case 'h1':
      wrapper = <h1 ref={ref as React.Ref<HTMLHeadingElement>}>{children}</h1>;
      break;
    case 'h2':
      wrapper = <h2 ref={ref as React.Ref<HTMLHeadingElement>}>{children}</h2>;
      break;
    case 'h3':
      wrapper = <h3 ref={ref as React.Ref<HTMLHeadingElement>}>{children}</h3>;
      break;
    case 'paragraph':
      wrapper = <p ref={ref as React.Ref<HTMLParagraphElement>}>{children}</p>;
      break;
    case 'subtitle':
      wrapper = <span ref={ref as React.Ref<HTMLSpanElement>}>{children}</span>;
      break;
    default:
      break;
  }

  return wrapper;
};

const OverflowHiddenContainer: React.FC<ContainerProps> = (props) => {
  const wrapper = getWrapper(props);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    setHidden(props.startHidden ?? false);
  }, [props.startHidden]);

  useEffect(() => {
    setHidden(props.hidden ?? false);
  }, [props.hidden]);

  const onHover = () => {
    if (!props.showOnHover) return;
    setHidden(false);
  };

  const onLeave = () => {
    if (!props.showOnHover) return;
    setHidden(true);
  };

  return (
    <div
      className={`${styles.overflow} ${styles.overflow__hidden} ${styles.text__override} ${props.classOverrides}`}
      style={props.style}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={props.onClick}
    >
      {hidden ? undefined : wrapper}
    </div>
  );
};

export default OverflowHiddenContainer;
