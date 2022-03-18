import React, { ReactNode, useLayoutEffect, useState } from 'react';
import { TimelineMax as Timeline } from 'gsap';
import { SidebarIcon } from './SidebarIcon';
import OverflowContainer from '../containers/container.hidden';
import useResizeObserver from 'use-resize-observer';
import { ReactComponent as IconDesign } from '../assets/ICON_DESIGN.svg';
import { ReactComponent as IconDev } from '../assets/ICON_DEV.svg';
import styles from './sidebar.module.scss';

export interface ISidebar {
  children?: ReactNode;
  title?: string;
  sectionTitle?: string;
}

type IHistoryPoint = {
  top: number;
  text: string;
  icon?: JSX.Element;
};

const TimelinePoint: React.FC<IHistoryPoint> = (props) => {
  const [hidden, setHidden] = useState(true);
  const onHover = () => setHidden(false);
  const onLeave = () => setHidden(true);

  return (
    <div
      className={styles.history}
      style={{ top: `${props.top}%`, left: '50%' }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {props.icon ?? <div className={styles.history__dot} />}
      <OverflowContainer
        containerType="anchor"
        classOverrides={styles.history__text}
        startHidden
        showOnHover
        hidden={hidden}
        linkSrc={`about/${props.text.toLocaleLowerCase()}`}
      >
        {props.text}
      </OverflowContainer>
    </div>
  );
};

const TimelinePointList: React.FC<{ height: number }> = (props) => {
  const outline = React.createRef<HTMLHeadElement>();

  useLayoutEffect(() => {
    const tl = new Timeline({ paused: true });

    tl.from(outline.current, {
      opacity: 0,
      delay: 2,
    });

    tl.play();
  }, []);

  const career = {
    Design: <IconDesign />,
    Develop: <IconDev />,
    Contact: <IconDev />,
  };
  const points = Object.values(career);
  const careerPts = points.map(
    (_, idx) => ((idx + 1) / (points.length + 1)) * 100,
  );
  const events = careerPts.map((point, idx) => (
    <TimelinePoint key={idx} top={point} text={Object.keys(career)[idx]} />
  ));

  return (
    <div className={styles.timeline__wrapper} style={{ height: props.height }}>
      {events}
    </div>
  );
};

const HomeSidebar = () => {
  const [timelineHeight, setTimelineHeight] = useState(500);
  const { ref } = useResizeObserver<HTMLDivElement>({
    onResize: ({ height }) => {
      height && setTimelineHeight(height);
    },
  });

  return (
    <header className={styles.bar} ref={ref}>
      <nav>
        <div className={styles.icon}>
          <SidebarIcon />
        </div>
        <div className={styles.line} ref={ref} />
        <TimelinePointList height={timelineHeight} />
      </nav>
      <div className={styles.place}>
        <p>HOME</p>
      </div>
    </header>
  );
};

export default HomeSidebar;
