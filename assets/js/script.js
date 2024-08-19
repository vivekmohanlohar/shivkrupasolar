// Program to change navigation bar background on scroll
window.addEventListener('scroll', () => {
  document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0);
});

// Loading animation for the page
var loaderImg = document.querySelector(".img");
var loader = document.querySelector(".loader");

window.addEventListener('load', hides);
function hides() {
  loader.classList.add("hide");
  loaderImg.classList.add("ImgNone");
}

// Side navigation toggle menu button Javascript
const Menu = document.querySelector(".nav__navigation");
const menuBtn = document.querySelector(".menuBtn");

menuBtn.addEventListener('click', () => {
   menuBtn.classList.toggle("menu-active");
   Menu.classList.toggle("active");
});

const nav = document.querySelector('nav');
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
   const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

   if (currentScrollTop > lastScrollTop) {
      // Scrolling down, hide the navigation
      nav.classList.add('hidden');
      nav.classList.remove('visible');

      // Close the menu if open
      if (Menu.classList.contains("active")) {
         menuBtn.classList.remove("menu-active");
         Menu.classList.remove("active");
      }
   } else {
      // Scrolling up, show the navigation and close the menu
      nav.classList.add('visible');
      nav.classList.remove('hidden');

      if (Menu.classList.contains("active")) {
         menuBtn.classList.remove("menu-active");
         Menu.classList.remove("active");
      }
   }

   lastScrollTop = currentScrollTop;
});

// Close menu when clicking outside of it
document.addEventListener('click', (event) => {
   const isMenuOpen = Menu.classList.contains('active');
   const isClickInsideMenu = Menu.contains(event.target);
   const isClickInsideButton = menuBtn.contains(event.target);

   if (isMenuOpen && !isClickInsideMenu && !isClickInsideButton) {
      menuBtn.classList.remove("menu-active");
      Menu.classList.remove("active");
   }
});

// Function to open project details modal
function openProject(projectId) {
   const modal = document.getElementById('project-modal');
   const modalImage = document.getElementById('project-modal-image');

   // Set the image source based on the project
   modalImage.src = projectId + '.jpg';

   // Show the modal
   modal.style.display = 'block';
}

// Function to close project details modal
function closeProject() {
   document.getElementById('project-modal').style.display = 'none';
}


(function() {
   'use strict';

   var slides = document.querySelectorAll('.testimonial-item'),
      arrows = document.querySelectorAll('.lnr'),
      carouselCount = 0,
      scrollInterval,
      interval = 5000;

   arrows[0].addEventListener('click', function(e) {
      e = e || window.event;
      e.preventDefault();
      carouselCount -= 100;
      slider();
      if (e.type !== 'autoClick') {
         clearInterval(scrollInterval);
         scrollInterval = setInterval(autoScroll, interval);
      }
   });

   arrows[1].addEventListener('click', sliderEvent);
   arrows[1].addEventListener('autoClick', sliderEvent);

   function sliderEvent(e) {
      e = e || window.event;
      e.preventDefault();
      carouselCount += 100;
      slider();
      if (e.type !== "autoClick") {
         clearInterval(scrollInterval);
         scrollInterval = setInterval(autoScroll, interval);
      }
   }

   function slider() {
      switch (carouselCount) {
         case -100:
            carouselCount = 0;
            break;
         case 300:
            carouselCount = 0;
            break;
         default:
            break;
      }
      for (var i = 0; i < slides.length; i += 1) {
         slides[i].setAttribute('style', 'transform:translateX(-' + carouselCount + '%)');
      }
   }

   // create new Event to dispatch click for auto scroll
   var autoClick = new Event('autoClick');

   function autoScroll() {
      arrows[1].dispatchEvent(autoClick);
   }

   // set timing of dispatch click events
   scrollInterval = setInterval(autoScroll, interval);

})();