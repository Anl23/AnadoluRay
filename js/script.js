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
const themeButtons = document.querySelectorAll(".theme-toggle");


themeButtons.forEach(button => {

    button.addEventListener("click", ()=>{


        document.body.classList.toggle("dark");


        if(document.body.classList.contains("dark")){

            localStorage.setItem("theme","dark");

        }else{

            localStorage.setItem("theme","light");

        }


    });

});



// Kayıtlı tema varsa onu kullan
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {

    document.body.classList.toggle("dark", savedTheme === "dark");

} else {

    // İlk girişte cihaz temasını kullan
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {

        document.body.classList.add("dark");

    }

}
