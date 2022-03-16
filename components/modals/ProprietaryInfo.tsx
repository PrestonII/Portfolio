import {
  ComposedModal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  TextInput,
} from 'carbon-components-react';
import { OverridableStyling } from '../containers/container.hidden';
import { InternalLink } from '../PageLink';
import styles from './ProprietaryInfo.module.scss';

type ProprietaryModalType = {
  visible?: boolean;
  onAccessConfirmed?: () => void;
  onClose: () => void;
};

const ProprietaryModal: React.FC<ProprietaryModalType> = (props) => {
  return (
    <ComposedModal
      size="xs"
      open={props.visible}
      onClose={props.onClose}
      containerClassName={styles.modal}
    >
      <ModalHeader
        closeModal={props.onClose}
        label="Proprietary Information"
        className={styles.modal__header}
      />
      <ModalBody className={styles.modal__content}>
        <span>
          This project is managed by a <b>Non-Disclosure Agreement</b>. Please
          enter the password to prove that you have access to view this
          project's details.
        </span>
        <TextInput
          id="modal-proprietary-input"
          data-modal-primary-focus
          labelText="Enter the password"
          className={styles.modal__input}
          type="password"
        />
      </ModalBody>
      <ModalFooter
        className={styles.modal__footer}
        primaryButtonText="Submit"
        primaryClassName={styles.modal__btn__primary}
      />
    </ComposedModal>
  );
};

type WorkLinkType = {
  route: string;
  userHasAccess: boolean;
  confirmAccess?: () => void;
} & OverridableStyling &
  ProprietaryModalType;

export const ProprietaryWorkLink: React.FC<WorkLinkType> = (props) => (
  <>
    <InternalLink
      onClick={props.userHasAccess ? undefined : props.confirmAccess}
      route={props.route}
      classOverrides={props.classOverrides}
      style={props.style}
      preventProceeding={!props.userHasAccess}
    >
      See The Work
    </InternalLink>
    <ProprietaryModal
      visible={props.visible}
      onAccessConfirmed={props.onAccessConfirmed}
      onClose={props.onClose}
    />
  </>
);

export default ProprietaryModal;
