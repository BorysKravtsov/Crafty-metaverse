import { initBurgerMenu } from './functions/burgerMenu.js';
import { initMenuItems } from './functions/menuItems.js';
import { initSmoothScroll } from './functions/smoothScroll.js';
import { initHeaderScroll } from './functions/headerScroll.js';
import { initChapterItemHover } from './functions/chapterItemHover.js';
import { initSectionObserver } from './functions/sectionObserver.js';
import { initBlockToggle } from './functions/blockToggle.js';
import { initListOpener } from './functions/listOpener.js';
import { initMediaSwiper } from './functions/mediaSwiper.js';

document.addEventListener('DOMContentLoaded', () => {
  initBurgerMenu();
  initMenuItems();
  initSmoothScroll();
  initHeaderScroll();
  initChapterItemHover();
  initSectionObserver();
  initListOpener();
  initMediaSwiper();
  initBlockToggle();
});
