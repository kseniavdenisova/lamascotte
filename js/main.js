// Імпорт
import { initMenu } from './menu.js';
import { initPageUpdates, showFooterDate } from './DOM.js';
import { initCarousel } from './interactive.js';
import { initThemeToggle } from './theme.js';
import { initUserEvents } from './event.js';
import {
    initValidation,
    initLoginValidation,
    initContactValidation,
    initPartnersValidation } from './validation.js';

// Запуск
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    initMenu();

    initPageUpdates();
    showFooterDate();
    initCarousel();

    initUserEvents();

    initValidation();
    initLoginValidation();
    initContactValidation();
    initPartnersValidation();
});

