"use strict";

// Make navbar transparent when it is on the top
// Click Arrow up btn to home
const navbar = document.querySelector("#navbar");
const navbarHeight = navbar.getBoundingClientRect().height;
const arrowbtn = document.querySelector(".arrowup-btn")

document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
    arrowbtn.classList.add("arrow--dark");
    arrowbtn.addEventListener("click", () => {
      scrollIntoView("#home")
    });
  } else {
    navbar.classList.remove("navbar--dark");
    arrowbtn.classList.remove("arrow--dark");
  }
});

//  Handle scrolling when click on the navbar menu
const navbarMenu = document.querySelector(".navbar__menu");
navbarMenu.addEventListener('click', (event) => {
  const target = event.target;
  const link = target.dataset.link;
  if (link == null) {
    return;
  }
  navbarMenu.classList.add('close');
  scrollIntoView(link);
});

// Handle Navbar toggle button
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
navbarToggleBtn.addEventListener('click', () => {
  navbarMenu.classList.toggle('close');
});


// Click contact me btn to move to bottom
const contactMe = document.querySelector(".home__contact");
contactMe.addEventListener("click", () => {
  scrollIntoView('#contact');
});


// Make home contents transparent when scrolldown
const home = document.querySelector(".home__container");
const homeHeight = home.getBoundingClientRect().height;

document.addEventListener("scroll", () => {
  home.style.opacity = 1-window.scrollY/homeHeight;
});

// Handle work filtering button
const workBtnContainer = document.querySelector('.work__categories')
const projectContainer = document.querySelector('.work__projects')
const projects = document.querySelectorAll('.project')

workBtnContainer.addEventListener('click', (e) => {
  const filter = e.target.dataset.category || e.target.parentNode.dataset.category;
  
  if(filter == null) {
    return;
  }

  // Remove selection from previous then select the new one
  const active = document.querySelector('.category__btn.selected')
  if (active != null) {
    active.classList.remove('selected');
  }
  e.target.classList.add('selected');
  
  projectContainer.classList.add('anim-out');
  setTimeout(() => {
    projects.forEach((project) => {
      if(filter === '*' || filter === project.dataset.category) {
      project.classList.remove('invisible');
      }
      else {
        project.classList.add('invisible')
      }
    });
    projectContainer.classList.remove('anim-out')
  }, 250);
});

function scrollIntoView(selector) {
  const scrollTo = document.querySelector(selector);
  scrollTo.scrollIntoView({behavior: "smooth"});
};

// Sync section and Navbar menu when scrolling


