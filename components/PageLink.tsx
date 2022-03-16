import React, { useCallback } from 'react';
// import Link from 'next/link';
import { Button } from 'carbon-components-react';
import { useRouter } from 'next/router';
import styles from './pagelink.module.scss';
import OverflowHiddenParagraph, {
  ContainerProps,
  getWrapper,
} from './containers/container.hidden';
import { IconArrow } from './icons/Icon.Arrow';

interface PageLinkProps extends ContainerProps {
  route: string;
  onClick?: () => void;
  preventProceeding?: boolean;
}

export const ExternalLink: React.FC<PageLinkProps> = (props) => (
  <div className={`${styles.pagelink}`}>
    {getWrapper({
      containerType: 'anchor',
      children: props.children,
      wrapperRef: props.wrapperRef,
      linkSrc: props.route,
    })}
  </div>
);

export const InternalLink: React.FC<Omit<PageLinkProps, 'containerType'>> = (
  props,
) => {
  const router = useRouter();
  const outline = React.createRef<HTMLDivElement>();

  const onClick = useCallback(() => {
    props.onClick && props.onClick();
    if (!props.preventProceeding) router.push(props.route);
  }, [props.preventProceeding]);

  return (
    <div
      ref={outline}
      className={`${styles.link} ${props.classOverrides}`}
      style={props.style}
      onClick={onClick}
    >
      <div
        className={styles.link__inner}
        onClick={() => console.log('clicked')}
      >
        <OverflowHiddenParagraph
          containerType="paragraph"
          wrapperRef={props.wrapperRef}
          classOverrides={styles.pagelink}
        >
          {props.children}
        </OverflowHiddenParagraph>
        <IconArrow direction="NE" />
      </div>
    </div>
  );
};
