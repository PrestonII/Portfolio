import React from 'react';
import styles from './ScrollingText.module.scss';

type ScrollingTextProps = {
  content?: JSX.Element;
  className?: string;
  classNameText?: string;
  style?: React.CSSProperties;
  direction?: 'horizontal' | 'vertical';
};

const ScrollingText: React.FC<ScrollingTextProps> = ({
  content = 'Your text goes here',
  className,
  classNameText,
  style,
  direction = 'horizontal',
}) => {
  return (
    <div className={`${styles.container} ${className}`} style={style}>
      <div className={`${styles.text} ${styles[direction]} ${classNameText}`}>
        {content}
      </div>
    </div>
  );
};

export default ScrollingText;
