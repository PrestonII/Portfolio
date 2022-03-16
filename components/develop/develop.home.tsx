import OverflowHiddenContainer from "../containers/container.hidden";
import FacetTitle from "../facets/facet.title";
import { InternalLink } from "../PageLink";
import styles from './develop.module.scss';
import DevelopStub from "./develop.stub";
import { ReactComponent as IconNimble } from '../assets/Icon_Nimble_Dev.svg';
import { ReactComponent as IconPG } from '../assets/Icon_PG_Dev.svg';
import { ReactComponent as IconTether } from '../assets/Icon_Tether_Dev.svg';
import { ReactComponent as IconDev } from '../assets/ICON_DEV.svg';

const DevelopHome: React.FC = () => {
  const title = `Things I've Developed`;
  const msg = `A big part of my job is wiring things up together. I love using digital tools to compose all the things I (or others) have designed. It's another way I can explore how things work and bring them together.`
  const nimble = {
    icon: (<IconNimble />),
    title: "Nimble",
    route: "/work/nimble",
    details: ["Front-End", "Back-End", "CI/CD"],
    description: "Lacinia suspendisse malesuada et massa, sed ipsum tellus. Nisi ullamcorper urna, sed diam donec id eu id nisi. Adipiscing massa ante at posuere id eget."
  }
  const program_generator = {
    icon: (<IconPG />),
    title: "Program Generator",
    route: "/work/pg",
    details: ["Front-End", "Back-End", "Databases"],
    description: "Lacinia suspendisse malesuada et massa, sed ipsum tellus. Nisi ullamcorper urna, sed diam donec id eu id nisi. Adipiscing massa ante at posuere id eget."
  }
  const piper = {
    icon: (<IconTether />),
    title: "Tether",
    route: "/work/tether",
    details: ["Front-End"],
    description: "Lacinia suspendisse malesuada et massa, sed ipsum tellus. Nisi ullamcorper urna, sed diam donec id eu id nisi. Adipiscing massa ante at posuere id eget."
  }

  return (
    <div className={styles.develop}>
      <div className={styles.develop__title}>
        <FacetTitle title="Design" icon={<IconDev/>} />
        <OverflowHiddenContainer containerType="h2">
          { title }
        </OverflowHiddenContainer>
        <OverflowHiddenContainer containerType="paragraph">
          { msg }
        </OverflowHiddenContainer>
        <InternalLink route="/work/design" classOverrides={styles.develop__link}>
          Thoughts On Development
        </InternalLink>
      </div>
      <div className={styles.develop__projects}>
        <DevelopStub {...nimble} />
        <DevelopStub {...program_generator} />
        <DevelopStub {...piper} />
      </div>
    </div>
  )
}

export default DevelopHome;