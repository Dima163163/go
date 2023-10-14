// Функция активации аккордеона
export const accordeonActive = (buttons, itemsAcc, textWrap) => {
  let heightWrapper = 0;
  textWrap.forEach(elem => {
    if (heightWrapper < elem.scrollHeight) {
      heightWrapper = elem.scrollHeight;
    }
  });
  buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      for (let i = 0; i < itemsAcc.length; i++) {
        if (index === i) {
          textWrap[i].style.height =
          itemsAcc[i].classList.contains('accordion__item_active') ?
          '' : `${heightWrapper}px`;
          itemsAcc[i].classList.toggle('accordion__item_active');
        } else {
          itemsAcc[i].classList.remove('accordion__item_active');
          textWrap[i].style.height = '';
        }
      }
    });
  });
};
