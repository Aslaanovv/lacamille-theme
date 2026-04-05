/**
 * LA CAMILLE - Luxury Lingerie & Pajamas
 * Parallax Scrolling & Animations
 */

class LaCamilleTheme {
  constructor() {
    this.init();
  }

  init() {
    this.setupLoader();
    this.setupParallax();
    this.setupScrollAnimations();
    this.setupNavigation();
    this.setupSmoothScroll();
  }

  /**
   * Page Loader Animation
   */
  setupLoader() {
    const loader = document.querySelector('.page-loader');
    if (!loader) return;

    window.addEventListener('load', () => {
      setTimeout(() => {
        loader.classList.add('hidden');
        setTimeout(() => {
          loader.style.display = 'none';
        }, 800);
      }, 1500);
    });
  }

  /**
   * Parallax Effect for Background Images
   */
  setupParallax() {
    const parallaxBgs = document.querySelectorAll('.parallax-bg');

    if (parallaxBgs.length === 0) return;

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;

          parallaxBgs.forEach(bg => {
            const parent = bg.closest('.parallax-section');
            const speed = bg.dataset.speed || 0.5;
            const rect = parent.getBoundingClientRect();
            const parentTop = rect.top + scrolled;
            const parentHeight = parent.offsetHeight;

            // Only animate if section is in view
            if (rect.bottom > 0 && rect.top < window.innerHeight) {
              const yPos = (scrolled - parentTop) * speed;
              bg.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
          });

          ticking = false;
        });

        ticking = true;
      }
    });
  }

  /**
   * Scroll-Triggered Animations
   */
  setupScrollAnimations() {
    const animatedElements = document.querySelectorAll('.parallax-content, .story-text, .story-image');

    if (animatedElements.length === 0) return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: unobserve after animating once
          // observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    animatedElements.forEach(el => observer.observe(el));
  }

  /**
   * Navigation Scroll Effect
   */
  setupNavigation() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let lastScroll = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;

      // Add background on scroll
      if (currentScroll > scrollThreshold) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }

      // Hide/show on scroll direction
      if (currentScroll > lastScroll && currentScroll > 200) {
        header.style.transform = 'translateY(-100%)';
      } else {
        header.style.transform = 'translateY(0)';
      }

      lastScroll = currentScroll;
    });
  }

  /**
   * Smooth Scroll for Anchor Links
   */
  setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');

        if (href === '#' || href === '#top') {
          e.preventDefault();
          window.scrollTo({
            top: 0,
            behavior: 'smooth'
          });
          return;
        }

        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
          const targetPosition = target.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      });
    });
  }

  /**
   * Parallax Storytelling Sections
   * Creates multi-layer parallax effect
   */
  static createParallaxStory(container, options = {}) {
    const {
      layers = [],
      speed = 0.5
    } = options;

    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const rect = container.getBoundingClientRect();
          const scrolled = window.pageYOffset;
          const containerTop = rect.top + scrolled;

          if (rect.bottom > 0 && rect.top < window.innerHeight) {
            layers.forEach((layer, index) => {
              const layerSpeed = speed * (1 + index * 0.2);
              const element = typeof layer === 'string'
                ? container.querySelector(layer)
                : layer;

              if (element) {
                const yPos = (scrolled - containerTop) * layerSpeed;
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
              }
            });
          }

          ticking = false;
        });

        ticking = true;
      }
    });
  }

  /**
   * Reveal Animation for Elements
   */
  static revealOnScroll(element, options = {}) {
    const {
      threshold = 0.2,
      rootMargin = '0px',
      delay = 0
    } = options;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, delay);
        }
      });
    }, {
      threshold,
      rootMargin
    });

    observer.observe(element);
    return observer;
  }
}

// Initialize theme when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new LaCamilleTheme();
  });
} else {
  new LaCamilleTheme();
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = LaCamilleTheme;
}
