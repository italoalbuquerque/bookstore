let icon = document.querySelector('i#icon')
let nav = document.querySelector('nav#nav')

function mudoutamanho () {
    if (window.innerWidth >= 695) {
        nav.style.display = 'flex'
    } else {
        nav.style.display = 'none'
    }
}

function clickmenu () {
    if (nav.style.display == 'flex') {
        nav.style.display = 'none'
    } else {
        nav.style.display = 'flex'
    }
}