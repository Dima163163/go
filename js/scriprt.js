import {accordeonActive} from './modules/accordeon.js';
import {callsModal, closeModal} from './modules/openCloseModal.js';
import elements from './modules/elementsPage.js';

const {
  btnOpenModal,
  overlayModal,
  itemsAcc,
  buttonsAcc,
  accTextWrapper,
} = elements;
const init = () => {
  accordeonActive(
      itemsAcc,
      buttonsAcc,
      accTextWrapper,
  );
  callsModal(btnOpenModal, overlayModal);
  closeModal(overlayModal);
};

init();
