import OverflowHiddenContainer from '../containers/container.hidden';
import FacetTitle from '../facets/facet.title';
import { InternalLink } from '../PageLink';
import styles from './design.module.scss';
import DesignStub from './design.stub';
import { ReactComponent as IconNimble } from '../assets/Icon_Nimble.svg';
import { ReactComponent as IconPG } from '../assets/Icon_PG.svg';
import { ReactComponent as IconPiper } from '../assets/Icon_Piper.svg';
import { ReactComponent as IconDesign } from '../assets/ICON_DESIGN.svg';

const DesignHome: React.FC = () => {
  const title = `Things I've Designed`;
  const msg = `I like working through the process of thinking about how things will look & feel. The idea of aesthetics as a semantic language is something that continues to inspire me.`;
  const nimble = {
    icon: <IconNimble />,
    title: 'Nimble',
    route: '/work/nimble',
    details: ['UX Design', 'UI Design'],
    description:
      'Lacinia suspendisse malesuada et massa, sed ipsum tellus. Nisi ullamcorper urna, sed diam donec id eu id nisi. Adipiscing massa ante at posuere id eget.',
  };
  const program_generator = {
    icon: <IconPG />,
    title: 'Program Generator',
    route: '/work/pg',
    details: ['UI Design'],
    description:
      'Lacinia suspendisse malesuada et massa, sed ipsum tellus. Nisi ullamcorper urna, sed diam donec id eu id nisi. Adipiscing massa ante at posuere id eget.',
  };
  const piper = {
    icon: <IconPiper />,
    title: 'Piper',
    route: '/work/piper',
    details: ['UX Design', 'UI Design', 'Motion'],
    description:
      'Lacinia suspendisse malesuada et massa, sed ipsum tellus. Nisi ullamcorper urna, sed diam donec id eu id nisi. Adipiscing massa ante at posuere id eget.',
  };

  return (
    <div className={styles.design}>
      <div className={styles.design__wrapper}>
        <div className={styles.design__title}>
          <FacetTitle title="Design" icon={<IconDesign />} />
          <OverflowHiddenContainer containerType="h2">
            {title}
          </OverflowHiddenContainer>
          <OverflowHiddenContainer containerType="paragraph">
            {msg}
          </OverflowHiddenContainer>
          <InternalLink
            route="/work/design"
            classOverrides={styles.design__link}
          >
            Thoughts On Design
          </InternalLink>
        </div>
        <div className={styles.design__projects}>
          <DesignStub {...nimble} />
          <DesignStub {...program_generator} />
          <DesignStub {...piper} />
        </div>
      </div>
    </div>
  );
};

export default DesignHome;
