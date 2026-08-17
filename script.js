// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

function toggleMenu() {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

if (hamburger) {
    hamburger.addEventListener('click', toggleMenu);
    hamburger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });
}

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(247, 244, 239, 0.98)';
        navbar.style.boxShadow = '0 10px 30px rgba(12, 18, 28, 0.12)';
    } else {
        navbar.style.background = 'rgba(247, 244, 239, 0.92)';
        navbar.style.boxShadow = 'none';
    }
});

// Project filtering (disabled while the Projects section is commented out)
// const filterButtons = document.querySelectorAll('.filter-btn');
// const projectCards = document.querySelectorAll('.project-card');
//
// filterButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         filterButtons.forEach(btn => btn.classList.remove('active'));
//         button.classList.add('active');
//         const filterValue = button.getAttribute('data-filter');
//         projectCards.forEach(card => {
//             if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
//                 card.style.display = 'block';
//                 card.style.animation = 'fadeInUp 0.6s ease-out';
//             } else {
//                 card.style.display = 'none';
//             }
//         });
//     });
// });

// Reveal animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

const animateElements = document.querySelectorAll('.timeline-item, .publication-item');
animateElements.forEach(el => observer.observe(el));

// Form submission -> opens the visitor's email client, pre-filled
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = (formData.get('name') || '').trim();
        const email = (formData.get('email') || '').trim();
        const subject = (formData.get('subject') || '').trim();
        const message = (formData.get('message') || '').trim();

        const status = document.querySelector('.form-status');
        const setStatus = (text, isError) => {
            if (!status) return;
            status.textContent = text;
            status.classList.toggle('form-status--error', !!isError);
            status.classList.add('form-status--visible');
        };

        if (!name || !email || !subject || !message) {
            setStatus('Please fill in all fields.', true);
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            setStatus('Please enter a valid email address.', true);
            return;
        }

        const body = message + '\n\n--\n' + name + '\n' + email;
        const mailto = 'mailto:sachishs.15@gmail.com'
            + '?subject=' + encodeURIComponent(subject)
            + '&body=' + encodeURIComponent(body);

        window.location.href = mailto;
        setStatus('Opening your email client\u2026 If nothing happens, email sachishs.15@gmail.com directly.', false);
    });
}

// Active navigation link
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (scrollY >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Resume download functionality
const resumeLink = document.getElementById('resume-link');
if (resumeLink) {
    resumeLink.addEventListener('click', (e) => {
        const resumeUrl = resumeLink.getAttribute('href');
        if (!resumeUrl || resumeUrl === '#') {
            e.preventDefault();
            alert('Resume link will be added soon. Please contact me directly for a copy.');
        }
    });
}

// Accessible focus outline
document.querySelectorAll('a, button, input, textarea').forEach(element => {
    element.addEventListener('focus', function() {
        this.style.outline = '2px solid #2b6cb0';
        this.style.outlineOffset = '2px';
    });

    element.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});
