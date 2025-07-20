const slides = document.querySelectorAll("#slideshow ul li");
const prevBtn = document.getElementById("btn-1")
const nextBtn = document.getElementById("btn-2")
let currentSlide = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.toggle("hidden", i !== index);
    });
}

// Show the first slide
showSlide(currentSlide);

// Next button click
nextBtn.addEventListener("click", () => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
});

// Previous button click
prevBtn.addEventListener("click", () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
});

// Side Navbar
const menuicon = document.getElementById("menuicon")
const sidenav = document.getElementById("sidenav")
const closenav = document.getElementById("closenav")

menuicon.addEventListener("click", function () {
    sidenav.style.left = 0
})
closenav.addEventListener("click", function () {
    sidenav.style.left = "-50%"
})

//offer close
const offer = document.getElementById("offer")
const close = document.getElementById("close")
close.addEventListener("click", function () {
    offer.remove()
})

