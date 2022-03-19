import OverflowHiddenContainer from '../containers/container.hidden';
import styles from './FacetTitle.module.scss';

type CareerFacetTitleType = {
  title: string;
  icon: JSX.Element;
};

const CareerFacetTitle: React.FC<CareerFacetTitleType> = (props) => (
  <div className={styles.facet}>
    {props.icon}
    <OverflowHiddenContainer
      containerType="subtitle"
      classOverrides={styles.facet__text}
    >
      {props.title}
    </OverflowHiddenContainer>
  </div>
);

export default CareerFacetTitle;
