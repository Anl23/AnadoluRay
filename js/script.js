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


// Tema sistemi

const themeButtons = document.querySelectorAll(".theme-toggle");


function updateThemeIcon(){

    themeButtons.forEach(button=>{

        if(document.body.classList.contains("dark")){

            button.textContent = "☀️";

        }else{

            button.textContent = "🌙";

        }

    });

}



themeButtons.forEach(button => {

    button.addEventListener("click", ()=>{


        document.body.classList.toggle("dark");


        if(document.body.classList.contains("dark")){

            localStorage.setItem("theme","dark");

        }else{

            localStorage.setItem("theme","light");

        }


        updateThemeIcon();


    });

});




// Kayıtlı tema varsa kullan

const savedTheme = localStorage.getItem("theme");


if(savedTheme){

    document.body.classList.toggle("dark", savedTheme === "dark");


}else{


    // Cihaz temasını kullan

    if(window.matchMedia("(prefers-color-scheme: dark)").matches){

        document.body.classList.add("dark");

    }


}


// Açılışta ikonu ayarla

updateThemeIcon();
