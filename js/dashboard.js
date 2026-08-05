/*=====================================
        RAILWAY CUSTOMER DASHBOARD
======================================*/

document.addEventListener("DOMContentLoaded",()=>{

/*=====================================
        ELEMENTS
======================================*/

const menuToggle=document.getElementById("menuToggle");

const sidebar=document.getElementById("sidebar");

const closeSidebar=document.getElementById("closeSidebar");

const sidebarOverlay=document.getElementById("sidebarOverlay");

const menuLinks=document.querySelectorAll(".sidebar-menu a");

const pageSections=document.querySelectorAll(".page-section");

const searchInput=document.querySelector(".search-box input");

/*=====================================
        MOBILE SIDEBAR
======================================*/

if(menuToggle){

menuToggle.addEventListener("click",()=>{

    sidebar.classList.add("active");

    sidebarOverlay.classList.add("active");

});

}

if(closeSidebar){

closeSidebar.addEventListener("click",closeMenu);

}

if(sidebarOverlay){

sidebarOverlay.addEventListener("click",closeMenu);

}

function closeMenu(){

    sidebar.classList.remove("active");

    sidebarOverlay.classList.remove("active");

}

/*=====================================
        PAGE NAVIGATION
======================================*/

function showPage(hash){

    pageSections.forEach(section=>{

        section.classList.remove("active");

        section.style.display="none";

    });

    menuLinks.forEach(link=>{

        link.classList.remove("active");

    });

    const activePage=document.querySelector(hash);

    const activeLink=document.querySelector(

        `.sidebar-menu a[href="${hash}"]`

    );

    if(activePage){

        activePage.classList.add("active");

        activePage.style.display="block";

    }

    if(activeLink){

        activeLink.classList.add("active");

    }

}

/*=====================================
        DEFAULT PAGE
======================================*/

const defaultPage=window.location.hash || "#dashboard";

showPage(defaultPage);

/*=====================================
        MENU CLICK
======================================*/

menuLinks.forEach(link=>{

    link.addEventListener("click",function(e){

        const target=this.getAttribute("href");

        if(!target.startsWith("#")) return;

        e.preventDefault();

        history.replaceState(null,null,target);

        showPage(target);

        if(window.innerWidth<992){

            closeMenu();

        }

    });

});

/*=====================================
        HASH CHANGE
======================================*/

window.addEventListener("hashchange",()=>{

    showPage(window.location.hash);

});

/*=====================================
        CUSTOMER DETAILS
======================================*/

const customerName=

localStorage.getItem("customerName");

const customerEmail=

localStorage.getItem("customerEmail");

document.querySelectorAll(".customer-name")

.forEach(item=>{

    item.textContent=

    customerName ||

    "Customer Name";

});

document.querySelectorAll(".customer-email")

.forEach(item=>{

    item.textContent=

    customerEmail ||

    "customer@gmail.com";

});

/*=====================================
        USER LETTER
======================================*/

document.querySelectorAll(".user-letter")

.forEach(item=>{

    if(customerName){

        item.textContent=

        customerName.charAt(0)

        .toUpperCase();

    }

});

/*=====================================
        CURRENT DATE
======================================*/

const today=document.getElementById("currentDate");

if(today){

const options={

weekday:"long",

day:"numeric",

month:"long",

year:"numeric"

};

today.textContent=

new Date().toLocaleDateString(

"en-US",

options

);

}

/*=====================================
        SEARCH FILTER
======================================*/

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value=

searchInput.value.toLowerCase();

document.querySelectorAll(

".ticket-card,.journey-item,.document-card"

).forEach(card=>{

card.style.display=

card.innerText

.toLowerCase()

.includes(value)

?

"block"

:

"none";

});

});

}

});

/*=====================================
        COUNTER ANIMATION
======================================*/

const counters=document.querySelectorAll(

".stat-content h3,.summary-box h2,.summary-card h2"

);

