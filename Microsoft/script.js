// GSAP and ScrollTrigger Animations
document.addEventListener('DOMContentLoaded', () => {
    
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // GSAP ScrollTrigger Registration
    gsap.registerPlugin(ScrollTrigger);

    // Navbar Animation - Slide down on load
    gsap.from('.navbar', {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // Hero Section Animations
    gsap.from('.hero h1', {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: 'power3.out',
        delay: 0.3
    });

    gsap.from('.hero p', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.6
    });

    gsap.from('.hero .cta-button', {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.9
    });

    // Feature Cards - Staggered Animation
    gsap.from('.feature-card', {
        scrollTrigger: {
            trigger: '.features',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
    });

    // Feature Icons - Rotate and scale
    gsap.from('.feature-icon', {
        scrollTrigger: {
            trigger: '.features',
            start: 'top 70%',
            toggleActions: 'play none none reverse'
        },
        scale: 0,
        rotation: -180,
        duration: 1,
        stagger: 0.2,
        ease: 'back.out(1.7)'
    });

    // CTA Section Animation
    gsap.from('.cta-section', {
        scrollTrigger: {
            trigger: '.cta-section',
            start: 'top 80%',
            toggleActions: 'play none none reverse'
        },
        y: 60,
        opacity: 0,
        duration: 1,
        ease: 'power3.out'
    });

    // About Page Animations
    if (document.querySelector('.page-header')) {
        gsap.from('.page-header h1', {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.page-header p', {
            y: 30,
            opacity: 0,
            duration: 1,
            delay: 0.3,
            ease: 'power3.out'
        });
    }

    // About Content Animation
    if (document.querySelector('.about-content')) {
        gsap.from('.about-text', {
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            x: -60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.about-image', {
            scrollTrigger: {
                trigger: '.about-section',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            x: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });
    }

    // Mission & Vision Cards
    if (document.querySelector('.mv-card')) {
        gsap.from('.mv-card', {
            scrollTrigger: {
                trigger: '.mission-vision',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: 'power3.out'
        });
    }

    // Team Cards - Staggered Animation
    if (document.querySelector('.team-card')) {
        gsap.from('.team-card', {
            scrollTrigger: {
                trigger: '.team-section',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            y: 60,
            opacity: 0,
            scale: 0.9,
            duration: 0.8,
            stagger: 0.15,
            ease: 'back.out(1.7)'
        });
    }

    // Contact Page Animations
    if (document.querySelector('.contact-form-wrapper')) {
        gsap.from('.contact-form-wrapper', {
            scrollTrigger: {
                trigger: '.contact-section',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            x: -60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        gsap.from('.contact-info-wrapper', {
            scrollTrigger: {
                trigger: '.contact-section',
                start: 'top 70%',
                toggleActions: 'play none none reverse'
            },
            x: 60,
            opacity: 0,
            duration: 1,
            ease: 'power3.out'
        });

        // Contact Info Items - Staggered
        gsap.from('.contact-info-item', {
            scrollTrigger: {
                trigger: '.contact-info-wrapper',
                start: 'top 60%',
                toggleActions: 'play none none reverse'
            },
            x: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: 'power3.out'
        });
    }

    // Footer Animation
    if (document.querySelector('.footer')) {
        gsap.from('.footer-section', {
            scrollTrigger: {
                trigger: '.footer',
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out'
        });
    }

    // Section Titles Animation
    gsap.utils.toArray('.section-title').forEach(title => {
        gsap.from(title, {
            scrollTrigger: {
                trigger: title,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out'
        });
    });

    // Parallax Effect for Hero Section
    gsap.to('.hero', {
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true
        },
        yPercent: 30,
        ease: 'none'
    });

    // Button Hover Effects
    const buttons = document.querySelectorAll('.cta-button, .submit-button, .back-button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.05,
                duration: 0.3,
                ease: 'power3.out'
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: 'power3.out'
            });
        });
    });

    // Feature Card Hover Effects
    const featureCards = document.querySelectorAll('.feature-card');
    featureCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            gsap.to(card, {
                y: -10,
                duration: 0.4,
                ease: 'power3.out'
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                y: 0,
                duration: 0.4,
                ease: 'power3.out'
            });
        });
    });

    // Nav Links Hover Animation
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', () => {
            gsap.to(link, {
                scale: 1.05,
                duration: 0.2,
                ease: 'power3.out'
            });
        });

        link.addEventListener('mouseleave', () => {
            gsap.to(link, {
                scale: 1,
                duration: 0.2,
                ease: 'power3.out'
            });
        });
    });

    // Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                lenis.scrollTo(target);
            }
        });
    });
});
