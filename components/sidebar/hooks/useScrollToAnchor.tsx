import React from 'react';

type ScrollToAnchorType = {
  anchorRef: React.RefObject<HTMLDivElement>;
  scrollToAnchor: () => void;
};

const useScrollToAnchor = (): ScrollToAnchorType => {
  const anchorRef = React.createRef<HTMLDivElement>();
  const scrollToAnchor = () => {
    anchorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return { anchorRef, scrollToAnchor };
};

export default useScrollToAnchor;
