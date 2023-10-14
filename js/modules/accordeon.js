// Функция активации аккордеона

export const accordeonActive = (button, item) => {
  const btns = document.querySelectorAll(button);

  btns.forEach((btn, index) => {
    btn.addEventListener('click', (e) => {
      const target = e.target;
      target.closest(item).classList.toggle('accordion__item_active');
    });
  });
};
