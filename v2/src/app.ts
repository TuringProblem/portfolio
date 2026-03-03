interface NavigationElements {
  navToggle: HTMLButtonElement;
  navMenu: HTMLDivElement;
  navLinks: NodeListOf<HTMLAnchorElement>;
}

class Navigation {
  private elements: NavigationElements;

  constructor() {
    this.elements = this.getElements();
    this.init();
  }

  private getElements(): NavigationElements {
    const navToggle = document.getElementById('navToggle') as HTMLButtonElement;
    const navMenu = document.getElementById('navMenu') as HTMLDivElement;
    const navLinks = document.querySelectorAll('.nav-link') as NodeListOf<HTMLAnchorElement>;

    if (!navToggle || !navMenu) {
      throw new Error('Required navigation elements not found');
    }

    return { navToggle, navMenu, navLinks };
  }

  private init(): void {
    this.setupMobileToggle();
    this.setupSmoothScrolling();
    this.setupActiveLinks();
  }

  private setupMobileToggle(): void {
    this.elements.navToggle.addEventListener('click', () => {
      this.elements.navMenu.classList.toggle('active');
    });
  }

  private setupSmoothScrolling(): void {
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

  private setupActiveLinks(): void {
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