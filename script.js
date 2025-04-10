// Initialisation de AOS
AOS.init();


// Défilement fluide pour les liens de la navigation
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Animation des sections au défilement
window.addEventListener('scroll', function () {
    document.querySelectorAll('.section').forEach(function (section) {
        if (section.getBoundingClientRect().top < window.innerHeight) {
            section.classList.add('visible');
        }
    });
});
