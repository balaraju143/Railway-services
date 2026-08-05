document.addEventListener("DOMContentLoaded",()=>{

const form=document.getElementById("signupForm");

const name=document.getElementById("name");
const email=document.getElementById("email");
const phone=document.getElementById("phone");
const password=document.getElementById("password");
const confirmPassword=document.getElementById("confirmPassword");
const agree=document.getElementById("agree");

const togglePassword=document.querySelector(".toggle-password");
const toggleConfirm=document.querySelector(".toggle-confirm");

const roleCards=document.querySelectorAll(".role-card");
const tabButtons=document.querySelectorAll(".tab-btn");

const checkboxError=document.querySelector(".checkbox-error");

let selectedRole="customer";


/*==================================
ROLE
==================================*/

roleCards.forEach(card=>{

    card.addEventListener("click",()=>{

        roleCards.forEach(c=>c.classList.remove("active"));

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


/*==================================
PASSWORD TOGGLE
==================================*/

togglePassword.addEventListener("click",()=>{

    if(password.type==="password"){

        password.type="text";

        togglePassword.innerHTML='<i class="fa-solid fa-eye-slash"></i>';

    }

    else{

        password.type="password";

        togglePassword.innerHTML='<i class="fa-solid fa-eye"></i>';

    }

});


toggleConfirm.addEventListener("click",()=>{

    if(confirmPassword.type==="password"){

        confirmPassword.type="text";

        toggleConfirm.innerHTML='<i class="fa-solid fa-eye-slash"></i>';

    }

    else{

        confirmPassword.type="password";

        toggleConfirm.innerHTML='<i class="fa-solid fa-eye"></i>';

    }

});


/*==================================
ALLOW ONLY LETTERS
==================================*/

name.addEventListener("input",()=>{

    name.value=name.value.replace(/[^A-Za-z ]/g,"");

});


/*==================================
PHONE ONLY NUMBERS
==================================*/

phone.addEventListener("input",()=>{

    phone.value=phone.value.replace(/\D/g,"").slice(0,10);

});


/*==================================
VALIDATION
==================================*/

function setError(input,message){

    const group=input.closest(".input-group");

    group.classList.remove("success");

    group.classList.add("error");

    group.querySelector("small").innerText=message;

}

function setSuccess(input){

    const group=input.closest(".input-group");

    group.classList.remove("error");

    group.classList.add("success");

    group.querySelector("small").innerText="";

}


/*==================================
SUBMIT
==================================*/

form.addEventListener("submit",(e)=>{

    e.preventDefault();

    let valid=true;


/* NAME */

const letters=/^[A-Za-z ]+$/;

if(name.value.trim()===""){

    setError(name,"Full name is required.");

    valid=false;

}

else if(!letters.test(name.value.trim())){

    setError(name,"Only letters allowed.");

    valid=false;

}

else if(name.value.trim().length<3){

    setError(name,"Minimum 3 letters required.");

    valid=false;

}

else{

    setSuccess(name);

}


/* EMAIL */

const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if(!emailPattern.test(email.value.trim())){

    setError(email,"Enter a valid email.");

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


/* PASSWORD */

const passwordPattern=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

if(password.value===""){

    setError(password,"Password is required.");

    valid=false;

}

else if(!passwordPattern.test(password.value)){

    setError(

        password,

        "Min 8 chars, uppercase, lowercase, number & special."

    );

    valid=false;

}

else{

    setSuccess(password);

}


/* CONFIRM PASSWORD */

if(confirmPassword.value===""){

    setError(

        confirmPassword,

        "Confirm your password."

    );

    valid=false;

}

else if(confirmPassword.value!==password.value){

    setError(

        confirmPassword,

        "Passwords do not match."

    );

    valid=false;

}

else{

    setSuccess(confirmPassword);

}


/* CHECKBOX */

if(!agree.checked){

    checkboxError.innerText="Please accept Terms & Privacy Policy.";

    valid=false;

}

else{

    checkboxError.innerText="";

}


/* SUCCESS */
if(valid){

    localStorage.setItem(

        "customerName",

        name.value.trim()

    );

    localStorage.setItem(

        "customerEmail",

        email.value.trim()

    );

    window.location.href="login.html";

}

});

});


document.addEventListener("DOMContentLoaded",()=>{

    const remember=document.querySelector(".remember");

    const checkbox=document.getElementById("agree");

    if(remember){

        remember.addEventListener("click",(e)=>{

            if(e.target!==checkbox){

                window.location.href="404.html";

            }

        });

    }

});