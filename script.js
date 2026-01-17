document.addEventListener('DOMContentLoaded', () => {
  // ADS (Animations on Scroll)
  AOS.init({
    duration: 800,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50
  });

  initPhoneMask();
  initFormValidation();
  initNeuralNetwork();
  initSpotlightEffect();
  initTiltEffect();
  initAccordion();
});

/* ==========================================
   NEURAL NETWORK CANVAS
   ========================================== */
function initNeuralNetwork() {
  const canvas = document.getElementById('hero-canvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width, height;
  let particles = [];

  // Config
  const particleCount = 60; // Adjust for density
  const connectionDistance = 150;
  const mouseDistance = 200;

  // Resize
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  // Mouse tracking
  let mouse = { x: null, y: null };
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });
  window.addEventListener('mouseleave', () => {
    mouse.x = null;
    mouse.y = null;
  });

  // Particle Class
  class Particle {
    constructor() {
      this.x = Math.random() * width;
      this.y = Math.random() * height;
      this.vx = (Math.random() - 0.5) * 0.2; // Super slow idle movement
      this.vy = (Math.random() - 0.5) * 0.2;
      this.size = Math.random() * 2 + 1;
      this.color = Math.random() > 0.5 ? '#00F0FF' : '#BD00FF'; // Neon colors
    }

    update() {
      this.x += this.vx;
      this.y += this.vy;

      // Bounce edges
      if (this.x < 0 || this.x > width) this.vx *= -1;
      if (this.y < 0 || this.y > height) this.vy *= -1;

      // Mouse interaction
      if (mouse.x != null) {
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouseDistance) {
          const forceDirectionX = dx / distance;
          const forceDirectionY = dy / distance;
          const force = (mouseDistance - distance) / mouseDistance;
          const directionX = forceDirectionX * force * 0.5; // Attraction strength
          const directionY = forceDirectionY * force * 0.5;
          this.vx += directionX;
          this.vy += directionY;
        }
      }
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.fill();
    }
  }

  // Init particles
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }

  // Animation Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Draw connections first
    for (let i = 0; i < particles.length; i++) {
      for (let j = i; j < particles.length; j++) {
        let dx = particles[i].x - particles[j].x;
        let dy = particles[i].y - particles[j].y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(100, 100, 255, ${1 - distance / connectionDistance})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }

    // Connect to mouse
    if (mouse.x != null) {
      for (let i = 0; i < particles.length; i++) {
        let dx = particles[i].x - mouse.x;
        let dy = particles[i].y - mouse.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < connectionDistance) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0, 240, 255, ${1 - distance / connectionDistance})`; // Cyan connection to mouse
          ctx.lineWidth = 1;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.stroke();
        }
      }
    }

    // Update and draw particles
    particles.forEach(p => {
      p.update();
      p.draw();
    });

    requestAnimationFrame(animate);
  }

  animate();
}

/* ==========================================
   SPOTLIGHT EFFECT
   ========================================== */
function initSpotlightEffect() {
  const cards = document.querySelectorAll('.cards-grid'); // Apply listener to container or body for better perf? 
  // actually better to apply to the grid container and update children

  const handleMouseMove = (e) => {
    const { currentTarget: target } = e;

    // Select all glass cards inside
    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    target.querySelectorAll('.glass-card').forEach(card => {
      const cardRect = card.getBoundingClientRect();
      const cardX = e.clientX - cardRect.left;
      const cardY = e.clientY - cardRect.top;

      card.style.setProperty('--mouse-x', `${cardX}px`);
      card.style.setProperty('--mouse-y', `${cardY}px`);
    });
  };

  document.querySelectorAll('.cards-grid').forEach(grid => {
    grid.addEventListener('mousemove', handleMouseMove);
  });
}

/* ==========================================
   TILT EFFECT (3D)
   ========================================== */
function initTiltEffect() {
  const cards = document.querySelectorAll('.feature-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -10; // Max 10deg rotation
      const rotateY = ((x - centerX) / centerX) * 10;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });
  });
}

/* ==========================================
   PHONE MASK & VALIDATION
   ========================================== */
function initPhoneMask() {
  const input = document.querySelector("#telefone");
  if (!input) return;

  window.intlTelInputInstance = window.intlTelInput(input, {
    initialCountry: "br",
    strictMode: true,
    utilsScript: "https://cdn.jsdelivr.net/npm/intl-tel-input@23.0.10/build/js/utils.js",
    hiddenInput: () => ({ phone: "whatsapp_full", country: "country_code" })
  });
}

function initFormValidation() {
  const form = document.querySelector('form[data-form]');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    const feedback = form.querySelector('.form-feedback');
    // Netlify handles submission, we just show feedback if needed or validate
    // Basic HTML5 validation is active

    // Custom logic if desired...
  });
}

/* ==========================================
   ACCORDION (FAQ)
   ========================================== */
function initAccordion() {
  const headers = document.querySelectorAll('.accordion-header');

  headers.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const content = item.querySelector('.accordion-content');
      const isActive = item.classList.contains('active');

      // Close all others
      document.querySelectorAll('.accordion-item').forEach(otherItem => {
        if (otherItem !== item) {
          otherItem.classList.remove('active');
          otherItem.querySelector('.accordion-content').style.maxHeight = null;
        }
      });

      // Toggle current
      if (isActive) {
        item.classList.remove('active');
        content.style.maxHeight = null;
      } else {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
      }
    });
  });
}
