import { Modal, ModalHeader, ModalBody } from 'carbon-components-react';

type ProprietaryModalType = {
  visible?: boolean
}

const ProprietaryModal: React.FC<ProprietaryModalType> = (props) => {
  return (
    <Modal size="sm" open={props.visible}>
      <ModalHeader />
      <ModalBody>
        <p className="bx--modal-content__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          cursus fermentum risus, sit amet fringilla nunc pellentesque quis. Duis
          quis odio ultrices, cursus lacus ac, posuere felis. Donec dignissim libero
          in augue mattis, a molestie metus vestibulum. Aliquam placerat felis
          ultrices lorem condimentum, nec ullamcorper felis porttitor.
        </p>
      </ModalBody>
    </Modal>
  )
}

export default ProprietaryModal;