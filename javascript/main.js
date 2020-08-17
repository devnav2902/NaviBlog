const toggleMenu = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const icon_menu = document.getElementById('icon-menu');
const icon_search = document.querySelector('.icon-search');
const icon_exit = document.querySelector('.icon-exit');
const icon_cancel = document.querySelector('.icon-cancel');
const icon_toggle = document.querySelector('.icon-toggle');
const search = document.querySelector('.search-content');
const icon_mode = document.querySelector('.icon-mode');
const icon_change_mode = document.querySelector('.icon-change-mode');


toggleMenu.addEventListener('click',() => {
    menu.classList.remove('hide-div');
    changeIcon(icon_toggle,'icon-align-justify','icon-align-center');
});

icon_cancel.addEventListener('click',() => {
    menu.classList.add('hide-div');
    changeIcon(icon_toggle,'icon-align-justify','icon-align-center');
})


icon_search.addEventListener('click',() => {
    search.classList.add('show');
})

icon_change_mode.addEventListener('click',() => {
    changeIcon(icon_mode,'icon-moon1','icon-sun1');

    const htmlTag = document.getElementsByTagName('html')[0];

    if(htmlTag.getAttribute('data-theme') === null){
        htmlTag.setAttribute('data-theme','dark');
    }
    else {
        htmlTag.removeAttribute('data-theme');
    }
})

icon_exit.addEventListener('click',() => {
    search.classList.remove('show');
})

function changeIcon(element,beforeIcon,afterIcon) {
    const icon = element.getAttribute('xlink:href');
    const pos_icon_start = icon.indexOf('icon');
    const icon_name = icon.slice(pos_icon_start);

    if(icon_name !== `${beforeIcon}`) {
        element.setAttribute('xlink:href',`img/SVG/symbol.svg#${beforeIcon}`);
    }
    else {
        element.setAttribute('xlink:href',`img/SVG/symbol.svg#${afterIcon}`);
    }
}

