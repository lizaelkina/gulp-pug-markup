const body = document.querySelector('.root');
const page = document.querySelector('.page');
const menu = page.querySelector('.nav');
const overlay = page.querySelector('.nav__overlay');
const buttonOpenMenu = page.querySelector('.header__burger');
const buttonCloseMenu = menu.querySelector('.nav__button');

function openMenu() {
  menu.classList.add('nav_opened');
  overlay.classList.add('nav__overlay_opened');
  body.classList.add('root__menu-open');
  document.addEventListener('keydown', closeMenuByEsc);
}

function closeMenu() {
  menu.classList.remove('nav_opened');
  overlay.classList.remove('nav__overlay_opened');
  body.classList.remove('root__menu-open');
  document.addEventListener('keydown', closeMenuByEsc);
}

function closeMenuByEsc(event) {
  if(event.key === 'Escape') {
    menu.querySelector('.menu_opened');
    closeMenu();
  }
}

buttonOpenMenu.addEventListener('click', openMenu);

buttonCloseMenu.addEventListener('click', closeMenu);

menu.addEventListener('mousedown', (event) => {
  if (event.target === menu) {
    closeMenu(menu);
  }
});
