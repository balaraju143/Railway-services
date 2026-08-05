/*==========================================
SCROLL REVEAL ANIMATION
==========================================*/

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }else{

            entry.target.classList.remove("active");

        }

    });

},{
    threshold:0.15,
    rootMargin:"0px 0px -80px 0px"
});

revealElements.forEach(element=>{

    revealObserver.observe(element);

});


/*==========================================
CARD STAGGER ANIMATION
==========================================*/

const staggerContainers=document.querySelectorAll(".card-grid,.hero-stats");

staggerContainers.forEach(container=>{

    const cards=container.children;

    const observer=new IntersectionObserver(entries=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                [...cards].forEach((card,index)=>{

                    setTimeout(()=>{

                        card.classList.add("active");

                    },index*120);

                });

            }

        });

    },{

        threshold:.2

    });

    observer.observe(container);

});


/*==========================================
NUMBER COUNTER
==========================================*/

const counters=document.querySelectorAll("[data-count]");

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const target=+counter.dataset.count;

let count=0;

const speed=25;

const update=()=>{

count+=Math.ceil(target/80);

if(count>=target){

counter.innerHTML=target+"+";

}else{

counter.innerHTML=count+"+";

requestAnimationFrame(update);

}

};

update();

counterObserver.unobserve(counter);

}

});

},{threshold:.5});

counters.forEach(counter=>{

counterObserver.observe(counter);

});


/*==========================================
PARALLAX BACKGROUND
==========================================*/

const heroImage=document.querySelector(".hero-bg img");

window.addEventListener("scroll",()=>{

const scroll=window.pageYOffset;

if(heroImage){

heroImage.style.transform=`scale(1.08) translateY(${scroll*0.12}px)`;

}

});


/*==========================================
BUTTON HOVER
==========================================*/

document.querySelectorAll(".primary-btn,.secondary-btn").forEach(button=>{

button.addEventListener("mouseenter",()=>{

button.style.transform="translateY(-6px)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="translateY(0px)";

});

});


/*==========================================
MARQUEE PAUSE
==========================================*/

const marquee=document.querySelector(".marquee-track");

if(marquee){

marquee.addEventListener("mouseenter",()=>{

marquee.style.animationPlayState="paused";

});

marquee.addEventListener("mouseleave",()=>{

marquee.style.animationPlayState="running";

});

}

document.addEventListener("DOMContentLoaded", () => {

    const typingElement = document.querySelector("#typing-text");

    if (typingElement) {

        new Typed("#typing-text", {

            strings: [

                "High-Speed Passenger Rail",

                "Regional Transit",

                "Freight Logistics",

                "Smart Railway"

            ],

            typeSpeed: 70,

            backSpeed: 40,

            backDelay: 1500,

            loop: true

        });

    }

});




/*==========================================
LEFT & RIGHT REVEAL
==========================================*/

const revealItems = document.querySelectorAll(
    ".reveal-left,.reveal-right"
);

const directionObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }else{

            entry.target.classList.remove("active");

        }

    });

},{
    threshold:.15,
    rootMargin:"0px 0px -80px 0px"
});

revealItems.forEach(item=>{

    directionObserver.observe(item);

});



/*==========================================
SERVICES CARD STAGGER
==========================================*/

const serviceSection = document.querySelector(".services");

const serviceCards = document.querySelectorAll(".service-card");

if(serviceSection){

const servicesObserver = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

serviceCards.forEach((card,index)=>{

setTimeout(()=>{

card.classList.add("active");

},index*180);

});

}

});

},{
threshold:.2
});

servicesObserver.observe(serviceSection);

}


/*==========================================
SERVICE IMAGE PARALLAX
==========================================*/

window.addEventListener("scroll",()=>{

const services=document.querySelector(".services");

if(!services) return;

const rect=services.getBoundingClientRect();

const images=document.querySelectorAll(".service-image img");

images.forEach(image=>{

const speed=rect.top*.05;

image.style.transform=`translateY(${speed}px) scale(1.08)`;

});

});


/*==========================================
SERVICE HOVER
==========================================*/

serviceCards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

const image=card.querySelector("img");

const content=card.querySelector(".service-content");

if(image){

image.style.transform="scale(1.12)";

}

if(content){

content.style.transform="translateY(-8px)";

}

});

card.addEventListener("mouseleave",()=>{

const image=card.querySelector("img");

const content=card.querySelector(".service-content");

if(image){

image.style.transform="scale(1)";

}

if(content){

content.style.transform="translateY(0)";

}

});

});


/*==========================================
EXPLORE LINK
==========================================*/

document.querySelectorAll(".service-content a").forEach(link=>{

link.addEventListener("mouseenter",()=>{

const icon=link.querySelector("i");

if(icon){

icon.style.transform="translateX(8px) rotate(-45deg)";

}

});

link.addEventListener("mouseleave",()=>{

const icon=link.querySelector("i");

if(icon){

icon.style.transform="translateX(0) rotate(0deg)";

}

});

});


/*==========================================
SERVICE IMAGE LOADING
==========================================*/

document.querySelectorAll(".service-image img").forEach(img=>{

img.loading="lazy";

});


/*==========================================
SMOOTH REPAINT
==========================================*/

serviceCards.forEach(card=>{

card.style.willChange="transform";

});


