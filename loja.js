console.log("javascript funcionando")

let botaoSidebar = document.getElementById("botao-sidebar")
let sidebar = document.getElementById("sidebar");

botaoSidebar.addEventListener("click", function(){
    console.log("botão clicado")
    sidebar.classList.toggle("aberta")
botaoSidebar.classList.toggle("aberta")});
