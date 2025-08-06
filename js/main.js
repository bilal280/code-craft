// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Initialize Particles.js
  initParticles();
  
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize code typing effect
  initCodeTyping();
  
  // Initialize scroll animations
  initScrollAnimations();
  
  // Initialize contact form to save messages
  initContactForm();
});

// Particles.js configuration
function initParticles() {
  if (document.getElementById('particles-bg')) {
    particlesJS('particles-bg', {
      "particles": {
        "number": {
          "value": 60,
          "density": {
            "enable": true,
            "value_area": 800
          }
        },
        "color": {
          "value": "#3b82f6"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          }
        },
        "opacity": {
          "value": 0.3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 3,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#3b82f6",
          "opacity": 0.2,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 1,
          "direction": "none",
          "random": true,
          "straight": false,
          "out_mode": "out",
          "bounce": false,
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "window",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "grab"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 140,
            "line_linked": {
              "opacity": 0.8
            }
          },
          "push": {
            "particles_nb": 4
          }
        }
      },
      "retina_detect": true
    });
  }
}

// Mobile menu toggle
function initMobileMenu() {
  const menuToggle = document.querySelector('.menu-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  
  if (menuToggle && mobileNav) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('active');
      mobileNav.classList.toggle('active');
    });
  }
}

// Code typing effect
function initCodeTyping() {
  const codeContent = document.getElementById('code-content');
  
  if (codeContent) {
    const codeExample = `// مثال لكود برمجي
function بناءموقع(فكرة) {
  تحليل(فكرة);
  تصميم(فكرة);
  تطوير(فكرة);
  return موقع_متميز;
}
// نجعل أفكارك حقيقة
const موقعك = بناءموقع(فكرتك);`;

    let index = 0;
    
    const typeInterval = setInterval(() => {
      codeContent.textContent = codeExample.substring(0, index);
      index++;
      
      if (index > codeExample.length) {
        clearInterval(typeInterval);
      }
    }, 50);
  }
}

// Initialize Contact Form
function initContactForm() {
  // This function will be used when contact form is loaded
  // It's mainly for use on the contact page
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;
  
  // Contact form functionality is implemented in the contact.html page directly
  console.log('Contact form initialized');
}

// Scroll animations
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.animate-on-scroll');
  
  function checkVisibility() {
    animatedElements.forEach(element => {
      const rect = element.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      
      // Add delay to stagger animations
      const delay = element.getAttribute('data-delay') || 0;
      
      if (rect.top <= windowHeight * 0.8) {
        setTimeout(() => {
          element.classList.add('visible');
        }, delay);
      }
    });
  }
  
  // Check visibility on scroll
  window.addEventListener('scroll', checkVisibility);
  
  // Check initially (for elements already in view)
  checkVisibility();
}

// Service card hover effects
const serviceCards = document.querySelectorAll('.service-card');
if (serviceCards) {
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const icon = this.querySelector('.service-icon');
      const check = this.querySelector('.service-check');
      const arrow = this.querySelector('.link-arrow');
      
      if (icon) {
        icon.style.transform = 'scale(1.1) rotate(5deg)';
        setTimeout(() => {
          icon.style.transform = 'scale(1) rotate(0deg)';
        }, 500);
      }
      
      if (check) {
        check.style.opacity = '1';
        check.style.transform = 'scale(1)';
      }
      
      if (arrow) {
        arrow.style.transform = 'translateX(5px)';
      }
    });
    
    card.addEventListener('mouseleave', function() {
      const icon = this.querySelector('.service-icon');
      const check = this.querySelector('.service-check');
      const arrow = this.querySelector('.link-arrow');
      
      if (icon) {
        icon.style.transform = 'scale(1) rotate(0deg)';
      }
      
      if (check) {
        check.style.opacity = '0';
        check.style.transform = 'scale(0.8)';
      }
      
      if (arrow) {
        arrow.style.transform = 'translateX(0)';
      }
    });
  });
}
