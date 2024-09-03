const btnTheme = document.querySelector('.btn-theme');
const btnBg = document.querySelector('.block-theme__bg');
const inp = document.querySelector('.culc-body__form-inp');
const iconSun = document.querySelector('#sun');
const iconMoon = document.querySelector('#moon');
const culcBody = document.querySelector('.culc-body');
const blockTheme = document.querySelector('.block-theme');
const blockBtns = document.querySelector('.culc-body__form-btns');
const btns = document.querySelector('.btns-block');
const btnsColumn = document.querySelector('.btns-operations__column');

btnTheme.addEventListener('click', () => {
    btnBg.classList.toggle('dark');
    inp.classList.toggle('dark-inp');
    iconSun.classList.toggle('sun-path__dark');
    iconMoon.classList.toggle('moon-path__dark');
    culcBody.classList.toggle('dark-body');
    blockTheme.classList.toggle('block-theme__dark');
    blockBtns.classList.toggle('form-btns__dark');
    btns.classList.toggle('dark-btn');
    btnsColumn.classList.toggle('dark-btn');
})



