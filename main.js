 document.querySelector('.switcher-btn').onclick = () => {
    document.querySelector('.color-switcher').classList.toggle('active');
};

let themebuttons = document.querySelectorAll('.theme-buttons');
themebuttons.forEach(color => {
    color.addEventListener('click', () => {
        let datacolor = color.getAttribute('data-color');
    document.querySelector(':root').style.setProperty('--main-color',datacolor);
    })

});