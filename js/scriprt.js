import {accordeonActive} from './modules/accordeon.js';
import {callsModal, closeModal} from './modules/openCloseModal.js';
import elements from './modules/elementsPage.js';
import {callsMenu, closeMenu, animationMenu} from './modules/burger.js';

const {
  btnOpenModal,
  overlayModal,
  itemsAcc,
  buttonsAcc,
  accTextWrapper,
  btnBurger,
  burgerMenuOverlay,
  burgerMenu,
} = elements;
const init = () => {
  accordeonActive(
      itemsAcc,
      buttonsAcc,
      accTextWrapper,
  );
  callsModal(btnOpenModal, overlayModal);
  closeModal(overlayModal);
  callsMenu(btnBurger, burgerMenuOverlay);
  closeMenu(btnBurger, burgerMenuOverlay);
  animationMenu(btnBurger, burgerMenu);
};

init();
