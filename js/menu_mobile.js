const btnmobile = document.querySelector(".btn-mobile")

const overlayMenu = document.querySelector('.js-overlay')

function famenu() {
    document.documentElement.classList.toggle('menu-abrir')
}



btnmobile.addEventListener('click' , famenu);
overlayMenu.addEventListener('click', famenu);

const dropdown2 = document.querySelector('.drop2')
const btn_drop2 =  document.querySelector('.quem2') 

function aFdrop2(event) {
    event.preventDefault()
    //event.stopPropagation()
    dropdown2.classList.toggle('active')
}

btn_drop2.addEventListener('click' , aFdrop2);