import '../scss/style.scss';

const buttonNext = document.querySelector('.main__button');
const text = document.querySelector('.main__history-text_continue');
const body = document.querySelector('body');

// Разное кол-во текста по нажатию кнопки

buttonNext.addEventListener('click', function () {
  if (buttonNext.innerText === 'Читать далее') {
    text.classList.remove('display-none');
    buttonNext.innerText = 'Скрыть';
    buttonNext.classList.add('main__button_active');
  } else {
    text.classList.add('display-none');
    buttonNext.innerText = 'Читать далее';
    buttonNext.classList.remove('main__button_active');
  }
});

const buttonBrands = document.querySelector('.brands__button');
const brandsItemHide = document.querySelectorAll('.brands__item_hide');

// Разное кол-во брендов и услуг при разном расширении

const quantityBrands = function () {
  if (document.documentElement.clientWidth >= 1040) {
    brandsItemHide[0].classList.remove('brands__item_hide');
    brandsItemHide[1].classList.remove('brands__item_hide');
    deviceItemHide[0].classList.remove('device__item_hide');
  } else {
    brandsItemHide[0].classList.add('brands__item_hide');
    brandsItemHide[1].classList.add('brands__item_hide');
    deviceItemHide[0].classList.add('device__item_hide');
  }
  if (document.documentElement.clientWidth < 768) {
    var swiper = new swiper('.swiper', {
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }
};

const disabled = document.querySelector('.disabled');

const buttonMenu = document.querySelector('.button-round__menu');
const headerDesktop = document.querySelector('.header-desktop');

//Открытие модалки меню

buttonMenu.addEventListener('click', function () {
  headerDesktop.classList.remove('header-desktop_display-none');

  disabled.classList.remove('display-none');

  setTimeout(() => {
    headerDesktop.classList.add('header-desktop_opened');
  }, 1);
});

const buttonCall = document.querySelectorAll('.button-round__phone');
const modalCall = document.querySelector('.feedback_call');

//Открытие модалки звонка

for (let i = 0; i < buttonCall.length; i++) {
  buttonCall[i].addEventListener('click', function () {
    modalCall.classList.remove('display-none');
    headerDesktop.classList.remove('header-desktop_opened');
    setTimeout(() => {
      modalCall.classList.add('feedback_opened');
      headerDesktop.classList.add('header-desktop_display-none');
    }, 1);
    disabled.classList.remove('display-none');
    body.classList.add('scroll-hidden');
  });
}

const buttonMessage = document.querySelectorAll('.button-round__message');
const modalMessage = document.querySelector('.feedback_write');

//Открытие модалки сообщения

for (let i = 0; i < buttonMessage.length; i++) {
  buttonMessage[i].addEventListener('click', function () {
    modalMessage.classList.remove('display-none');
    headerDesktop.classList.remove('header-desktop_opened');
    setTimeout(() => {
      modalMessage.classList.add('feedback_opened');
      headerDesktop.classList.add('header-desktop_display-none');
    }, 1);
    disabled.classList.remove('display-none');
    body.classList.add('scroll-hidden');
  });
}

const buttonClose = document.querySelectorAll('.button-round__close');

//Закрытие модалок

for (let i = 0; i < buttonClose.length; i++) {
  buttonClose[i].addEventListener('click', function () {
    body.classList.remove('scroll-hidden');
    modalMessage.classList.remove('feedback_opened');
    modalCall.classList.remove('feedback_opened');
    headerDesktop.classList.remove('header-desktop_opened');

    setTimeout(() => {
      modalCall.classList.add('display-none');
      modalMessage.classList.add('display-none');
      disabled.classList.add('display-none');
      headerDesktop.classList.add('header-desktop_display-none');
    }, 300);
  });
}

// Количество элементов бренда по нажатию кнопки

buttonBrands.addEventListener('click', function () {
  if (buttonBrands.innerText.toLowerCase() === 'скрыть') {
    buttonBrands.innerText = 'Показать всё';
    buttonBrands.classList.remove('main__button_active');

    for (let i = 0; i < brandsItemHide.length; i++) {
      brandsItemHide[i].classList.add('brands__item_hide');
    }
  } else {
    buttonBrands.innerText = 'Скрыть';
    buttonBrands.classList.add('main__button_active');
    for (let i = 0; i < brandsItemHide.length; i++) {
      brandsItemHide[i].classList.remove('brands__item_hide');
    }
  }
});

const buttonDevice = document.querySelector('.device__button');
const deviceItemHide = document.querySelectorAll('.device__item_hide');

// Количество элементов услуг по нажатию кнопки

buttonDevice.addEventListener('click', function () {
  if (buttonDevice.innerText.toLowerCase() === 'скрыть') {
    buttonDevice.innerText = 'Показать всё';
    buttonDevice.classList.remove('main__button_active');

    for (let i = 0; i < deviceItemHide.length; i++) {
      deviceItemHide[i].classList.add('device__item_hide');
    }
  } else {
    buttonDevice.innerText = 'Скрыть';
    buttonDevice.classList.add('main__button_active');
    for (let i = 0; i < deviceItemHide.length; i++) {
      deviceItemHide[i].classList.remove('device__item_hide');
    }
  }
});

disabled.addEventListener('click', function () {
  body.classList.remove('scroll-hidden');
  modalMessage.classList.remove('feedback_opened');
  modalCall.classList.remove('feedback_opened');
  headerDesktop.classList.remove('header-desktop_opened');

  setTimeout(() => {
    modalCall.classList.add('display-none');
    modalMessage.classList.add('display-none');
    disabled.classList.add('display-none');
    headerDesktop.classList.add('header-desktop_display-none');
  }, 300);
});

//Свайпер

quantityBrands();
window.addEventListener('resize', quantityBrands);
