document.addEventListener('DOMContentLoaded', function() {
    // Setup mobile menu
    setupMobileMenu();
    
    // Add animation classes with delays
    addAnimations();
  });
  
  function setupMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuButton && mainNav) {
      menuButton.addEventListener('click', function() {
        mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
        
        // Animate menu button
        const spans = menuButton.querySelectorAll('span');
        spans.forEach((span, index) => {
          if (mainNav.style.display === 'block') {
            if (index === 0) {
              span.style.transform = 'translateY(9px) rotate(45deg)';
            } else if (index === 1) {
              span.style.opacity = '0';
            } else if (index === 2) {
              span.style.transform = 'translateY(-9px) rotate(-45deg)';
            }
          } else {
            span.style.transform = '';
            span.style.opacity = '';
          }
        });
      });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      if (mainNav && mainNav.style.display === 'block' && !mainNav.contains(e.target) && !menuButton.contains(e.target)) {
        mainNav.style.display = 'none';
        
        // Reset menu button
        const spans = menuButton.querySelectorAll('span');
        spans.forEach(span => {
          span.style.transform = '';
          span.style.opacity = '';
        });
      }
    });
  }
  
  function addAnimations() {
    // Animate feature cards with staggered delay
    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach((card, index) => {
      card.style.animationDelay = `${index * 0.1}s`;
    });
    
    // Add animation to section elements when they come into view
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      const sectionHeader = section.querySelector('.section-header');
      if (sectionHeader) {
        observer.observe(sectionHeader);
      }
    });
}