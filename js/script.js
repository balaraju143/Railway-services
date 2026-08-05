/*==========================================
GLOBAL SCRIPT
==========================================*/

const menuToggle = document.querySelector(".menu-toggle");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".mobile-overlay");
const body = document.body;


/*==========================================
OPEN MENU
==========================================*/

function openMenu() {

    mobileMenu.classList.add("active");
    overlay.classList.add("active");
    menuToggle.classList.add("active");

    body.style.overflow = "hidden";

}


/*==========================================
CLOSE MENU
==========================================*/

function closeMenu() {

    mobileMenu.classList.remove("active");
    overlay.classList.remove("active");
    menuToggle.classList.remove("active");

    body.style.overflow = "";

}


/*==========================================
TOGGLE MENU
==========================================*/

menuToggle?.addEventListener("click", () => {

    if (mobileMenu.classList.contains("active")) {

        closeMenu();

    } else {

        openMenu();

    }

});


/*==========================================
OVERLAY CLICK
==========================================*/

overlay?.addEventListener("click", closeMenu);


/*==========================================
MENU LINK CLICK
==========================================*/

document.querySelectorAll(".mobile-menu a").forEach(link => {

    link.addEventListener("click", closeMenu);

});


/*==========================================
ESC KEY
==========================================*/

document.addEventListener("keydown", e => {

    if (e.key === "Escape") {

        closeMenu();

    }

});

/*==========================================
LOADER
==========================================*/

window.addEventListener("load",()=>{

    const loader=document.getElementById("loader");

    setTimeout(()=>{

        loader.classList.add("hide");

    },2800);

});




/*==========================================
ACTIVE NAVIGATION
==========================================*/

const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll(".nav-links a").forEach(link => {

    const href = link.getAttribute("href");

    if (href === currentPage ||

        (currentPage === "" && href === "index.html")) {

        document
            .querySelectorAll(".nav-links a")
            .forEach(a => a.classList.remove("active"));

        link.classList.add("active");

    }

});


/*==========================================
SMOOTH SCROLL
==========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const target = document.querySelector(

            this.getAttribute("href")

        );

        if(target){

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});


/*==========================================
SCROLL REVEAL
==========================================*/

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{

    threshold:.15

});

document.querySelectorAll(".reveal").forEach(el=>{

    observer.observe(el);

});


/*==========================================
SCROLL TOP
==========================================*/

const scrollTop = document.querySelector(".scroll-top");

if(scrollTop){

    scrollTop.addEventListener("click",e=>{

        e.preventDefault();

        window.scrollTo({

            top:0,

            behavior:"smooth"

        });

    });

}