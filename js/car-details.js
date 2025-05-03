// // Car Data - Normalmente viria de um banco de dados, mas aqui está hardcoded para o exemplo
// const carData = {
//     id: 1,
//     name: "Mercedes-Benz S-Class",
//     brand: "Mercedes-Benz",
//     model: "S 500",
//     price: 750000,
//     year: 2023,
//     images: [
//       "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
//       "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
//       "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
//     ],
//     description: "O Mercedes-Benz Classe S é a definição de luxo automotivo. Com seu interior espaçoso, tecnologia de ponta e acabamento impecável, oferece uma experiência de condução incomparável. Seu motor potente proporciona desempenho suave e eficiente, enquanto os sistemas de assistência ao motorista garantem segurança e conforto em qualquer trajeto.",
//     specifications: {
//       engine: "3.0L 6 cilindros em linha turbo",
//       power: "429 cv",
//       torque: "520 Nm",
//       transmission: "Automática de 9 velocidades",
//       acceleration: "4.9s (0-100 km/h)",
//       topSpeed: "250 km/h (limitada)",
//       fuelConsumption: "12.2 km/l (combinado)"
//     },
//     features: [
//       "Interior em couro Nappa",
//       "Sistema de som Burmester 4D",
//       "Painel digital com realidade aumentada",
//       "Suspensão adaptativa AIR BODY CONTROL",
//       "Iluminação ambiente com 64 cores",
//       "Teto solar panorâmico",
//       "Assistente de estacionamento com câmeras 360°"
//     ]
//   };
  
//   document.addEventListener('DOMContentLoaded', function() {
//     // Setup event listeners
//     setupImageGallery();
//     setupModal();
//     setupMobileMenu();
    
//     // Add animation classes
//     addAnimations();
//   });
  
//   function setupImageGallery() {
//     const mainImage = document.getElementById('mainImage');
//     const prevBtn = document.getElementById('prevBtn');
//     const nextBtn = document.getElementById('nextBtn');
//     const indicators = document.querySelectorAll('.indicator');
    
//     let currentIndex = 0;
    
//     if (prevBtn) {
//       prevBtn.addEventListener('click', function() {
//         currentIndex = (currentIndex - 1 + carData.images.length) % carData.images.length;
//         setActiveImage(currentIndex);
//       });
//     }
    
//     if (nextBtn) {
//       nextBtn.addEventListener('click', function() {
//         currentIndex = (currentIndex + 1) % carData.images.length;
//         setActiveImage(currentIndex);
//       });
//     }
    
//     // Set click events for indicators
//     indicators.forEach((indicator, index) => {
//       indicator.addEventListener('click', function() {
//         setActiveImage(index);
//       });
//     });
    
//     // Add keyboard navigation
//     document.addEventListener('keydown', function(e) {
//       if (e.key === 'ArrowLeft') {
//         currentIndex = (currentIndex - 1 + carData.images.length) % carData.images.length;
//         setActiveImage(currentIndex);
//       } else if (e.key === 'ArrowRight') {
//         currentIndex = (currentIndex + 1) % carData.images.length;
//         setActiveImage(currentIndex);
//       }
//     });
//   }
  
//   function setActiveImage(index) {
//     const mainImage = document.getElementById('mainImage');
//     if (!mainImage) return;
    
//     // Update main image with fade effect
//     mainImage.style.opacity = '0';
    
//     setTimeout(() => {
//       mainImage.src = carData.images[index];
//       mainImage.style.opacity = '1';
//     }, 300);
    
//     // Update indicators
//     const indicators = document.querySelectorAll('.indicator');
//     indicators.forEach(indicator => {
//       indicator.classList.remove('active');
//     });
    
//     const activeIndicator = document.querySelector(`.indicator[data-index="${index}"]`);
//     if (activeIndicator) {
//       activeIndicator.classList.add('active');
//     }
//   }
  
//   function setupModal() {
//     const galleryBtn = document.getElementById('galleryBtn');
//     const galleryModal = document.getElementById('galleryModal');
//     const closeGallery = document.getElementById('closeGallery');
//     const galleryGrid = document.getElementById('galleryGrid');
    
//     if (galleryBtn) {
//       galleryBtn.addEventListener('click', function() {
//         openModal();
//       });
//     }
    
//     if (closeGallery) {
//       closeGallery.addEventListener('click', function() {
//         closeModal();
//       });
//     }
    
