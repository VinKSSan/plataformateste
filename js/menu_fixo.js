const header = document.getElementById('header')

document.addEventListener('scroll' , (rolar) => {
   if (window.pageYOffset > 80) {
    header.classList.add('ativar') 
   } else {
    header.classList.remove('ativar')
   }

})