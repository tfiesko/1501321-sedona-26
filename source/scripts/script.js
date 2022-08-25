let mainNav = document.querySelector('.main-nav');
let mainNavToggle = mainNav.querySelector('.main-nav__toggle');

mainNav.classList.remove('main-nav--nojs');

mainNavToggle.addEventListener('click', ()=> {
  if(mainNav.classList.contains('main-nav--close')) {
    mainNav.classList.remove('main-nav--close');
    mainNav.classList.add('main-nav--open');
  }

  else {
    mainNav.classList.remove('main-nav--open');
    mainNav.classList.add('main-nav--close');
  }
});
