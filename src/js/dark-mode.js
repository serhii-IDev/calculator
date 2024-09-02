const btnTheme = document.querySelector('.btn-theme');
const btnBg = document.querySelector('.block-theme__bg');
const iconSun = document.querySelector('#sun');
const iconMoon = document.querySelector('#moon');
const culcBody = document.querySelector('.culc-body');
const blockTheme = document.querySelector('.block-theme');
const blockBtns = document.querySelector('.culc-body__form-btns');
const btns = document.querySelectorAll('div.culc-body__form-btns > button');

btnTheme.addEventListener('click', () => {
    btnBg.classList.toggle('dark');
    iconSun.classList.toggle('sun-path__dark');
    iconMoon.classList.toggle('moon-path__dark');
    culcBody.classList.toggle('dark-body');
    blockTheme.classList.toggle('block-theme__dark');
    blockBtns.classList.toggle('form-btns__dark');
    btns.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('__dark');
        })
    })
})

