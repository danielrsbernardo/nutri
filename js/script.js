const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    carouselImages.style.transform = `translateX(${-currentIndex * 100}%)`;
}

setInterval(showNextImage, 3000); 

document.addEventListener("DOMContentLoaded", function () {
    const menuLinks = document.querySelectorAll('.menu-items a[href^="#"]');

    menuLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, 
                    behavior: 'smooth'
                });
            }
        });
    });
});

