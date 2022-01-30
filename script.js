const navToggle = document.querySelector(".nav-toggle");  /*Variable for toggling the navigation bar*/
const navLinks = document.querySelectorAll('.nav__link'); /*Variable for closing the nav when link is clicked*/
const boxAlert = document.querySelectorAll(".box"); /*Variable for circle animation at intro*/
const totheTop = document.getElementById("up-arrow"); /*Variable for To the top button display on scroll */

/* Toggle Hamburger Icon */
navToggle.addEventListener("click", () => {
  document.body.classList.toggle('nav-open');
})

/* Close navbar when clicking on links (Here we removed the nav-open class itself so that navbar get translate(100%) again */
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  })
})

/* ANIME JS ANIMATIONS */
anime({
  targets: '#svg-anime path',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutQuad',
  duration: 5000,
  direction: 'alternate',
  loop: true
});

/*==================================================
  Media Queries for the animated circle for ANIME JS
==================================================*/
function myFunction(x) {
  if (x.matches) { // If media query matches
    anime({
      targets: '.box',
      keyframes: [
        { translateY: -40 },
        { translateX: 200 },
        { translateX: 0 },
        { translateY: 80 },
        { translateY: 0 }
      ],
      duration: 10000,
      easing: 'easeOutElastic(1, 0.8)',
      loop: true
    });
  } else {
    anime({
      targets: '.box',
      keyframes: [
        { translateY: -40 },
        { translateX: 350 },
        { translateX: 0 },
        { translateY: 180 },
        { translateY: 0 }
      ],
      duration: 10000,
      easing: 'easeOutElastic(1, 0.8)',
      loop: true
    });

  }
}

var x = window.matchMedia("(max-width: 560px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

/*===========================================
To the top display on scroll
===========================================*/

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop>40 || document.documentElement.scrollTop > 40) {
    totheTop.style.display = "block";
  } else {
    totheTop.style.display = "none";
  }
}