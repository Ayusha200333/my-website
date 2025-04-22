let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active')
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({
    distance: '80px',
    duration: 1900,
    delay: 200,
});

ScrollReveal().reveal('.home-content,heading,.skills h1,.assignment h1,.services h1,.projects h1,.education h1', {origin: 'top'});
ScrollReveal().reveal('.home-img, .portfolio-box, .contact form,.container,.project-container, .timeline-items', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img,.services-container', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});
ScrollReveal().reveal('.footer', {origin: 'bottom'});


const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer', 'Web Developer' ,'UI/UX Engineer'],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
});













