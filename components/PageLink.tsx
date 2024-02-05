import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import styles from './pagelink.module.scss';
import OverflowHiddenParagraph, {
  ContainerProps,
  getWrapper,
} from './containers/container.hidden';
import { Arrow } from './icons/Arrow';
import Link from 'next/link';

interface PageLinkProps extends ContainerProps {
  route?: string;
  onClick?: () => void;
  preventProceeding?: boolean;
  openNewTab?: boolean;
}

export const ExternalLink: React.FC<PageLinkProps> = (props) => (
  <span className={`${styles.pagelink}`} style={props.style}>
    {getWrapper({
      containerType: 'anchor',
      children: props.children,
      wrapperRef: props.wrapperRef,
      linkSrc: props.route,
      style: props.style,
    })}
  </span>
);

export const InternalLink: React.FC<
  Omit<PageLinkProps, 'containerType'> & {
    arrowColor?: React.CSSProperties['color'];
  }
> = (props) => {
  const router = useRouter();
  const outline = React.createRef<HTMLDivElement>();

  const onClick = useCallback(() => {
    console.log(props.onClick);
    props.onClick && props.onClick();
    if (!props.preventProceeding && props.route) router.push(props.route);
  }, [props, router]);

  return (
    <Link
      className={`${styles.link} ${props.classOverrides}`}
      style={props.style}
      href={props.route || '/'}
      target={props.openNewTab ? '_blank' : undefined}
    >
      <div className={styles.link__inner}>
        <OverflowHiddenParagraph
          containerType="paragraph"
          wrapperRef={props.wrapperRef}
          classOverrides={styles.pagelink}
        >
          {props.children}
        </OverflowHiddenParagraph>
        <Arrow direction="NE" color={props.arrowColor} />
      </div>
    </Link>
  );
};
