// ===================================
// ELITE CONSTRUCTIONS - JAVASCRIPT
// ===================================

// Preloader
window.addEventListener('load', () => {
    const preloader = document.querySelector('.preloader');
    if (preloader) {
        setTimeout(() => {
            preloader.classList.add('hide');
            // Remove from DOM after animation completes
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 600);
        }, 1000);
    }
});

// Fallback: Hide preloader after 2 seconds regardless
setTimeout(() => {
    const preloader = document.querySelector('.preloader');
    if (preloader && !preloader.classList.contains('hide')) {
        preloader.classList.add('hide');
        setTimeout(() => {
            preloader.style.display = 'none';
        }, 600);
    }
}, 2000);

// Hero Slider
let currentSlide = 0;
let slideInterval;

function initHeroSlider() {
    const slides = document.querySelectorAll('.hero-slide');
    const images = document.querySelectorAll('.hero-image-container');
    const dots = document.querySelectorAll('.slider-dot');
    
    // Auto slide every 6 seconds
    slideInterval = setInterval(() => {
        nextSlide();
    }, 6000);
    
    // Dot click handlers
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            goToSlide(index);
            resetInterval();
        });
    });
    
    function goToSlide(index) {
        // Remove active class from all
        slides.forEach(slide => slide.classList.remove('active'));
        images.forEach(img => img.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        // Add active class to current
        slides[index].classList.add('active');
        images[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentSlide = index;
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        goToSlide(currentSlide);
    }
    
    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => {
            nextSlide();
        }, 6000);
    }
    
    // Pause on hover
    const heroContainer = document.querySelector('.hero-container');
    heroContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    heroContainer.addEventListener('mouseleave', () => {
        resetInterval();
    });
}

// Parallax effect for hero image
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('[data-scroll-parallax]');
    
    parallaxElements.forEach(element => {
        const speed = 0.3;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// Active navigation link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 200) {
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

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// About Section Scroll Animations
const aboutObserverOptions = {
    threshold: 0.15,
    rootMargin: '0px'
};

const aboutObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            
            // Animate feature cards with staggered delay
            if (entry.target.classList.contains('about-text-column')) {
                const featureCards = entry.target.querySelectorAll('[data-animate-in]');
                featureCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, index * 100);
                });
            }
            
            // Animate stat cards
            if (entry.target.classList.contains('about-visual-column')) {
                const statCards = entry.target.querySelectorAll('[data-animate-in]');
                statCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.classList.add('animate');
                    }, (index + 2) * 150);
                });
            }
        }
    });
}, aboutObserverOptions);

// Observe about section elements
document.querySelectorAll('[data-scroll-fade]').forEach(el => {
    aboutObserver.observe(el);
});

// Portfolio Section Scroll Animations
const portfolioObserverOptions = {
    threshold: 0.1,
    rootMargin: '0px'
};

const portfolioObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, portfolioObserverOptions);

// Observe portfolio items
document.querySelectorAll('[data-project-fade]').forEach(item => {
    portfolioObserver.observe(item);
});

// Mobile menu toggle
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinksContainer = document.querySelector('.nav-links');
const mobileNavLinks = document.querySelectorAll('.nav-link');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenuBtn.classList.toggle('active');
        navLinksContainer.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Close menu when clicking on a nav link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenuBtn.classList.remove('active');
            navLinksContainer.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.navbar')) {
            mobileMenuBtn.classList.remove('active');
            navLinksContainer.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
}

// Animated counter for stats
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Intersection Observer for stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const statValues = entry.target.querySelectorAll('.stat-value');
            statValues.forEach(stat => {
                if (!stat.classList.contains('animated')) {
                    animateCounter(stat);
                    stat.classList.add('animated');
                }
            });
        }
    });
}, {
    threshold: 0.5
});

const statsSection = document.querySelector('.stats-section');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Testimonials Slider - Centered Loop with Luxury Animations
let currentTestimonial = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const testimonialSlider = document.querySelector('.testimonials-slider');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

const updateTestimonialSlider = () => {
    if (!testimonialSlider || testimonialCards.length === 0) return;
    
    testimonialCards.forEach((card, i) => {
        // Remove all classes
        card.classList.remove('active', 'prev', 'next');
        if (dots[i]) dots[i].classList.remove('active');
        
        // Calculate positions relative to current
        let position = i - currentTestimonial;
        
        // Handle wrapping for infinite loop
        if (position < -1) position = testimonialCards.length + position;
        if (position > 1) position = position - testimonialCards.length;
        
        // Apply classes based on position
        if (position === 0) {
            card.classList.add('active');
            if (dots[i]) dots[i].classList.add('active');
        } else if (position === -1 || position === testimonialCards.length - 1) {
            card.classList.add('prev');
        } else if (position === 1 || position === -(testimonialCards.length - 1)) {
            card.classList.add('next');
        }
    });
};