function counterAnimation(counter){

    const target=parseInt(

        counter.textContent.replace(/\D/g,"")

    );

    if(isNaN(target)) return;

    let count=0;

    const speed=Math.ceil(target/80);

    function update(){

        count+=speed;

        if(count<target){

            counter.textContent=count;

            requestAnimationFrame(update);

        }

        else{

            counter.textContent=target;

        }

    }

    update();

}

/*=====================================
        COUNTER OBSERVER
======================================*/

const counterObserver=new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

counterAnimation(

entry.target

);

counterObserver.unobserve(

entry.target

);

}

});

},

{

threshold:.5

}

);

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*=====================================
        PROGRESS BAR
======================================*/

const progressBars=document.querySelectorAll(

".progress span"

);

const progressObserver=

new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const width=

entry.target.style.width;

entry.target.style.width="0";

setTimeout(()=>{

entry.target.style.width=width;

},300);

progressObserver.unobserve(

entry.target

);

}

});

},

{

threshold:.4

}

);

progressBars.forEach(bar=>{

bar.style.transition=

"width 1.5s ease";

progressObserver.observe(bar);

});

/*=====================================
        SCROLL REVEAL
======================================*/

const revealItems=document.querySelectorAll(

".railway-hero,.stat-card,.ticket-card,.journey-item,.insight-card,.summary-box,.document-card,.profile-card,.detail-card"

);

revealItems.forEach(item=>{

item.style.opacity="0";

item.style.transform="translateY(40px)";

item.style.transition=

"all .8s ease";

});

const revealObserver=

new IntersectionObserver(

entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform=

"translateY(0)";

}

});

},

{

threshold:.15

}

);

revealItems.forEach(item=>{

revealObserver.observe(item);

});

/*=====================================
        CARD HOVER
======================================*/

const cards=document.querySelectorAll(

".stat-card,.ticket-card,.journey-item,.document-card,.summary-card,.action-card"

);

cards.forEach(card=>{

card.addEventListener(

"mouseenter",

()=>{

card.style.transition=

"all .35s ease";

card.style.transform=

"translateY(-10px)";

}

);

card.addEventListener(

"mouseleave",

()=>{

card.style.transform=

"translateY(0px)";

}

);

});

/*=====================================
        HERO IMAGE FLOAT
======================================*/

const heroImage=document.querySelector(

".hero-right img"

);

if(heroImage){

let position=0;

setInterval(()=>{

position=

position===0 ? -10 : 0;

heroImage.style.transform=

`translateY(${position}px)`;

},2500);

}

/*=====================================
        STAT CARD DELAY
======================================*/

document.querySelectorAll(

".stat-card"

).forEach((card,index)=>{

card.style.animation=

`fadeUp .6s ease ${index*0.15}s forwards`;

});

/*=====================================
        DASHBOARD LOADED
======================================*/

window.addEventListener(

"load",

()=>{

console.log(

"Railway Customer Dashboard Loaded"

);

document.body.classList.add(

"dashboard-loaded"

);

}
);

/*=====================================
        LOGOUT
======================================*/

const logoutBtn=document.querySelector(
'.sidebar-menu a[href="login.html"]'
);

if(logoutBtn){

logoutBtn.addEventListener("click",(e)=>{

e.preventDefault();

localStorage.removeItem("customerName");

localStorage.removeItem("customerEmail");

localStorage.removeItem("loggedInRole");

window.location.href="login.html";

});

}

/*=====================================
        SEARCH ICON
======================================*/

const searchIcon=document.querySelector(".search-box i");

if(searchIcon){

searchIcon.addEventListener("click",()=>{

window.location.href="404.html";

});

}

/*=====================================
        ESC KEY CLOSE SIDEBAR
======================================*/

document.addEventListener("keydown",(e)=>{

if(

e.key==="Escape" &&

sidebar.classList.contains("active")

){

closeMenu();

}

});

