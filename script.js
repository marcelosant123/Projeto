function toggleMode() {
   const html = document.documentElement
    html.classList.toggle("light")
   //pegar a imagem
   const img = document.querySelector("#profile img")

   //substituir a imagem
   if(html.classList.contains('light')){
   //se tiver light mode adicionar a imagemC
   img.setAttribute('src', './assets/avatar-light.png')
  } else {
    //se não tiver light mode manter a imagem normal
     img.setAttribute('src', './assets/avatar.png') 
  } 
}