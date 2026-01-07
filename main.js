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

document.addEventListener('DOMContentLoaded', () => {
    initSideHustle();
    initIntersectionObserver();
    initNavbarScroll();
});
