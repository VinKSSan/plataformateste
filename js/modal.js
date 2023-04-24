const dropdown = document.querySelector('.dropdown')
const btn_drop = document.querySelector('.btn_quem')
const cabeça = document.querySelector('.cabeça')


function abrir_drop(event) {
    event.preventDefault()
    //event.stopPropagation()
    dropdown.classList.toggle('active')
}
function fechar_drop(event) {
    dropdown.classList.remove('active')
}
btn_drop.addEventListener('click' , abrir_drop)
cabeça.addEventListener('mouseleave' , fechar_drop)

