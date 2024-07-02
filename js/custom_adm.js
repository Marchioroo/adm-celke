// Dropdown Navbar
let notification = document.querySelector(".notification");
let avatar = document.querySelector(".avatar");

dropMenu(avatar);
dropMenu(notification);

function dropMenu(selector) {
    //console.log(selector);
    selector.addEventListener("click", () => {
        let dropdownMenu = selector.querySelector(".dropdown-menu");
        dropdownMenu.classList.contains("active") ? dropdownMenu.classList.remove("active") : dropdownMenu.classList.add("active");
    });
}

// Sidebar Toggle / bars
let sidebar = document.querySelector(".sidebar");
let bars = document.querySelector(".bars");

bars.addEventListener("click", () => {
    sidebar.classList.contains("active") ? sidebar.classList.remove("active") : sidebar.classList.add("active");
});

window.matchMedia("(max-width: 768px)").matches ? sidebar.classList.remove("active") : sidebar.classList.add("active");
// Fim do Sidebar Toggle / bars


// inicio do botão dropdown listar
function actionDropdown(id){
    closeDropdownAction();
    document.getElementById("action-dropdown" + id).classList.toggle("show-dropdown-action");
}

// Essa função faz fechar o show-drop quando a pessoa clicar fora 
window.onclick = function(event){
    if(!event.target.matches(".dropdown-action-btn")){
        closeDropdownAction();
    }
}
//Essa funcao aqui, faz com que se na funcao de cima for acionada, ele vai verificar se tem o show-dropdow ativo
// e vai remove-lo
function closeDropdownAction(){
    var dropdowns = document.getElementsByClassName("dropdown-action-item");
    var i;
    for(i = 0; i < dropdowns.length; i++){
        var openDropdown = dropdowns[i];
        if(openDropdown.classList.contains("show-dropdown-action")){
            openDropdown.classList.remove("show-dropdown-action");
        }

    }
}

// Fim do botão dropdown listar