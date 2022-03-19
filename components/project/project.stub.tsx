import { useEffect, useState } from 'react';
import OverflowHiddenContainer from '../containers/container.hidden';
import { ProprietaryWorkLink } from '../modals/ProprietaryInfo';
import styles from './project.module.scss';

type StubType = {
  route: string;
  icon: JSX.Element;
  title: string;
  details?: string[];
  description: string;
  userHasAccess?: boolean;
};

const ProjectStub: React.FC<StubType> = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [userHasAccess, setUserHasAccess] = useState(false);

  useEffect(() => {
    setUserHasAccess(props.userHasAccess ?? false);
  }, [props.userHasAccess]);

  const details = props.details?.map((detail, idx) => (
    <OverflowHiddenContainer
      key={idx}
      containerType="subtitle"
      classOverrides={styles.stub__details__item}
    >
      {detail}
    </OverflowHiddenContainer>
  ));

  return (
    <div className={styles.stub}>
      <div className={styles.stub__icon}>{props.icon}</div>
      <div className={styles.stub__title}>
        <OverflowHiddenContainer containerType="h3">
          {props.title}
        </OverflowHiddenContainer>
      </div>
      <div className={styles.stub__details}>{details}</div>
      <div className={styles.stub__description}>
        <OverflowHiddenContainer containerType="paragraph">
          {props.description}
        </OverflowHiddenContainer>
      </div>
      <ProprietaryWorkLink
        route={props.route}
        visible={showModal}
        confirmAccess={() => setShowModal(true)}
        onClose={() => setShowModal(false)}
        onAccessConfirmed={() => setUserHasAccess(true)}
        userHasAccess={userHasAccess}
        classOverrides={styles.stub__link}
      />
    </div>
  );
};

export default ProjectStub;
