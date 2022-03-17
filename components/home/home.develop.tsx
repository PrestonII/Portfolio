import ProjectStub from '../project/project.stub';
import { ReactComponent as IconNimble } from '../assets/Icon_Nimble_Dev.svg';
import { ReactComponent as IconPG } from '../assets/Icon_PG_Dev.svg';
import { ReactComponent as IconTether } from '../assets/Icon_Tether_Dev.svg';
import { ReactComponent as IconDev } from '../assets/ICON_DEV.svg';
import styles from './subhome.module.scss';
import PageHeader from '../page/PageHeader';

const DevelopHome: React.FC = () => {
  const headerType = 'Development';
  const title = `Things I've Developed`;
  const msg = `A big part of my job is wiring things together with code. I love using digital tools to compose all the things I (or others) have designed. It's another way I can explore how things work and bring them together.`;
  const nimble = {
    icon: <IconNimble />,
    title: 'Nimble',
    route: '/work/nimble',
    details: ['Front-End', 'Back-End', 'CI/CD'],
    description:
      'Lacinia suspendisse malesuada et massa, sed ipsum tellus. Nisi ullamcorper urna, sed diam donec id eu id nisi. Adipiscing massa ante at posuere id eget.',
  };
  const program_generator = {
    icon: <IconPG />,
    title: 'Program Generator',
    route: '/work/pg',
    details: ['Front-End', 'Back-End', 'Databases'],
    description:
      'Lacinia suspendisse malesuada et massa, sed ipsum tellus. Nisi ullamcorper urna, sed diam donec id eu id nisi. Adipiscing massa ante at posuere id eget.',
  };
  const piper = {
    icon: <IconTether />,
    title: 'Tether',
    route: '/work/tether',
    details: ['Front-End'],
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
            icon: <IconDev />,
            linkText: 'Thoughts On Development',
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

export default DevelopHome;