/*==========================================
HORIZONTAL JOURNEY
==========================================*/

const journeyWrapper = document.querySelector(".journey-wrapper");

if(journeyWrapper){

    let isDown = false;
    let startX;
    let scrollLeft;

    journeyWrapper.addEventListener("mousedown",(e)=>{

        isDown = true;

        startX = e.pageX - journeyWrapper.offsetLeft;

        scrollLeft = journeyWrapper.scrollLeft;

    });

    journeyWrapper.addEventListener("mouseleave",()=>{

        isDown = false;

    });

    journeyWrapper.addEventListener("mouseup",()=>{

        isDown = false;

    });

    journeyWrapper.addEventListener("mousemove",(e)=>{

        if(!isDown) return;

        e.preventDefault();

        const x = e.pageX - journeyWrapper.offsetLeft;

        const walk = (x - startX) * 2;

        journeyWrapper.scrollLeft = scrollLeft - walk;

    });

}


/*==========================================
JOURNEY CARD REVEAL
==========================================*/

const journeyCards = document.querySelectorAll(".journey-card");

const journeyObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("active");

        }else{

            entry.target.classList.remove("active");

        }

    });

},{
    threshold:.2
});

journeyCards.forEach(card=>{

    journeyObserver.observe(card);

});


/*==========================================
JOURNEY IMAGE PARALLAX
==========================================*/

window.addEventListener("scroll",()=>{

    journeyCards.forEach(card=>{

        const image = card.querySelector("img");

        const rect = card.getBoundingClientRect();

        const speed = rect.top * 0.05;

        image.style.transform = `translateY(${speed}px) scale(1.08)`;

    });

});


/*==========================================
AUTO SCROLL
==========================================*/

if(journeyWrapper){

    let direction = 1;

    setInterval(()=>{

        if(journeyWrapper.matches(":hover")) return;

        journeyWrapper.scrollLeft += direction;

        if(

            journeyWrapper.scrollLeft + journeyWrapper.clientWidth >= journeyWrapper.scrollWidth

        ){

            direction = -1;

        }

        if(journeyWrapper.scrollLeft <= 0){

            direction = 1;

        }

    },20);

}


/*==========================================
RAILWAY NETWORK
==========================================*/

const railwayMap = document.querySelector(".railway-map");
const stations = document.querySelectorAll(".station");
const networkCards = document.querySelectorAll(".network-card");
const lines = document.querySelectorAll(".line");

if(railwayMap){

    const networkObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                railwayMap.classList.add("active");

                /* Railway Lines */

                lines.forEach((line,index)=>{

                    setTimeout(()=>{

                        line.classList.add("active");

                    },index*250);

                });

                /* Stations */

                stations.forEach((station,index)=>{

                    setTimeout(()=>{

                        station.classList.add("active");

                    },index*180);

                });

                /* Cards */

                networkCards.forEach((card,index)=>{

                    setTimeout(()=>{

                        card.classList.add("active");

                    },index*180);

                });

            }

        });

    },{

        threshold:.2

    });

    networkObserver.observe(railwayMap);

}


/*==========================================
STATION HOVER
==========================================*/

stations.forEach(station=>{

    station.addEventListener("mouseenter",()=>{

        station.style.transform="scale(1.15)";

    });

    station.addEventListener("mouseleave",()=>{

        station.style.transform="scale(1)";

    });

});


/*==========================================
NETWORK CARD HOVER
==========================================*/

networkCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateX(12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateX(0px)";

    });

});


/*==========================================
RAILWAY TRACK SECTION
==========================================*/

const trackSection = document.querySelector(".track-section");

const trackItems = document.querySelectorAll(".track-item");

const trackCards = document.querySelectorAll(".track-card");

const trainIcons = document.querySelectorAll(".train-icon");

const railTrack = document.querySelector(".rail-track");

if(trackSection){

    const trackObserver = new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                /* Railway Track */

                railTrack.classList.add("active");

                /* Train Stations */

                trackItems.forEach((item,index)=>{

                    setTimeout(()=>{

                        item.classList.add("active");

                    },index*250);

                });

            }

        });

    },{

        threshold:.2

    });

    trackObserver.observe(trackSection);

}


/*==========================================
TRAIN ICON HOVER
==========================================*/

trainIcons.forEach(icon=>{

    icon.addEventListener("mouseenter",()=>{

        icon.style.transform="translateX(-50%) scale(1.15) rotate(-10deg)";

    });

    icon.addEventListener("mouseleave",()=>{

        icon.style.transform="translateX(-50%) scale(1) rotate(0deg)";

    });

});


/*==========================================
CARD HOVER
==========================================*/

trackCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0px)";

    });

});


/*==========================================
SMOOTH PARALLAX
==========================================*/

window.addEventListener("scroll",()=>{

    trackCards.forEach(card=>{

        const rect=card.getBoundingClientRect();

        const speed=rect.top*0.03;

        card.style.backgroundPosition=`center ${speed}px`;

    });

});


/*==========================================
NETWORK CARDS REDIRECT
==========================================*/

document.querySelectorAll(".network-card").forEach(card=>{

    card.style.cursor="pointer";

    card.addEventListener("click",()=>{

        window.location.href="404.html";

    });

});