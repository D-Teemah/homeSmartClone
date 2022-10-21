
const navBtn = document.querySelector('#menu');
const menuBar = document.querySelector('[role="menubar"]');

navBtn.addEventListener('click', () => {
    const isExpanded = navBtn.getAttribute('aria-expanded');
    navBtn.setAttribute('aria-expanded', !isExpanded);
    menuBar.classList.toggle('hidden');
    menuBar.classList.toggle('flex');
})