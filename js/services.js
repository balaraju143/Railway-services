/*==========================================
SERVICES HERO SLIDER
==========================================*/

document.addEventListener("DOMContentLoaded",()=>{

    const slides=document.querySelectorAll(".hero-slider .slide");

    const dots=document.querySelectorAll(".hero-dots .dot");

    let currentSlide=0;

    let sliderInterval;


    /*======================================
    SHOW SLIDE
    ======================================*/

    function showSlide(index){

        slides.forEach((slide,i)=>{

            slide.classList.remove("active");

            dots[i].classList.remove("active");

        });

        slides[index].classList.add("active");

        dots[index].classList.add("active");

        currentSlide=index;

    }


    /*======================================
    NEXT SLIDE
    ======================================*/

    function nextSlide(){

        currentSlide++;

        if(currentSlide>=slides.length){

            currentSlide=0;

        }

        showSlide(currentSlide);

    }


    /*======================================
    AUTO SLIDER
    ======================================*/

    function startSlider(){

        sliderInterval=setInterval(nextSlide,5000);

    }


    /*======================================
    RESET TIMER
    ======================================*/

    function resetSlider(){

        clearInterval(sliderInterval);

        startSlider();

    }


    /*======================================
    DOT CLICK
    ======================================*/

    dots.forEach((dot,index)=>{

        dot.addEventListener("click",()=>{

            showSlide(index);

            resetSlider();

        });

    });


    /*======================================
    INIT
    ======================================*/

    showSlide(0);

    startSlider();

});


/*==========================================
PARALLAX IMAGE
==========================================*/

window.addEventListener("scroll",()=>{

    const activeImage=document.querySelector(".slide.active img");

    if(!activeImage) return;

    const scroll=window.pageYOffset;

    activeImage.style.transform=`scale(1.08) translateY(${scroll*0.08}px)`;

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
CONTROL CENTER REVEAL
==========================================*/

const revealItems=document.querySelectorAll(
".control-screen,.grid-box,.feature"
);

const controlObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            setTimeout(()=>{

                entry.target.classList.add("show");

            },150);

        }

    });

},{
    threshold:.2
});

revealItems.forEach((item,index)=>{

    setTimeout(()=>{

        controlObserver.observe(item);

    },index*80);

});




/*==========================================
EXPANDABLE SERVICES
==========================================*/

const accordionItems=document.querySelectorAll(".accordion-item");

accordionItems.forEach(item=>{

    const header=item.querySelector(".accordion-header");

    header.addEventListener("click",()=>{

        accordionItems.forEach(other=>{

            if(other!==item){

                other.classList.remove("active");

            }

        });

        item.classList.toggle("active");

    });

});


/*==========================================
SCROLL REVEAL
==========================================*/

const accordionObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

accordionItems.forEach(item=>{

    accordionObserver.observe(item);

});

/*==========================================
SERVICE TIMELINE
==========================================*/

const timelineItems=document.querySelectorAll(".timeline-item");

const timelineObserver=new IntersectionObserver((entries)=>{

    entries.forEach((entry,index)=>{

        if(entry.isIntersecting){

            setTimeout(()=>{

                entry.target.classList.add("show");

            },index*180);

        }

    });

},{
    threshold:.2
});

timelineItems.forEach(item=>{

    timelineObserver.observe(item);

});


/*==========================================
TRUST SECTION
==========================================*/

const trustItems=document.querySelectorAll(".trust-card,.trust-cta");

const trustObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

trustItems.forEach(item=>{

    trustObserver.observe(item);

});


/*==========================================
COUNTER ANIMATION
==========================================*/

const counters=document.querySelectorAll(".counter");

const counterObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            const counter=entry.target;

            const target=+counter.dataset.count;

            let count=0;

            const speed=target/80;

            const update=()=>{

                count+=speed;

                if(count<target){

                    counter.innerText=Math.ceil(count);

                    requestAnimationFrame(update);

                }else{

                    counter.innerText=target;

                }

            };

            update();

            counterObserver.unobserve(counter);

        }

    });

},{
    threshold:.5
});

counters.forEach(counter=>{

    counterObserver.observe(counter);

});


/*==========================================
FEATURED STORIES REVEAL
==========================================*/

const storyCards=document.querySelectorAll(".story-card");

const storyObserver=new IntersectionObserver((entries)=>{

    entries.forEach((entry,index)=>{

        if(entry.isIntersecting){

            setTimeout(()=>{

                entry.target.classList.add("show");

            },index*150);

        }

    });

},{
    threshold:.2
});

storyCards.forEach(card=>{

    storyObserver.observe(card);

});