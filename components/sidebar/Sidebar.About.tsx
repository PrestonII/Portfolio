import React, { ReactNode, useState } from 'react';
import { SidebarIcon } from './SidebarIcon';
import styles from './sidebar.module.scss';
import OverflowContainer from '../containers/container.hidden';
import useResizeObserver from 'use-resize-observer';

export interface ISidebar {
  children?: ReactNode;
  title?: string;
  sectionTitle?: string;
}

type IHistoryPoint = {
  top: number;
  text: string;
};

const HistoryPoint: React.FC<IHistoryPoint> = (props) => {
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
      <div className={styles.history__dot} style={{}} />
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

const PointTimeline: React.FC<{ height: number }> = (props) => {
  const now = new Date().getFullYear();
  const start = 2010;
  const careerLength = now - start;
  const history = {
    START: start,
    '2012': 2012,
    '2015': 2015,
    '2017': 2017,
    '2019': 2019,
    '2020': 2020,
    NOW: now,
  };
  const points = Object.values(history);
  const careerPts = points.map((pt) => ((now - pt) / careerLength) * 100);
  const events = careerPts.map((point, idx) => (
    <HistoryPoint key={idx} top={point} text={Object.keys(history)[idx]} />
  ));

  return (
    <div
      className={styles.timeline__wrapper}
      style={{ height: props.height, top: '12vh', display: 'none' }}
    >
      {events}
    </div>
  );
};

const SidebarAbout = () => {
  const [timelineHeight, setTimelineHeight] = useState(500);
  const { ref } = useResizeObserver<HTMLDivElement>({
    onResize: ({ height }) => {
      height && setTimelineHeight(height);
    },
  });

  return (
    <header className={styles.bar}>
      <nav>
        <div className={styles.icon}>
          <SidebarIcon />
        </div>
        <div className={styles.line} ref={ref} />
        <PointTimeline height={timelineHeight} />
      </nav>
      <div className={styles.place}>
        <p>ABOUT</p>
      </div>
    </header>
  );
};

export default SidebarAbout;