//     // Add click event to gallery grid images
//     const gridImages = document.querySelectorAll('.gallery-modal-grid img');
//     gridImages.forEach((img, index) => {
//       img.addEventListener('click', function() {
//         setActiveImage(index);
//         closeModal();
//       });
//     });
    
//     // Close modal when clicking outside content
//     if (galleryModal) {
//       galleryModal.addEventListener('click', function(e) {
//         if (e.target === galleryModal) {
//           closeModal();
//         }
//       });
//     }
    
//     // Close modal when pressing escape key
//     document.addEventListener('keydown', function(e) {
//       if (e.key === 'Escape') {
//         closeModal();
//       }
//     });
//   }
  
//   function openModal() {
//     const galleryModal = document.getElementById('galleryModal');
//     if (galleryModal) {
//       document.body.style.overflow = 'hidden'; // Prevent scrolling
//       galleryModal.classList.add('active');
//     }
//   }
  
//   function closeModal() {
//     const galleryModal = document.getElementById('galleryModal');
//     if (galleryModal) {
//       document.body.style.overflow = ''; // Restore scrolling
//       galleryModal.classList.remove('active');
//     }
//   }
  
//   function setupMobileMenu() {
//     const menuButton = document.querySelector('.mobile-menu-button');
//     const mainNav = document.querySelector('.main-nav');
    
//     if (menuButton && mainNav) {
//       menuButton.addEventListener('click', function() {
//         mainNav.style.display = mainNav.style.display === 'block' ? 'none' : 'block';
        
//         // Animate menu button
//         const spans = menuButton.querySelectorAll('span');
//         spans.forEach((span, index) => {
//           if (mainNav.style.display === 'block') {
//             if (index === 0) {
//               span.style.transform = 'translateY(9px) rotate(45deg)';
//             } else if (index === 1) {
//               span.style.opacity = '0';
//             } else if (index === 2) {
//               span.style.transform = 'translateY(-9px) rotate(-45deg)';
//             }
//           } else {
//             span.style.transform = '';
//             span.style.opacity = '';
//           }
//         });
//       });
//     }
    
//     // Close mobile menu when clicking outside
//     document.addEventListener('click', function(e) {
//       if (mainNav && mainNav.style.display === 'block' && !mainNav.contains(e.target) && !menuButton.contains(e.target)) {
//         mainNav.style.display = 'none';
        
//         // Reset menu button
//         const spans = menuButton.querySelectorAll('span');
//         spans.forEach(span => {
//           span.style.transform = '';
//           span.style.opacity = '';
//         });
//       }
//     });
//   }
  
//   function addAnimations() {
//     // Add fade-in animation to elements
//     const elementsToAnimate = [
//       document.querySelector('.car-title'),
//       document.querySelector('.car-subtitle'),
//       document.querySelector('.gallery'),
//       document.querySelector('.info-section'),
//       document.querySelector('.price-card'),
//       document.querySelector('.specs-section')
//     ];
    
//     elementsToAnimate.forEach((element, index) => {
//       if (element) {
//         element.classList.add('animate-fade-in');
//         element.style.animationDelay = `${index * 0.1}s`;
//       }
//     });
    
//     // Add smooth transition to all interactive elements
//     const buttons = document.querySelectorAll('button');
//     buttons.forEach(button => {
//       button.style.transition = 'all 0.3s ease';
//     });
//   }

