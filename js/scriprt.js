import {accordeonActive} from './modules/accordeon.js';
import {callsModal, closeModal} from './modules/openCloseModal.js';
import elements from './modules/elementsPage.js';

const {btnOpenModal, overlayModal} = elements;
const init = () => {
  accordeonActive(
      '.accordion__title',
      '.accordion__item',
  );
  callsModal(btnOpenModal, overlayModal);
  closeModal(overlayModal);
};

init();
