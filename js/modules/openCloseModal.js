// Функция открытия / закрытия модального окна
const openCloseModal = (elemModal) => {
  elemModal.classList.toggle('is-visible');
};

// Вызов модального окна
export const callsModal = (btn, elemModal) => {
  btn.addEventListener('click', () => {
    openCloseModal(elemModal);
  });
};

// Закрытие модального окна
export const closeModal = (elemModal) => {
  elemModal.addEventListener('click', e => {
    const target = e.target;
    if (target === elemModal || target.closest('.modal-close')) {
      openCloseModal(elemModal);
    }
  });
};