// =========================
// Car Data (Mock Database)
// =========================
const carData = {
    id: 1,
    name: "Mercedes-Benz S-Class",
    brand: "Mercedes-Benz",
    model: "S 500",
    price: 750000,
    year: 2023,
    images: [
      "https://images.unsplash.com/photo-1553440569-bcc63803a83d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      "https://images.unsplash.com/photo-1616455579100-2ceaa4eb2d37?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80",
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=500&q=80"
    ],
    description: "O Mercedes-Benz Classe S é a definição de luxo automotivo...",
    specifications: {
      engine: "3.0L 6 cilindros em linha turbo",
      power: "429 cv",
      torque: "520 Nm",
      transmission: "Automática de 9 velocidades",
      acceleration: "4.9s (0-100 km/h)",
      topSpeed: "250 km/h (limitada)",
      fuelConsumption: "12.2 km/l (combinado)"
    },
    features: [
      "Interior em couro Nappa",
      "Sistema de som Burmester 4D",
      "Painel digital com realidade aumentada",
      "Suspensão adaptativa AIR BODY CONTROL",
      "Iluminação ambiente com 64 cores",
      "Teto solar panorâmico",
      "Assistente de estacionamento com câmeras 360°"
    ]
  };
  
  // =========================
  // Event Listeners
  // =========================
  document.addEventListener('DOMContentLoaded', () => {
    setupImageGallery();
    setupModal();
    setupMobileMenu();
    addAnimations();
  });
  
  // =========================
  // Gallery Functions
  // =========================
  function setupImageGallery() {
    const mainImage = document.getElementById('mainImage');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicators = document.querySelectorAll('.indicator');
  
    let currentIndex = 0;
  
    const updateIndex = (newIndex) => {
      currentIndex = (newIndex + carData.images.length) % carData.images.length;
      setActiveImage(currentIndex);
    };
  
    prevBtn?.addEventListener('click', () => updateIndex(currentIndex - 1));
    nextBtn?.addEventListener('click', () => updateIndex(currentIndex + 1));
  
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => setActiveImage(index));
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') updateIndex(currentIndex - 1);
      if (e.key === 'ArrowRight') updateIndex(currentIndex + 1);
    });
  }
  
  function setActiveImage(index) {
    const mainImage = document.getElementById('mainImage');
    if (!mainImage) return;
  
    mainImage.style.opacity = '0';
  
    setTimeout(() => {
      mainImage.src = carData.images[index];
      mainImage.style.opacity = '1';
    }, 300);
  
    document.querySelectorAll('.indicator').forEach(el => el.classList.remove('active'));
    const activeIndicator = document.querySelector(`.indicator[data-index="${index}"]`);
    activeIndicator?.classList.add('active');
  }
  
  // =========================
  // Modal Functions
  // =========================
  function setupModal() {
    const galleryBtn = document.getElementById('galleryBtn');
    const galleryModal = document.getElementById('galleryModal');
    const closeGallery = document.getElementById('closeGallery');
  
    galleryBtn?.addEventListener('click', openModal);
    closeGallery?.addEventListener('click', closeModal);
  
    document.querySelectorAll('.gallery-modal-grid img').forEach((img, index) => {
      img.addEventListener('click', () => {
        setActiveImage(index);
        closeModal();
      });
    });
  
    galleryModal?.addEventListener('click', (e) => {
      if (e.target === galleryModal) closeModal();
    });
  
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') closeModal();
    });
  }
  
  function openModal() {
    const galleryModal = document.getElementById('galleryModal');
    if (galleryModal) {
      document.body.style.overflow = 'hidden';
      galleryModal.classList.add('active');
    }
  }
  
  function closeModal() {
    const galleryModal = document.getElementById('galleryModal');
    if (galleryModal) {
      document.body.style.overflow = '';
      galleryModal.classList.remove('active');
    }
  }
  
  // =========================
  // Mobile Menu Toggle
  // =========================
  function setupMobileMenu() {
    const menuButton = document.querySelector('.mobile-menu-button');
    const mainNav = document.querySelector('.main-nav');
  
    menuButton?.addEventListener('click', () => {
      const isOpen = mainNav.style.display === 'block';
      mainNav.style.display = isOpen ? 'none' : 'block';
  
      const spans = menuButton.querySelectorAll('span');
      spans[0].style.transform = isOpen ? '' : 'translateY(9px) rotate(45deg)';
      spans[1].style.opacity = isOpen ? '' : '0';
      spans[2].style.transform = isOpen ? '' : 'translateY(-9px) rotate(-45deg)';
    });
  
    document.addEventListener('click', (e) => {
      if (
        mainNav?.style.display === 'block' &&
        !mainNav.contains(e.target) &&
        !menuButton.contains(e.target)
      ) {
        mainNav.style.display = 'none';
        const spans = menuButton.querySelectorAll('span');
        spans.forEach(span => {
          span.style.transform = '';
          span.style.opacity = '';
        });
      }
    });
  }
  
  // =========================
  // Animation on Load
  // =========================
  function addAnimations() {
    const animatedElements = [
      '.car-title',
      '.car-subtitle',
      '.gallery',
      '.info-section',
      '.price-card',
      '.specs-section'
    ];
  
    animatedElements.forEach((selector, index) => {
      const el = document.querySelector(selector);
      if (el) {
        el.classList.add('animate-fade-in');
        el.style.animationDelay = `${index * 0.1}s`;
      }
    });
  
    document.querySelectorAll('button').forEach(button => {
      button.style.transition = 'all 0.3s ease';
    });
  }
  