import ProjectStub from '../project/project.stub';
import { ReactComponent as IconNimble } from '../assets/Icon_Nimble.svg';
import { ReactComponent as IconPG } from '../assets/Icon_PG.svg';
import { ReactComponent as IconPiper } from '../assets/Icon_Piper.svg';
import { ReactComponent as IconDesign } from '../assets/ICON_DESIGN.svg';
import styles from './subhome.module.scss';
import PageHeader from '../page/PageHeader';

const DesignHome: React.FC = () => {
  const headerType = 'Design';
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
    <div className={styles.subhome}>
      <div className={styles.subhome__wrapper}>
        <PageHeader
          {...{
            title,
            msg,
            headerType,
            icon: <IconDesign />,
            linkText: 'Thoughts On Design',
            linkClassOverrides: styles.subhome__link,
            classOverrides: styles.subhome__title,
          }}
        />
        <div className={styles.subhome__projects}>
          <ProjectStub {...nimble} userHasAccess />
          <ProjectStub {...program_generator} />
          <ProjectStub {...piper} />
        </div>
      </div>
    </div>
  );
};

export default DesignHome;
