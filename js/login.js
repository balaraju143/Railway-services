/*==========================================
LOGIN PAGE
==========================================*/

document.addEventListener("DOMContentLoaded",()=>{

/*==========================================
ELEMENTS
==========================================*/

const form=document.getElementById("loginForm");

const name=document.getElementById("name");

const email=document.getElementById("email");

const password=document.getElementById("password");

const toggle=document.querySelector(".toggle-password");

const eye=toggle.querySelector("i");

const roleCards=document.querySelectorAll(".role-card");

const tabButtons=document.querySelectorAll(".tab-btn");

let selectedRole="customer";


/*==========================================
ROLE SELECT
==========================================*/

roleCards.forEach(card=>{

    card.addEventListener("click",()=>{

        roleCards.forEach(item=>{

            item.classList.remove("active");

        });

        card.classList.add("active");

        selectedRole=card.dataset.role;

        if(selectedRole==="customer"){

            tabButtons[0].classList.add("active");

            tabButtons[1].classList.remove("active");

        }

        else{

            tabButtons[1].classList.add("active");

            tabButtons[0].classList.remove("active");

        }

    });

});


/*==========================================
TOP TABS
==========================================*/

tabButtons[0].addEventListener("click",()=>{

    tabButtons[0].classList.add("active");

    tabButtons[1].classList.remove("active");

    roleCards[0].classList.add("active");

    roleCards[1].classList.remove("active");

    selectedRole="customer";

});

tabButtons[1].addEventListener("click",()=>{

    tabButtons[1].classList.add("active");

    tabButtons[0].classList.remove("active");

    roleCards[1].classList.add("active");

    roleCards[0].classList.remove("active");

    selectedRole="admin";

});


/*==========================================
PASSWORD TOGGLE
==========================================*/

toggle.addEventListener("click",()=>{

    if(password.type==="password"){

        password.type="text";

        eye.classList.replace(

            "fa-eye",

            "fa-eye-slash"

        );

    }

    else{

        password.type="password";

        eye.classList.replace(

            "fa-eye-slash",

            "fa-eye"

        );

    }

});


/*==========================================
ALLOW ONLY LETTERS
==========================================*/

name.addEventListener("input",()=>{

    name.value=name.value.replace(

        /[^A-Za-z ]/g,

        ""

    );

});


/*==========================================
VALIDATION FUNCTIONS
==========================================*/

function setError(input,message){

    const group=input.closest(".input-group");

    const small=group.querySelector("small");

    group.classList.remove("success");

    group.classList.add("error");

    small.innerText=message;

}

function setSuccess(input){

    const group=input.closest(".input-group");

    const small=group.querySelector("small");

    group.classList.remove("error");

    group.classList.add("success");

    small.innerText="";

}


/*==========================================
FORM SUBMIT
==========================================*/

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    let valid=true;


/*==============================
NAME
==============================*/

const fullName=name.value.trim();

const letters=/^[A-Za-z ]+$/;

if(fullName===""){

    setError(

        name,

        "Full name is required."

    );

    valid=false;

}

else if(!letters.test(fullName)){

    setError(

        name,

        "Only letters are allowed."

    );

    valid=false;

}

else if(fullName.length<3){

    setError(

        name,

        "Minimum 3 letters required."

    );

    valid=false;

}

else{

    setSuccess(name);

}


/*==============================
EMAIL
==============================*/

const emailPattern=

/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email.value.trim())){

    setError(

        email,

        "Enter a valid email."

    );

    valid=false;

}

else{

    setSuccess(email);

}


/*==============================
PASSWORD
==============================*/

const passwordPattern=

/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

if(password.value.trim()===""){

    setError(

        password,

        "Password is required."

    );

    valid=false;

}

else if(!passwordPattern.test(password.value)){

    setError(

        password,

        "Min 8 chars, uppercase, lowercase, number & special character."

    );

    valid=false;

}

else{

    setSuccess(password);

}


/*==============================
REDIRECT
==============================*/
/*==============================
REDIRECT
==============================*/

if(valid){

    // Save customer data

    localStorage.setItem(

        "customerName",

        name.value.trim()

    );

    localStorage.setItem(

        "customerEmail",

        email.value.trim()

    );

    if(selectedRole==="customer"){

        window.location.href="customer-dashboard.html";

    }

    else{

        window.location.href="admin-dashboard.html";

    }

}
});

});