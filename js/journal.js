/*==========================================
JOURNAL HERO REVEAL
==========================================*/

document.addEventListener("DOMContentLoaded",()=>{

    const hero=document.querySelector(".journal-content");

    if(hero){

        setTimeout(()=>{

            hero.classList.add("show");

        },300);

    }

});

/*==========================================
TRENDING TOPICS REVEAL
==========================================*/

const topicCards=document.querySelectorAll(".topic-card");

const topicObserver=new IntersectionObserver((entries)=>{

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

topicCards.forEach(card=>{

    topicObserver.observe(card);

});

/*==========================================
LATEST RESEARCH TIMELINE
==========================================*/

const researchItems=document.querySelectorAll(".research-item");

const researchObserver=new IntersectionObserver((entries)=>{

    entries.forEach((entry,index)=>{

        if(entry.isIntersecting){

            setTimeout(()=>{

                entry.target.classList.add("show");

            },index*180);

        }

    });

},{
    threshold:.25
});

researchItems.forEach(item=>{

    researchObserver.observe(item);

});


/*==========================================
KNOWLEDGE WALL REVEAL
==========================================*/

const wallNotes=document.querySelectorAll(".wall-note");

const wallObserver=new IntersectionObserver((entries)=>{

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

wallNotes.forEach(note=>{

    wallObserver.observe(note);

});