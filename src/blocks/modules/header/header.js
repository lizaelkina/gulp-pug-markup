const menuList = document.querySelectorAll('.menu__item');
menuList.forEach(menuItem => {
  const url = menuItem.getAttribute('href').substring(1);
  if (window.location.href.endsWith(url)) {
    menuItem.classList.add('menu__item_active');
  }
});
