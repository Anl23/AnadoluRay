function openLine(element){

    let content = element.nextElementSibling;

    content.classList.toggle("active");

}


// Hamburger menü

const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");


if(menuToggle && sidebar){

    menuToggle.addEventListener("click", ()=>{

        sidebar.classList.toggle("active");

    });

}
