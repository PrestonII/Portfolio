import ProjectStub from '../project/project.stub';
import { ReactComponent as IconNimble } from '../assets/Icon_Nimble.svg';
import { ReactComponent as IconPG } from '../assets/Icon_PG.svg';
import { ReactComponent as IconPiper } from '../assets/Icon_Piper.svg';
import { ReactComponent as IconDesign } from '../assets/ICON_DESIGN.svg';
import PageHeader from '../page/PageHeader';
import styles from './subhome.module.scss';
import icons from '../about/about.module.scss';

const DesignHome: React.FC<{
  anchorRef: React.RefObject<HTMLDivElement>;
}> = (props) => {
  const headerType = 'Design';
  const title = `Things I've Designed`;
  const msg = (
    <>
      Most of my work is influenced by my architectural background and is
      focused on a systematic approach to problem solving. That said, the
      process of thinking through how things will look & feel is my favorite
      part of design.
    </>
  );
  const nimble = {
    icon: <IconNimble className={icons.about__icons__uniformStroke__first} />,
    title: 'Nimble',
    route: '/work/nimble',
    details: ['UX Design', 'UI Design'],
    description:
      'A product focused on making it easier to use Revit, decreasing the time it takes you to get from an idea to finished product.',
  };
  const program_generator = {
    icon: <IconPG />,
    title: 'Parcel',
    route: '/work/pg',
    details: ['Language'],
    description:
      'A visual language created to describe projects I work on with forms. Inspired by minimalist iconography and my previous architectural background.',
  };
  const piper = {
    icon: <IconPiper />,
    title: 'Piper',
    route: '/work/piper',
    details: ['Language', 'UI Design', 'Motion'],
    description:
      'A mobile app that helps users understand actions that they can take to ensure projects they build have less impact on the environment.',
  };

  return (
    <div className={styles.subhome} ref={props.anchorRef}>
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
