// Функция активации аккордеона

export const accordeonActive = (button, item) => {
  const btns = document.querySelectorAll(button);
  const items = document.querySelectorAll(item);
  btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      for (let i = 0; i < items.length; i++) {
        if (index === i) {
          items[i].classList.toggle('accordion__item_active');
        } else {
          items[i].classList.remove('accordion__item_active');
        }
      }
    });
  });
};
