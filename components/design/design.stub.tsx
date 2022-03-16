import OverflowHiddenContainer from '../containers/container.hidden';
import { InternalLink } from '../PageLink';
import styles from './design.module.scss';

type StubType = {
  route: string;
  icon: JSX.Element;
  title: string;
  details?: string[];
  description: string;

}

const DesignStub: React.FC<StubType> = (props) => {
  const details = props.details?.map((detail, idx) => <OverflowHiddenContainer key={idx} containerType='subtitle'>{detail}</OverflowHiddenContainer>)

  return (
    <div className={styles.stub}>
      <div className={styles.stub__icon}>
        { props.icon }
      </div>
      <div className={styles.stub__title}>
        <OverflowHiddenContainer containerType='h3'>
          { props.title}
        </OverflowHiddenContainer>
      </div>
      <div className={styles.stub__details}>
          { details}
        </div>
      <div className={styles.stub__description}>
        <OverflowHiddenContainer containerType='paragraph'>
          { props.description}
        </OverflowHiddenContainer>
      </div>
      <InternalLink route={props.route} classOverrides={styles.stub__link}>
        See The Work
      </InternalLink>
    </div>
  )
}

export default DesignStub;