// ===============================
// Mobile Navigation Toggle
// ===============================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking nav links
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ===============================
// Scroll Animations
// ===============================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add stagger delay
            setTimeout(() => {
                entry.target.classList.add('animate-in');
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all elements with animate-on-scroll class
const animatedElements = document.querySelectorAll('.animate-on-scroll');
animatedElements.forEach(el => observer.observe(el));

// ===============================
// Smooth Scroll for Navigation
// ===============================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const offset = 80; // Account for fixed nav
            const targetPosition = target.offsetTop - offset;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===============================
// Hero Canvas Animation (Grid/Particles)
// ===============================

const canvas = document.getElementById('heroCanvas');
if (canvas) {
    const ctx = canvas.getContext('2d');

    // Set canvas size
    function resizeCanvas() {
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
    }
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Grid configuration
    const grid = {
        rows: 20,
        cols: 20,
        spacing: 0
    };

    // Calculate spacing
    function calculateGrid() {
        grid.spacing = Math.min(canvas.width / grid.cols, canvas.height / grid.rows);
    }
    calculateGrid();
    window.addEventListener('resize', calculateGrid);

    // Particles
    const particles = [];
    const particleCount = 50;

    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2 + 1;
            this.opacity = Math.random() * 0.5 + 0.2;
        }

        update() {
            this.x += this.vx;
            this.y += this.vy;

            // Wrap around edges
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }

        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(60, 79, 255, ${this.opacity})`;
            ctx.fill();
        }
    }

    // Create particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw grid
        ctx.strokeStyle = 'rgba(220, 220, 239, 0.05)';
        ctx.lineWidth = 1;

        // Vertical lines
        for (let i = 0; i <= grid.cols; i++) {
            const x = i * grid.spacing;
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, canvas.height);
            ctx.stroke();
        }

        // Horizontal lines
        for (let i = 0; i <= grid.rows; i++) {
            const y = i * grid.spacing;
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(canvas.width, y);
            ctx.stroke();
        }

        // Update and draw particles
        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        // Draw connections
        ctx.strokeStyle = 'rgba(60, 79, 255, 0.1)';
        ctx.lineWidth = 0.5;

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }

        requestAnimationFrame(animate);
    }

    animate();
}

// ===============================
// Contact Form Handling
// ===============================

const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        console.log('Form submitted:', data);

        // Show success message (in real app, send to backend)
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// ===============================
// Navigation Scroll Effect
// ===============================

let lastScroll = 0;
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        nav.style.background = 'rgba(23, 25, 70, 0.95)';
        nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
    } else {
        nav.style.background = 'rgba(23, 25, 70, 0.8)';
        nav.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// ===============================
// Parallax Effect
// ===============================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-bg-glow, .section-glow');

    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateX(-50%) translateY(${scrolled * speed}px)`;
    });
});

// ===============================
// Initialize on Load
// ===============================

document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio loaded successfully!');

    // Add entrance animation to hero
    setTimeout(() => {
        document.querySelector('.hero-container')?.classList.add('loaded');
    }, 100);
});

// ===============================
// Project Stack Logic
// ===============================

function initProjectStack() {
    const stackCards = document.querySelectorAll('.stack-card');
    const paginationDots = document.querySelectorAll('.pagination-dot');
    const wrapper = document.querySelector('.project-stack-wrapper');
    let currentStackIndex = 0;
    let autoRotateInterval;

    if (!stackCards.length) return;

    function updateStack(index) {
        stackCards.forEach((card, i) => {
            card.classList.remove('active', 'behind-1', 'behind-2');

            if (i === index) {
                card.classList.add('active');
            } else if (i === (index + 1) % stackCards.length) {
                card.classList.add('behind-1');
            } else if (i === (index + 2) % stackCards.length) {
                card.classList.add('behind-2');
            }
        });

        paginationDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });

        currentStackIndex = index;
    }

    function startAutoRotate() {
        autoRotateInterval = setInterval(() => {
            const nextIndex = (currentStackIndex + 1) % stackCards.length;
            updateStack(nextIndex);
        }, 8000);
    }

    function resetAutoRotate() {
        clearInterval(autoRotateInterval);
        startAutoRotate();
    }

    // Initial State
    updateStack(0);
    startAutoRotate();

    // Event Listeners
    stackCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('active')) {
                updateStack(index);
                resetAutoRotate();
            }
        });
    });

    paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            e.stopPropagation();
            updateStack(index);
            resetAutoRotate();
        });
    });

    if (wrapper) {
        wrapper.addEventListener('mouseenter', () => clearInterval(autoRotateInterval));
        wrapper.addEventListener('mouseleave', () => startAutoRotate());
    }
}

// ===============================
// Initialize on Load
// ===============================

document.addEventListener('DOMContentLoaded', () => {
    initProjectStack();

    // Add entrance animation to hero
    setTimeout(() => {
        document.querySelector('.hero-container')?.classList.add('loaded');
    }, 100);
});
