document.addEventListener("DOMContentLoaded", () => {

    let currentPage = window.location.pathname.split("/").pop();

    document.querySelectorAll(".menu-link").forEach(link => {

        let linkPage = link.getAttribute("href").split("/").pop();

        if (currentPage === linkPage) {
            link.classList.add("active");
        }

    });

});
