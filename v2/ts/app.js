class Navigation {
    elements;
    constructor() {
        this.elements = this.getElements();
        this.init();
    }
    getElements() {
        const navToggle = document.getElementById('navToggle');
        const navMenu = document.getElementById('navMenu');
        const navLinks = document.querySelectorAll('.nav-link');
        if (!navToggle || !navMenu) {
            throw new Error('Required navigation elements not found');
        }
        return { navToggle, navMenu, navLinks };
    }
    init() {
        this.setupMobileToggle();
        this.setupSmoothScrolling();
        this.setupActiveLinks();
    }
    setupMobileToggle() {
        this.elements.navToggle.addEventListener('click', () => {
            this.elements.navMenu.classList.toggle('active');
        });
    }
    setupSmoothScrolling() {
        this.elements.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href')?.substring(1);
                if (targetId) {
                    const targetSection = document.getElementById(targetId);
                    if (targetSection) {
                        targetSection.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                        this.elements.navMenu.classList.remove('active');
                    }
                }
            });
        });
    }
    setupActiveLinks() {
        const sections = document.querySelectorAll('.section');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const currentId = entry.target.id;
                    this.elements.navLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === `#${currentId}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, {
            threshold: 0.5
        });
        sections.forEach(section => observer.observe(section));
    }
}
document.addEventListener('DOMContentLoaded', () => {
    new Navigation();
});
export { Navigation };
//# sourceMappingURL=app.js.map