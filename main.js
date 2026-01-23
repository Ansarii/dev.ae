const neonProjects = [
    {
        title: "Scam Check",
        description: "AI-powered scam detection for UAE.",
        link: "https://scam-check.vercel.app/",
        category: "AI & Automation"
    },
    {
        title: "AI Buddy",
        description: "Master AI through visual learning. Web & Mobile.",
        link: "https://aibuddy-a2994.web.app",
        category: "Education & Learning"
    },
    {
        title: "AI Playground",
        description: "Test 42+ AI models in one place.",
        link: "https://neoninnovationlab.vercel.app/",
        category: "Developer Tools"
    },
    {
        title: "FixMyCar AI",
        description: "Instant car damage estimate & repair costs.",
        link: "https://fixmycar.vercel.app/",
        category: "AI & Automation"
    },
    {
        title: "RealPrice UAE",
        description: "Transparent UAE pricing insights.",
        link: "https://realpriceuae.vercel.app",
        category: "AI & Automation"
    },
    {
        title: "API Verse",
        description: "API testing reimagined for mobile.",
        link: "https://apiverse-ely.pages.dev",
        category: "Developer Tools"
    },
    {
        title: "GPS Mock",
        description: "Location testing made easy.",
        link: "https://play.google.com/store/apps/details?id=com.lab.gpsmock",
        category: "Developer Tools"
    },
    {
        title: "TaxMate UAE",
        description: "Smart UAE tax assistance.",
        link: "https://taxmateuae.vercel.app",
        category: "AI & Automation"
    },
    {
        title: "Wazzefa",
        description: "Skip the portals. Apply directly.",
        link: "https://wazzefa.vercel.app",
        category: "Lifestyle"
    },
    {
        title: "Astro Track",
        description: "Exploring the cosmos.",
        link: "https://neoninnovationlab.vercel.app/",
        category: "Space & Exploration"
    },
    {
        title: "Free Stuff Today",
        description: "Discover 2026 freebies & deals.",
        link: "https://neoninnovationlab.vercel.app/",
        category: "Lifestyle"
    },
    {
        title: "ProPersona",
        description: "Your aesthetic bio link.",
        link: "https://neoninnovationlab.vercel.app/",
        category: "Lifestyle"
    },
    {
        title: "Recipe Finder",
        description: "Discover delicious recipes.",
        link: "https://play.google.com/store/apps/details?id=com.lab.recipefinder",
        category: "Lifestyle"
    },
    {
        title: "Burger Stack Master",
        description: "Stack the perfect burger.",
        link: "https://play.google.com/store/apps/details?id=com.lab.burgerstackmaster",
        category: "Gaming"
    }
];

function initSideHustle() {
    const grid = document.getElementById('side-hustle-grid');
    if (!grid) return;

    neonProjects.forEach(project => {
        const item = document.createElement('a');
        item.href = project.link;
        item.target = "_blank";
        item.className = 'side-hustle-card fade-up';

        item.innerHTML = `
            <p class="side-hustle-category">${project.category}</p>
            <h3 class="side-hustle-title">${project.title}</h3>
            <p class="side-hustle-description">${project.description}</p>
        `;
        grid.appendChild(item);
    });
}

function initIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-up').forEach(el => {
        observer.observe(el);
    });
}

function initExperienceTabs() {
    const tabs = document.querySelectorAll('.tab-btn');
    const panels = document.querySelectorAll('.experience-panel');
    let currentIndex = 0;
    let autoPlayInterval;

    if (!tabs.length) return;

    function switchTab(index) {
        currentIndex = index;
        const target = tabs[index].getAttribute('data-tab');

        // Update active tab
        tabs.forEach(t => {
            t.classList.remove('active');
            t.setAttribute('aria-selected', 'false');
        });
        tabs[index].classList.add('active');
        tabs[index].setAttribute('aria-selected', 'true');

        // Update active panel
        panels.forEach(p => {
            p.classList.remove('active');
        });
        const activePanel = document.getElementById(target);
        if (activePanel) {
            activePanel.classList.add('active');
        }
    }

    function startAutoPlay() {
        stopAutoPlay();
        autoPlayInterval = setInterval(() => {
            currentIndex = (currentIndex + 1) % tabs.length;
            switchTab(currentIndex);
        }, 5000); // Switch every 5 seconds
    }

    function stopAutoPlay() {
        if (autoPlayInterval) clearInterval(autoPlayInterval);
    }

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            switchTab(index);
            stopAutoPlay();
            startAutoPlay(); // Reset timer on click
        });
    });

    // Start auto-play immediately
    startAutoPlay();
}

function initNavbarScroll() {
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

function initMobileNav() {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    const navLinksItems = document.querySelectorAll('.nav-link');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
            document.body.classList.toggle('menu-open');
        });

        navLinksItems.forEach(item => {
            item.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
                document.body.classList.remove('menu-open');
            });
        });
    }
}

function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.getElementById('navbar').offsetHeight;
                const targetPosition = targetElement.offsetTop - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}


function initProjectStack() {
    const stackCards = document.querySelectorAll('.stack-card');
    const paginationDots = document.querySelectorAll('.pagination-dot');
    const wrapper = document.querySelector('.project-stack-wrapper');
    let currentStackIndex = 0;

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

    // Initial State
    updateStack(0);

    // Event Listeners
    stackCards.forEach((card, index) => {
        card.addEventListener('click', () => {
            if (!card.classList.contains('active')) {
                updateStack(index);
            }
        });
    });

    paginationDots.forEach((dot, index) => {
        dot.addEventListener('click', (e) => {
            updateStack(index);
        });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initSideHustle();
    initExperienceTabs();
    initIntersectionObserver();
    initNavbarScroll();
    initProjectStack();
    initMobileNav();
    initSmoothScroll();
});
