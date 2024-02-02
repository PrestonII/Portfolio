import React, { ReactNode, useState } from 'react';
import { SidebarIcon } from './SidebarIcon';
import OverflowContainer from '../containers/container.hidden';
import useResizeObserver from 'use-resize-observer';
import { ReactComponent as IconDesign } from '../assets/ICON_DESIGN.svg';
import { ReactComponent as IconDev } from '../assets/ICON_DEV.svg';
import styles from './sidebar.module.scss';
import { InternalLink } from '../PageLink';
import ScrollingText from '../ScrollingText';
import { Arrow } from '../icons/Arrow';

export interface ISidebar {
  children?: ReactNode;
  title?: string;
  sectionTitle?: string;
}

type TimelinePointType = {
  top: number;
  text: string;
  icon?: JSX.Element;
  onClick: () => void;
};

export type AnchorNavigationType = {
  navMethodList: Record<string, () => void>;
};

const TimelinePoint: React.FC<TimelinePointType> = (props) => {
  const [hidden, setHidden] = useState(true);
  const onHover = () => setHidden(false);
  const onLeave = () => setHidden(true);

  return (
    <div
      className={styles.history}
      style={{ top: `${props.top}%`, left: '50%' }}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      onClick={props.onClick}
    >
      {props.icon ?? <div className={styles.history__dot} />}
      <OverflowContainer
        containerType="anchor"
        classOverrides={styles.history__text}
        startHidden
        showOnHover
        hidden={hidden}
      >
        {props.text}
      </OverflowContainer>
    </div>
  );
};

const TimelinePointList: React.FC<
  {
    height: number;
  } & AnchorNavigationType
> = (props) => {
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
    <TimelinePoint
      key={idx}
      top={point}
      text={Object.keys(career)[idx]}
      onClick={props.navMethodList[Object.keys(career)[idx]]}
    />
  ));

  return (
    <div className={styles.timeline__wrapper} style={{ height: props.height }}>
      {events}
    </div>
  );
};

const HomeSidebar: React.FC<AnchorNavigationType> = (props) => {
  const [timelineHeight, setTimelineHeight] = useState(500);
  const { ref } = useResizeObserver<HTMLDivElement>({
    onResize: ({ height }) => {
      height && setTimelineHeight(height);
    },
  });

  const contactText = 'Get In Touch';

  return (
    <header className={styles.bar} ref={ref}>
      <nav>
        <div className={styles.icon}>
          <SidebarIcon onNavHome={props.navMethodList['Home']} />
        </div>
        <div className={styles.line} ref={ref} />
        <TimelinePointList
          height={timelineHeight}
          navMethodList={props.navMethodList}
        />
      </nav>
      <div className={styles.place}>
        <p>HOME</p>
      </div>
      <div className={styles.footer}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            color: '#fcf8eb',
          }}
        >
          <ScrollingText
            style={{ color: '#fcf8eb' }}
            direction="vertical"
            content={<Arrow direction={'S'} color={'#fcf8eb'} />}
          />
          <div className="">Scroll For More</div>
        </div>

        <InternalLink
          route="mailto:prestonmakesstuff@gmail.com?subject=Hi!"
          arrowColor={`#fcf8eb`}
        >
          {contactText}
        </InternalLink>
      </div>
    </header>
  );
};

export default HomeSidebar;
