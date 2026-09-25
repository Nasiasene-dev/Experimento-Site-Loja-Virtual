
let botaoSidebar = document.getElementById("botao-sidebar")
let sidebar = document.getElementById("sidebar");
let iconeSidebar = document.getElementById("icone-sidebar")

botaoSidebar.addEventListener("click", function(){

    console.log("botão clicado")

    sidebar.classList.toggle("aberta")
    botaoSidebar.classList.toggle("aberta")

    if (botaoSidebar.classList.contains("aberta")) {

        iconeSidebar.classList.remove("bi-caret-left-square")
        iconeSidebar.classList.add("bi-x-circle")

    } else {

        iconeSidebar.classList.remove("bi-x-circle")
        iconeSidebar.classList.add("bi-caret-left-square")

    }

});


