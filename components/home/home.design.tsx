import OverflowHiddenContainer from "../containers/container.hidden";
import FacetTitle from "../facets/facet.title";
import { InternalLink } from "../PageLink";
import styles from './home.module.scss';

const DesignHome: React.FC = () => {
  const title = `Things I've Designed`;
  const msg = `I like working through the process of thinking about how things will look & feel. The idea of aesthetics as a semantic language is something that continues to inspire me.`

  return (
    <div className={styles.design}>
      <div className={styles.design__title}>
        <FacetTitle title="Design" />
        <OverflowHiddenContainer containerType="h2">
          { title }
        </OverflowHiddenContainer>
        <OverflowHiddenContainer containerType="paragraph">
          { msg }
        </OverflowHiddenContainer>
        <InternalLink route="/work/design" >
          More Design Work
        </InternalLink>
      </div>
      <div className={styles.design__projects}></div>
    </div>
  )
}

export default DesignHome;