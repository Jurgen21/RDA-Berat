//MENU

const menu = document.getElementById("menu");
const navLinks = document.getElementById("active");

menu.addEventListener("click", function() {
    navLinks.classList.toggle("active");
});

const links = navLinks.querySelectorAll("a"); 

links.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

//SLIDE

const container = document.querySelector('.carousel-container');
const slides = document.querySelectorAll('.slide');

let slideId = 0;
let offset = 0;

setInterval(() => {
    offset = slides[0].offsetWidth;

    container.style.transition = "500ms ease-in-out";
    container.style.transform = `translateX(-${offset}px)`;

    setTimeout(() => {
        container.style.transition = "none";
        container.appendChild(slides[slideId]);
        container.style.transform = "translateX(0)";
        slideId++;

        if(slideId >= slides.length) {
            slideId = 0;
        }
    }, 500);
}, 3000);

//SLIDE IMAGES

const myProjects = document.querySelectorAll(".myProject");
const projectCounter = document.getElementById("projectCounter");
let slideIndex = 0;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
  if (myProjects.length === 0) {
    if (projectCounter) projectCounter.textContent = "0 of 0";
    return;
  }

  myProjects[slideIndex].classList.add("active");
  updateCounter();
}

function updateCounter() {
  if (!projectCounter) return;
  const displayIndex = slideIndex + 1; 
  const total = myProjects.length;
  projectCounter.textContent = `${displayIndex} of ${total}`;
}

function showSlide(index) {
  myProjects.forEach(slide => slide.classList.remove("active"));

  if (index < 0) {
    slideIndex = myProjects.length - 1;
  } else if (index >= myProjects.length) {
    slideIndex = 0;
  } else {
    slideIndex = index;
  }

  myProjects[slideIndex].classList.add("active");
  updateCounter(); 
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

//VIDEO BACKGROUND
const video = document.querySelector('.videoWrapper video');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    video.style.transform = `translateY(${scrollTop * 0.5}px)`;
});


//SCROLL BEHAVIOUR//

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