/*=====================================
        WINDOW RESIZE
======================================*/

window.addEventListener("resize",()=>{

if(window.innerWidth>=992){

sidebar.classList.remove("active");

sidebarOverlay.classList.remove("active");

}

});

/*=====================================
        QUICK ACTION BUTTONS
======================================*/

document.querySelectorAll(

".action-card"

).forEach(card=>{

card.addEventListener("click",()=>{

window.location.href="404.html";

});

});

/*=====================================
        DOCUMENT BUTTONS
======================================*/

document.querySelectorAll(

".document-buttons a"

).forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.preventDefault();

window.location.href="404.html";

});

});

/*=====================================
        TICKET BUTTONS
======================================*/

document.querySelectorAll(

".ticket-buttons a"

).forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.preventDefault();

window.location.href="404.html";

});

});

/*=====================================
        PROFILE ACTIONS
======================================*/

document.querySelectorAll(

".action-buttons a"

).forEach(btn=>{

btn.addEventListener("click",(e)=>{

e.preventDefault();

window.location.href="404.html";

});

});

/*=====================================
        NOTIFICATION ICONS
======================================*/

document.querySelectorAll(

".header-icon"

).forEach(icon=>{

icon.addEventListener("click",()=>{

window.location.href="404.html";

});

});

/*=====================================
        ACTIVE HEADER SHADOW
======================================*/

window.addEventListener("scroll",()=>{

const header=document.querySelector(

".dashboard-header"

);

if(window.scrollY>20){

header.style.boxShadow=

"0 20px 45px rgba(0,0,0,.15)";

}

else{

header.style.boxShadow=

"0 10px 25px rgba(0,0,0,.08)";

}

});

/*=====================================
        LIVE CLOCK
======================================*/

const liveClock=document.getElementById(

"liveClock"

);

if(liveClock){

setInterval(()=>{

const now=new Date();

liveClock.textContent=

now.toLocaleTimeString(

"en-IN",

{

hour:"2-digit",

minute:"2-digit",

second:"2-digit"

}

);

},1000);

}

/*=====================================
        RANDOM TRAIN STATUS
======================================*/

const trainStatus=document.querySelector(

".train-status"

);

if(trainStatus){

const status=[

"Running On Time",

"Reached Platform",

"Boarding Started",

"Departing Soon"

];

setInterval(()=>{

const random=

Math.floor(

Math.random()*status.length

);

trainStatus.textContent=

status[random];

},5000);

}

/*=====================================
        SMOOTH PAGE LOADER
======================================*/

window.addEventListener("load",()=>{

document.body.classList.add(

"dashboard-loaded"

);

});

/*=====================================
        PREVENT EMPTY SEARCH
======================================*/

const searchInput=document.querySelector(

".search-box input"

);

if(searchInput){

searchInput.addEventListener("keydown",(e)=>{

if(

e.key==="Enter" &&

searchInput.value.trim()===""

){

e.preventDefault();

searchInput.focus();

}

});

}

/*=====================================
        DASHBOARD READY
======================================*/

console.log(

"🚆 Railway Customer Dashboard Ready"

);



/*==========================================
ADMIN PAGE NAVIGATION
==========================================*/

document.addEventListener("DOMContentLoaded",()=>{

const menuLinks=document.querySelectorAll(".sidebar-menu a[href^='#']");
const sections=document.querySelectorAll(".page-section");

function showSection(id){

    sections.forEach(section=>{

        section.style.display="none";
        section.classList.remove("active");

    });

    const active=document.querySelector(id);

    if(active){

        active.style.display="block";
        active.classList.add("active");

    }

    menuLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")===id){

            link.classList.add("active");

        }

    });

}

/* Default Page */

showSection("#dashboard");

/* Menu Click */

menuLinks.forEach(link=>{

    link.addEventListener("click",(e)=>{

        e.preventDefault();

        const target=link.getAttribute("href");

        showSection(target);

    });

});

});