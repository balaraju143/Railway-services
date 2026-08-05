/*==========================================
ABOUT HERO ANIMATION
==========================================*/

document.addEventListener("DOMContentLoaded",()=>{

    const hero=document.querySelector(".about-hero");

    const badge=document.querySelector(".hero-badge");

    const title=document.querySelector(".about-hero-content h1");

    const text=document.querySelector(".about-hero-content p");

    const buttons=document.querySelector(".hero-buttons");

    if(!hero) return;

    setTimeout(()=>{

        badge.classList.add("show");

    },200);

    setTimeout(()=>{

        title.classList.add("show");

    },500);

    setTimeout(()=>{

        text.classList.add("show");

    },800);

    setTimeout(()=>{

        buttons.classList.add("show");

    },1100);

});


/*==========================================
PARALLAX BACKGROUND
==========================================*/

const aboutHero=document.querySelector(".about-hero");

window.addEventListener("scroll",()=>{

    if(!aboutHero) return;

    const scroll=window.pageYOffset;

    aboutHero.style.backgroundPositionY=`${scroll*0.25}px`;

});


/*==========================================
BUTTON HOVER
==========================================*/

document.querySelectorAll(".hero-buttons a").forEach(button=>{

    button.addEventListener("mouseenter",()=>{

        button.style.transform="translateY(-6px)";

    });

    button.addEventListener("mouseleave",()=>{

        button.style.transform="translateY(0)";

    });

});


/*==========================================
OUR STORY SECTION
==========================================*/

const storyRows = document.querySelectorAll(".story-row");

const storyObserver = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2,
    rootMargin:"0px 0px -80px 0px"
});

storyRows.forEach(row=>{

    storyObserver.observe(row);

});


/*==========================================
IMAGE PARALLAX
==========================================*/

const storyImages=document.querySelectorAll(".story-image img");

window.addEventListener("scroll",()=>{

    storyImages.forEach(image=>{

        const rect=image.getBoundingClientRect();

        const speed=rect.top*.04;

        image.style.transform=`translateY(${speed}px) scale(1.06)`;

    });

});


/*==========================================
CARD HOVER
==========================================*/

document.querySelectorAll(".story-content").forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-12px)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0)";

    });

});


/*==========================================
CORE VALUES
==========================================*/

const valueCards=document.querySelectorAll(".value-card");

const center=document.querySelector(".network-center");

const valueObserver=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            center.classList.add("show");

            valueCards.forEach((card,index)=>{

                setTimeout(()=>{

                    card.classList.add("show");

                },index*180);

            });

        }

    });

},{
    threshold:.2
});

if(center){

    valueObserver.observe(center);

}


/*==========================================
RAILWAY EVOLUTION
==========================================*/

const evolutionItems=document.querySelectorAll(".evolution-card,.evolution-arrow");

const evolutionObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const items=[...evolutionItems];

            items.forEach((item,index)=>{

                setTimeout(()=>{

                    item.classList.add("show");

                },index*250);

            });

            evolutionObserver.unobserve(entry.target);

        }

    });

},{
    threshold:.25
});

const evolutionSection=document.querySelector(".evolution-wrapper");

if(evolutionSection){

    evolutionObserver.observe(evolutionSection);

}


/*==========================================
INNOVATION SECTION
==========================================*/

const innovationCards=document.querySelectorAll(".innovation-card");

const innovationObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            innovationObserver.unobserve(entry.target);

        }

    });

},{
    threshold:.2
});

innovationCards.forEach(card=>{

    innovationObserver.observe(card);

});