const nextTestimonial = () => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    updateTestimonialSlider();
};

const prevTestimonial = () => {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    updateTestimonialSlider();
};

// Button event listeners
if (nextBtn) {
    nextBtn.addEventListener('click', () => {
        nextTestimonial();
        resetTestimonialInterval();
    });
}

if (prevBtn) {
    prevBtn.addEventListener('click', () => {
        prevTestimonial();
        resetTestimonialInterval();
    });
}

// Dot navigation
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentTestimonial = index;
        updateTestimonialSlider();
        resetTestimonialInterval();
    });
});

// Auto-play testimonials slider every 4 seconds
let testimonialInterval = setInterval(nextTestimonial, 4000);

const resetTestimonialInterval = () => {
    clearInterval(testimonialInterval);
    testimonialInterval = setInterval(nextTestimonial, 4000);
};

// Pause auto-play on hover
if (testimonialSlider) {
    const sliderWrapper = document.querySelector('.testimonials-slider-wrapper');
    if (sliderWrapper) {
        sliderWrapper.addEventListener('mouseenter', () => {
            clearInterval(testimonialInterval);
        });
        
        sliderWrapper.addEventListener('mouseleave', () => {
            testimonialInterval = setInterval(nextTestimonial, 4000);
        });
    }
}

// Initialize slider on load and resize
updateTestimonialSlider();
window.addEventListener('resize', updateTestimonialSlider);

// Contact Form Handling
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(contactForm);
        
        // Show success message (customize this based on your backend)
        alert('Thank you for your message! We will get back to you soon.');
        
        // Reset form
        contactForm.reset();
        
        // In a real application, you would send this data to your backend
        // Example:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     body: formData
        // })
        // .then(response => response.json())
        // .then(data => {
        //     // Handle success
        // })
        // .catch(error => {
        //     // Handle error
        // });
    });
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        if (email) {
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
        }
    });
}

// Scroll to top button
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 500) {
        scrollTopBtn.classList.add('show');
    } else {
        scrollTopBtn.classList.remove('show');
    }
});

if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Parallax effect for hero section
const hero = document.querySelector('.hero');
const heroBackground = document.querySelector('.hero-background');

if (hero && heroBackground) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        
        if (scrolled < window.innerHeight) {
            heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        }
    });
}

// Animate elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Observe feature items
document.querySelectorAll('.feature-item').forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = `opacity 0.6s ease ${index * 0.2}s, transform 0.6s ease ${index * 0.2}s`;
    observer.observe(item);
});

// Add hover effect to project cards
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
        this.style.boxShadow = '0 20px 60px rgba(201, 169, 98, 0.2)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Form input animations
const formInputs = document.querySelectorAll('.form-input');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
        if (this.value === '') {
            this.parentElement.classList.remove('focused');
        }
    });
});

// Add loading animation to buttons
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function(e) {
        if (!this.classList.contains('loading')) {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        }
    });
});

// Add CSS for ripple effect dynamically
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Dynamic year in footer
const copyrightYear = document.querySelector('.copyright');
if (copyrightYear) {
    const currentYear = new Date().getFullYear();
    copyrightYear.textContent = copyrightYear.textContent.replace('2024', currentYear);
}

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add floating animation to hero elements
const heroElements = document.querySelectorAll('.hero-content > *');
heroElements.forEach((element, index) => {
    element.style.animationDelay = `${index * 0.1}s`;
});

// Cursor effect (optional - premium touch)
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Add custom cursor styles
const cursorStyle = document.createElement('style');
cursorStyle.textContent = `
    .custom-cursor {
        width: 20px;
        height: 20px;
        border: 2px solid var(--primary-gold);
        border-radius: 50%;
        position: fixed;
        pointer-events: none;
        z-index: 9999;
        transition: transform 0.2s ease;
        display: none;
    }
    
    @media (min-width: 1024px) {
        .custom-cursor {
            display: block;
        }
        
        body {
            cursor: none;
        }
        
        a, button {
            cursor: none;
        }
    }
    
    .custom-cursor.hover {
        transform: scale(1.5);
        background: rgba(201, 169, 98, 0.1);
    }
`;
document.head.appendChild(cursorStyle);

// Add hover effect to cursor
document.querySelectorAll('a, button, .service-card, .project-card').forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('hover');
    });
    
    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('hover');
    });
});

console.log('%cElite Constructions', 'color: #C9A962; font-size: 24px; font-weight: bold;');
console.log('%cBuilding Excellence, One Project at a Time', 'color: #B8B8B8; font-size: 14px;');
