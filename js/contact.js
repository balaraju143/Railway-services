/*==========================================
CONTACT HERO
==========================================*/

document.addEventListener("DOMContentLoaded",()=>{

    const hero=document.querySelector(".contact-hero-content");

    if(hero){

        setTimeout(()=>{

            hero.classList.add("show");

        },300);

    }

});


const helpCards=document.querySelectorAll(".help-card");

const helpObserver=new IntersectionObserver((entries)=>{

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

helpCards.forEach(card=>{

    helpObserver.observe(card);

});


/*==========================================
CONTACT FORM VALIDATION
==========================================*/

document.addEventListener("DOMContentLoaded",()=>{

    /*======================================
    SCROLL REVEAL
    ======================================*/

    const revealItems=document.querySelectorAll(

        ".contact-image,.contact-form-box"

    );

    const observer=new IntersectionObserver((entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:.2

    });

    revealItems.forEach(item=>{

        observer.observe(item);

    });

/*======================================
FORM
======================================*/

const form=document.getElementById("contactForm");

const name=document.getElementById("name");

const email=document.getElementById("email");

const phone=document.getElementById("phone");

const company=document.getElementById("company");

const subject=document.getElementById("subject");

const message=document.getElementById("message");

const agree=document.getElementById("agree");

const checkboxError=document.querySelector(".checkbox-error");

const successMessage=document.getElementById("successMessage");


/*======================================
ERROR
======================================*/

function setError(input,message){

    input.style.borderColor="#ff4d4f";

    const error=input.nextElementSibling;

    if(error){

        error.innerText=message;

        clearTimeout(error.timer);

        error.timer=setTimeout(()=>{

            error.innerText="";

            input.style.borderColor="";

        },3000);

    }

}


/*======================================
SUCCESS
======================================*/

function setSuccess(input){

    input.style.borderColor="#27ae60";

    const error=input.nextElementSibling;

    if(error){

        error.innerText="";

    }

}


/*======================================
SUBMIT
======================================*/

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    let valid=true;


    /* NAME */

    const nameValue=name.value.trim();

    const namePattern=/^[A-Za-z ]+$/;

    if(nameValue===""){

        setError(name,"Full name is required.");

        valid=false;

    }

    else if(!namePattern.test(nameValue)){

        setError(name,"Only letters and spaces are allowed.");

        valid=false;

    }

    else if(nameValue.length<3){

        setError(name,"Name must be at least 3 letters.");

        valid=false;

    }

    else{

        setSuccess(name);

    }


    /* EMAIL */

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(!emailPattern.test(email.value.trim())){

        setError(email,"Please enter a valid email.");

        valid=false;

    }

    else{

        setSuccess(email);

    }


    /* PHONE */

    const phonePattern=/^[0-9]{10}$/;

    if(!phonePattern.test(phone.value.trim())){

        setError(phone,"Enter a valid 10-digit phone number.");

        valid=false;

    }

    else{

        setSuccess(phone);

    }


    /* COMPANY */

    if(company.value.trim()===""){

        setError(company,"Company name is required.");

        valid=false;

    }

    else{

        setSuccess(company);

    }


    /* SUBJECT */

    if(subject.value.trim().length<5){

        setError(subject,"Subject must be at least 5 characters.");

        valid=false;

    }

    else{

        setSuccess(subject);

    }


    /* MESSAGE */

    if(message.value.trim().length<20){

        setError(message,"Message must contain at least 20 characters.");

        valid=false;

    }

    else{

        setSuccess(message);

    }


    /* CHECKBOX */

    if(!agree.checked){

        checkboxError.innerText="Please accept the Privacy Policy.";

        valid=false;

        clearTimeout(checkboxError.timer);

        checkboxError.timer=setTimeout(()=>{

            checkboxError.innerText="";

        },3000);

    }

    else{

        checkboxError.innerText="";

    }


    /* SUCCESS */

    if(valid){

        successMessage.style.display="block";

        successMessage.innerText="Your message has been sent successfully.";

        form.reset();

        document.querySelectorAll(".error-message").forEach(error=>{

            error.innerText="";

        });

        document.querySelectorAll("#contactForm input,#contactForm textarea").forEach(field=>{

            field.style.borderColor="";

        });

        checkboxError.innerText="";

        setTimeout(()=>{

            successMessage.style.display="none";

            window.location.href="404.html";

        },3000);

    }

});
});

/*==========================================
FAQ ACCORDION
==========================================*/

document.addEventListener("DOMContentLoaded",()=>{

    const faqItems=document.querySelectorAll(".faq-item");

    faqItems.forEach(item=>{

        const button=item.querySelector(".faq-question");

        button.addEventListener("click",()=>{

            /* Close other FAQs */

            faqItems.forEach(faq=>{

                if(faq!==item){

                    faq.classList.remove("active");

                }

            });

            /* Toggle current FAQ */

            item.classList.toggle("active");

        });

    });

});


/*==========================================
FAQ SCROLL REVEAL
==========================================*/

const faqCards=document.querySelectorAll(".faq-item");

const faqObserver=new IntersectionObserver((entries)=>{

    entries.forEach((entry,index)=>{

        if(entry.isIntersecting){

            setTimeout(()=>{

                entry.target.classList.add("show");

            },index*150);

        }

    });

},{
    threshold:0.2
});

faqCards.forEach(card=>{

    faqObserver.observe(card);

});

/*==========================================
CONTACT CTA
==========================================*/

const cta=document.querySelector(".cta-content");

const ctaObserver=new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.3
});

if(cta){

    ctaObserver.observe(cta);

}

