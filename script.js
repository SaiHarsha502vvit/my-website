function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    icon.classList.remove("open");
    document.body.style.overflow = "auto";
  } else {
    menu.classList.add("open");
    icon.classList.add("open");
    document.body.style.overflow = "hidden";
  }
}

// Initialize AOS (Animate On Scroll)
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animations
  AOS.init({
    duration: 1200, // slower
    once: false,
    mirror: true,
    offset: 100,
    easing: 'ease-in-out'
  });

  // Initialize SortableJS for drag and drop lists
  const certificationsListEl = document.getElementById('certifications-list');
  const achievementsListEl = document.getElementById('achievements-list');
  
  // Make certifications list sortable
  if (certificationsListEl) {
    new Sortable(certificationsListEl, {
      animation: 150,
      ghostClass: 'sortable-ghost',
      chosenClass: 'sortable-chosen',
      dragClass: 'sortable-drag',
      onEnd: function(evt) {
        // Optional: Save the new order to localStorage
        const items = Array.from(certificationsListEl.children).map(item => item.innerHTML);
        localStorage.setItem('certificationsOrder', JSON.stringify(items));
      }
    });
  }
  
  // Make achievements list sortable
  if (achievementsListEl) {
    new Sortable(achievementsListEl, {
      animation: 150,
      ghostClass: 'sortable-ghost',
      chosenClass: 'sortable-chosen',
      dragClass: 'sortable-drag',
      onEnd: function(evt) {
        // Optional: Save the new order to localStorage
        const items = Array.from(achievementsListEl.children).map(item => item.innerHTML);
        localStorage.setItem('achievementsOrder', JSON.stringify(items));
      }
    });
  }

  // Ensure hamburger closes on link click (mobile/tablet)
  const menuLinks = document.querySelectorAll('.menu-links a');
  menuLinks.forEach(link => {
    link.addEventListener('click', function() {
      const menu = document.querySelector('.menu-links');
      const icon = document.querySelector('.hamburger-icon');
      menu.classList.remove('open');
      icon.classList.remove('open');
      document.body.style.overflow = 'auto';
    });
  });

  // GSAP animations for hero section
  gsap.from("#profile .section__pic-container", {
    x: -100,
    opacity: 0,
    duration: 1.5, // slower
    ease: "power3.out"
  });

  gsap.from("#profile .section__text", {
    x: 100,
    opacity: 0,
    duration: 1.5, // slower
    ease: "power3.out",
    delay: 0.4
  });

  // GSAP ScrollTrigger animations
  gsap.registerPlugin(ScrollTrigger);
  
  // About section animation
  gsap.from("#about .section__pic-container", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 70%",
      end: "bottom 70%",
      toggleActions: "play none none reverse"
    },
    x: -100,
    opacity: 0,
    duration: 1.5, // slower
    ease: "power3.out"
  });
  
  gsap.from("#about .about-details-container", {
    scrollTrigger: {
      trigger: "#about",
      start: "top 70%",
      end: "bottom 70%",
      toggleActions: "play none none reverse"
    },
    x: 100,
    opacity: 0,
    duration: 1.5, // slower
    ease: "power3.out",
    delay: 0.4
  });
  
  // Add hover animations for project cards
  const projectCards = document.querySelectorAll(".animated-card");
  projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        scale: 1.03,
        boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
        duration: 0.3
      });
    });
    
    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        boxShadow: "0 5px 10px rgba(0,0,0,0.1)",
        duration: 0.3
      });
    });
  });
});

// Scroll-to-top button functionality
document.addEventListener('DOMContentLoaded', function() {
  const scrollToTopBtn = document.getElementById('scroll-to-top');
  
  // Show the button when user scrolls down 200px
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 200) {
      scrollToTopBtn.classList.add('visible');
    } else {
      scrollToTopBtn.classList.remove('visible');
    }
  });
  
  // Smooth scroll to top when button is clicked
  scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
});
