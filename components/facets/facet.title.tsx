import OverflowHiddenContainer from "../containers/container.hidden";
import styles from './FacetTitle.module.scss';

type CareerFacetTitleType = {
  title: string;
}

const CareerFacetTitle: React.FC<CareerFacetTitleType> = (props) => (
  <div className={styles.facet}>
    <span className={styles.facet__title} />
    <OverflowHiddenContainer containerType="subtitle">
      {props.title}
    </OverflowHiddenContainer>
  </div>
)

export default CareerFacetTitle;