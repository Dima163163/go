import {accordeonActive} from './modules/accordeon.js';
import {callsModal, closeModal} from './modules/openCloseModal.js';
import elements from './modules/elementsPage.js';
import {callsMenu, closeMenu, animationMenu} from './modules/burger.js';
import formValidation from './modules/formValidation.js';
import slider from './modules/slider.js';


const {
  btnOpenModal,
  overlayModal,
  itemsAcc,
  buttonsAcc,
  accTextWrapper,
  btnBurger,
  burgerMenuOverlay,
  burgerMenu,
  modalInputName,
  modalInputTel,
} = elements;

const init = () => {
  accordeonActive(
      itemsAcc,
      buttonsAcc,
      accTextWrapper,
  );
  slider();
  callsModal(btnOpenModal, overlayModal);
  closeModal(overlayModal);
  callsMenu(btnBurger, burgerMenuOverlay);
  closeMenu(btnBurger, burgerMenuOverlay);
  formValidation(modalInputName, modalInputTel);
  animationMenu(btnBurger, burgerMenu);
};

init();
