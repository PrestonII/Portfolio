import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import styles from './pagelink.module.scss';
import OverflowHiddenParagraph, {
  ContainerProps,
  getWrapper,
} from './containers/container.hidden';
import { Arrow } from './icons/Arrow';

interface PageLinkProps extends ContainerProps {
  route?: string;
  onClick?: () => void;
  preventProceeding?: boolean;
}

export const ExternalLink: React.FC<PageLinkProps> = (props) => (
  <span className={`${styles.pagelink}`}>
    {getWrapper({
      containerType: 'anchor',
      children: props.children,
      wrapperRef: props.wrapperRef,
      linkSrc: props.route,
    })}
  </span>
);

export const InternalLink: React.FC<Omit<PageLinkProps, 'containerType'>> = (
  props,
) => {
  const router = useRouter();
  const outline = React.createRef<HTMLDivElement>();

  const onClick = useCallback(() => {
    console.log(props.onClick);
    props.onClick && props.onClick();
    if (!props.preventProceeding && props.route) router.push(props.route);
  }, [props.preventProceeding, props.onClick]);

  return (
    <div
      ref={outline}
      className={`${styles.link} ${props.classOverrides}`}
      style={props.style}
      onClick={onClick}
    >
      <div className={styles.link__inner}>
        <OverflowHiddenParagraph
          containerType="paragraph"
          wrapperRef={props.wrapperRef}
          classOverrides={styles.pagelink}
        >
          {props.children}
        </OverflowHiddenParagraph>
        <Arrow direction="NE" />
      </div>
    </div>
  );
};
