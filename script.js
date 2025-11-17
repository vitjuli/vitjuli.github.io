// ==========================================
// ACADEMIC PERSONAL WEBSITE - SCRIPTS
// Professional & Minimal Interactions
// ==========================================

(function() {
    'use strict';

    // ==========================================
    // SMOOTH SCROLL FOR NAVIGATION LINKS
    // ==========================================

    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');

            if (targetId.startsWith('#')) {
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const navHeight = document.querySelector('.nav-bar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ==========================================
    // SMOOTH SCROLL FOR HERO BUTTONS
    // ==========================================

    const heroButtons = document.querySelectorAll('.hero-buttons .btn');

    heroButtons.forEach(button => {
        const href = button.getAttribute('href');
        if (href && href.startsWith('#')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);

                if (targetSection) {
                    const navHeight = document.querySelector('.nav-bar').offsetHeight;
                    const targetPosition = targetSection.offsetTop - navHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        }
    });

    // ==========================================
    // NAVBAR SCROLL EFFECT
    // ==========================================

    let lastScroll = 0;
    const navbar = document.querySelector('.nav-bar');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 50) {
            navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        } else {
            navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
        }

        lastScroll = currentScroll;
    });

    // ==========================================
    // ACTIVE NAV LINK HIGHLIGHTING
    // ==========================================

    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('.section, .hero');
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            const navHeight = navbar.offsetHeight;

            if (window.pageYOffset >= (sectionTop - navHeight - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const href = link.getAttribute('href');

            if (href === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // ==========================================
    // FADE-IN ANIMATION ON SCROLL
    // ==========================================

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe elements for fade-in effect
    const fadeElements = document.querySelectorAll(
        '.research-card, .publication-item, .conference-card, .award-card'
    );

    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // ==========================================
    // PRINT BUTTON (Optional)
    // ==========================================

    // Add keyboard shortcut for printing
    document.addEventListener('keydown', (e) => {
        if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
            // Allow default print behavior
        }
    });

    // ==========================================
    // EXTERNAL LINKS - OPEN IN NEW TAB
    // ==========================================

    const externalLinks = document.querySelectorAll('a[href^="http"]');

    externalLinks.forEach(link => {
        // Skip if it already has target attribute
        if (!link.hasAttribute('target')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });

    // ==========================================
    // PAGE LOAD FADE-IN
    // ==========================================

    window.addEventListener('load', () => {
        document.body.style.opacity = '0';
        setTimeout(() => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        }, 100);
    });

    // ==========================================
    // SKIP TO MAIN CONTENT (Accessibility)
    // ==========================================

    // Create skip link for screen readers
    const skipLink = document.createElement('a');
    skipLink.href = '#home';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 0;
        background: var(--accent-color);
        color: white;
        padding: 8px;
        text-decoration: none;
        z-index: 9999;
    `;

    skipLink.addEventListener('focus', () => {
        skipLink.style.top = '0';
    });

    skipLink.addEventListener('blur', () => {
        skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);

    // ==========================================
    // RESPONSIVE NAVIGATION (Mobile)
    // ==========================================

    function handleResponsiveNav() {
        const width = window.innerWidth;

        if (width < 768) {
            // Mobile styles already handled in CSS
            // This is a placeholder for additional mobile-specific JS if needed
        }
    }

    window.addEventListener('resize', handleResponsiveNav);
    handleResponsiveNav(); // Call on load

    // ==========================================
    // CONSOLE MESSAGE (Optional)
    // ==========================================

    console.log('%cIuliia Vitiugova', 'color: #1a4d7c; font-size: 20px; font-weight: bold;');
    console.log('%cMachine Learning Researcher', 'color: #8b4513; font-size: 14px; font-style: italic;');
    console.log('%cUniversity of Cambridge', 'color: #5a6c7d; font-size: 12px;');
    console.log('%c\nInterested in collaboration? Get in touch!', 'color: #2c3e50; font-size: 12px;');
    console.log('Email: iv294@cam.ac.uk');
    console.log('GitHub: https://github.com/vitjuli');

    // ==========================================
    // PERFORMANCE OPTIMIZATION
    // ==========================================

    // Debounce function for scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounce to scroll-heavy functions if needed
    // (Currently scroll events are lightweight enough)

    // ==========================================
    // INITIALIZE
    // ==========================================

    console.log('%c✓ Website initialized successfully', 'color: #1a4d7c; font-weight: bold;');

})();
