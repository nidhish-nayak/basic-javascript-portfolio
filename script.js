const navToggle = document.querySelector(".nav-toggle"); /*Variable for toggling the navigation bar*/
const navLinks = document.querySelectorAll('.nav__link'); /*Variable for closing the nav when link is clicked*/
const boxAlert = document.querySelectorAll(".box"); /*Variable for circle animation at intro*/
const toTop = document.getElementById("up-arrow"); /*Variable for To the top button display on scroll */

/*==========================
Pre Loader
==========================*/

window.addEventListener('load', () => {
  const preload = document.querySelector('.preload');
  preload.classList.add('preload-finish');
})

/*========================== 
Toggle Hamburger Icon 
===========================*/

navToggle.addEventListener("click", () => {
  document.body.classList.toggle('nav-open');
})

/* Close navbar when clicking on links. Here we removed the nav-open class itself,
so that navbar get translate(100%) again */

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})

/*===========================
ANIME JS ANIMATIONS 
============================*/

anime({
  targets: '#svg-anime .path-one',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutQuad',
  duration: 10000,
  direction: 'alternate',
  loop: true
});

anime({
  targets: '#svg-anime .path-two',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutQuad',
  duration: 5000,
  direction: 'alternate',
  loop: true
});

/*===========================================
Send E-Mail Using EmailJS
============================================*/

// VALIDATION FUNCTION FOR EMPTY FIELDS

function validate() {
  let name = document.querySelector("#name");
  let email = document.querySelector("#email");
  let message = document.querySelector("#message");
  let submit = document.querySelector("#submit");

  submit.addEventListener("click", (e)=>{
    e.preventDefault()

    if(name.value=="" || email.value=="" ||message.value==""){
      inputEmpty();
    }
    else{
      sendMail(name.value, email.value, message.value); //CALLING SEND MAIL FUNCTION
      success();
      console.log("Email Sent!")
      formReset();  //CALLING RESET FORM FUNCTION
    }
  })
}

validate(); // CALLING THE VALIDATION FUNCTION

/*===============================================
SEND MAIL FUNCTION from the documentation 
(Must use same template for this to work)
===============================================*/

function sendMail(name,email,message) {
  emailjs.send("service_wggyt18","template_3vvqfno",{
    from_name: name,
    reply_to: email,
    message: message,
    });
}

// RESET FIELDS AFTER SUBMITTED

function formReset() {
  document.getElementById("contact-form").reset();
}

/*============================================
SWEET ALERTS FUNCTIONS USED FROM DOCUMENTATION 
FOR POP-UP WHEN FORM SUBMITTED FORM
============================================*/

function success() {
  swal({
    title: "Mail Sent!",
    text: "Thank you, will get back to you as soon as possible.",
    icon: "success",
    button: "Close",
  });
}

function error() {
  swal({
    title: "Oops!",
    text: "Something went wrong. Message was not sent.",
    icon: "error",
    button: "Close",
  });
}

function inputEmpty() {
  swal({
    title: "Oops!",
    text: "Please fill the fields completely.",
    icon: "error",
    button: "Close",
  });
}

/*===========================================
To the top display on scroll
===========================================*/

window.onscroll = function () {
  scrollFunctionOne()
};

function scrollFunctionOne() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}


// /*==================================================
//   Media Queries for the animated circle for ANIME JS
// ==================================================*/

// function myFunction(x) {
//   if (x.matches) { // If media query matches
//     anime({
//       targets: '.box',
//       keyframes: [{
//           translateY: -40
//         },
//         {
//           translateX: 200
//         },
//         {
//           translateX: 0
//         },
//         {
//           translateY: 80
//         },
//         {
//           translateY: 0
//         }
//       ],
//       duration: 10000,
//       easing: 'easeOutElastic(1, 0.8)',
//       loop: true
//     });
//   } else {
//     anime({
//       targets: '.box',
//       keyframes: [{
//           translateY: -40
//         },
//         {
//           translateX: 350
//         },
//         {
//           translateX: 0
//         },
//         {
//           translateY: 180
//         },
//         {
//           translateY: 0
//         }
//       ],
//       duration: 10000,
//       easing: 'easeOutElastic(1, 0.8)',
//       loop: true
//     });

//   }
// }

// var x = window.matchMedia("(max-width: 560px)")
// myFunction(x) // Call listener function at run time
// x.addListener(myFunction) // Attach listener function on state changes this will be executed
