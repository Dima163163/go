// Функция открытия закрытия меню
const openCloseMenu = (btn, elemMenu) => {
  document.body.style.overflow =
    elemMenu.matches('.is-visible') ? '' : 'hidden';

  if (elemMenu.closest('.is-active')) {
    elemMenu.classList.remove('is-visible');
    btn.classList.toggle('header__menu_close');
    btn.classList.toggle('header__menu');
  } else {
    elemMenu.classList.toggle('is-visible');
    btn.classList.toggle('header__menu');
    btn.classList.toggle('header__menu_close');
    btn.style.cssText = `display: block;`;
  }
};

// Вызов бургер меню
export const callsMenu = (btn, elemMenu) => {
  btn.addEventListener('click', () => {
    openCloseMenu(btn, elemMenu);
  });
};

// Закрытие бургер меню
export const closeMenu = (btn, elemMenu) => {
  elemMenu.addEventListener('click', e => {
    const target = e.target;
    if (target === elemMenu || target.closest('.header__menu_close') ||
    target.closest('.burger-menu__link')) {
      openCloseMenu(btn, elemMenu);
    }
  });
};

// Функция анимации
const startAnimation = (duration, callback) => {
  let startAnimation = NaN;
  let requestId = NaN;
  requestId = requestAnimationFrame(function step(timestamp) {
    startAnimation ||= timestamp;
    const progress = (timestamp - startAnimation) / duration;

    callback(progress);
    if (progress < 1) {
      requestId = requestAnimationFrame(step);
    }
  });
};

// Запуск анимации
export const animationMenu = (btn, menuWrapper) => {
  const duration = 700;
  const distance = 20;
  btn.addEventListener('click', () => {
    startAnimation(duration, (progress) => {
      const bottom = progress * distance;
      menuWrapper.style.transform = `translateY(${bottom}px)`;
    });
  });
};

