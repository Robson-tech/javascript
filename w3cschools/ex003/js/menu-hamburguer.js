const menu = document.getElementById('menu-hamburguer')

function escondeMenu() {
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
}

menu.addEventListener('click', escondeMenu)