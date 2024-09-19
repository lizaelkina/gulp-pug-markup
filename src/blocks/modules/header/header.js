const menuList = document.querySelectorAll('.menu__item');
menuList.forEach(menuItem => {
  const url = menuItem.getAttribute('href');
  if (window.location.href.endsWith(url)) {
    menuItem.classList.add('menu__item_active');
  }
});
