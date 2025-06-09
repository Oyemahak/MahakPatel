function waitForThemeButtonsAndInit() {
  if (document.querySelectorAll('.theme-btn').length === 0) {
    requestAnimationFrame(waitForThemeButtonsAndInit);
    return;
  }

  // ========== Mobile Menu Toggle ==========
  const menuButton = document.querySelector('.mobile-menu-icon');
  const menu = document.querySelector('.desktop-menu');
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('active');
      menuButton.setAttribute('aria-expanded', isOpen);
      menuButton.querySelector('i').className = isOpen ? 'fas fa-times' : 'fas fa-bars';
    });
  }

  // ========== Theme Switcher ==========
  const themeBtns = document.querySelectorAll('.theme-btn');
  const resumeButton = document.querySelector('.resume-button');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'default';

  function clearEffects() {
    document.querySelectorAll('.snowflake, .raindrop, .ripple, .star, .moon, .lightning').forEach(el => el.remove());
  }

  function createStars(count = 80, sizeVariation = 3) {
    for (let i = 0; i < count; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      star.style.left = `${Math.random() * 100}vw`;
      star.style.top = `${Math.random() * 100}vh`;
      const size = 0.5 + Math.random() * sizeVariation;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      star.style.opacity = 0.3 + Math.random() * 0.7;
      star.style.animationDuration = `${2 + Math.random() * 5}s`;
      star.style.animationDelay = `${Math.random() * 10}s`;
      document.body.appendChild(star);
    }
  }

  function createMoon() {
    const moon = document.createElement('div');
    moon.className = 'moon';
    document.body.appendChild(moon);
  }

  function createSnow() {
    for (let i = 0; i < 50; i++) {
      const snowflake = document.createElement('div');
      snowflake.className = 'snowflake';
      snowflake.innerHTML = '❄';
      snowflake.style.left = `${Math.random() * 100}vw`;
      snowflake.style.top = `${Math.random() * -100}px`;
      snowflake.style.opacity = Math.random();
      snowflake.style.animationDuration = `${8 + Math.random() * 15}s`;
      snowflake.style.fontSize = `${0.5 + Math.random()}em`;
      document.body.appendChild(snowflake);
    }
  }

  function createRain() {
    for (let i = 0; i < 60; i++) {
      const raindrop = document.createElement('div');
      raindrop.className = 'raindrop';
      raindrop.style.left = `${Math.random() * 100}vw`;
      raindrop.style.top = `${Math.random() * -100}px`;
      raindrop.style.height = `${10 + Math.random() * 20}px`;
      raindrop.style.animationDuration = `${1 + Math.random() * 1.5}s`;
      document.body.appendChild(raindrop);

      if (i % 5 === 0) {
        setTimeout(() => {
          const ripple = document.createElement('div');
          ripple.className = 'ripple';
          ripple.style.left = `${parseFloat(raindrop.style.left) - 10}px`;
          ripple.style.top = '90vh';
          ripple.style.width = '20px';
          ripple.style.height = '20px';
          document.body.appendChild(ripple);
        }, parseFloat(raindrop.style.animationDuration) * 1000 * 0.9);
      }
    }

    const lightning = document.createElement('div');
    lightning.className = 'lightning';
    document.body.appendChild(lightning);
  }

  function applyTheme(theme) {
    document.body.className = `${theme}-theme`;
    localStorage.setItem('portfolio-theme', theme);
    themeBtns.forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-theme="${theme}"]`)?.classList.add('active');
    clearEffects();

    if (theme === 'snow') {
      createStars(150, 2);
      createSnow();
    } else if (theme === 'rain') {
      createRain();
    } else if (theme === 'moon') {
      createStars(300, 4);
      createMoon();
    }
  }

  themeBtns.forEach(btn => {
    btn.addEventListener('click', function () {
      applyTheme(this.dataset.theme);
    });
  });

  applyTheme(savedTheme);

  // ========== Resume Hover Effect ==========
  if (resumeButton) {
    resumeButton.addEventListener('mouseenter', () => {
      if (document.body.classList.contains('rain-theme')) {
        const lightning = document.querySelector('.lightning');
        if (lightning) {
          lightning.style.opacity = '0.9';
          lightning.style.transition = 'none';
          setTimeout(() => {
            lightning.style.opacity = '0';
            lightning.style.transition = 'opacity 0.3s';
          }, 50);
          setTimeout(() => {
            lightning.style.opacity = '0.6';
            lightning.style.transition = 'none';
            setTimeout(() => {
              lightning.style.opacity = '0';
              lightning.style.transition = 'opacity 0.3s';
            }, 100);
          }, 200);
        }
      }
    });
  }

  // ========== Project Tab Switch ==========
  const uxBtn = document.querySelector('[data-tab="ux"]');
  const devBtn = document.querySelector('[data-tab="dev"]');
  const uxProjects = document.querySelector('.ux-projects');
  const devProjects = document.querySelector('.dev-projects');
  const title = document.getElementById('projects-title');

  if (uxBtn && devBtn && uxProjects && devProjects && title) {
    uxBtn.addEventListener('click', () => {
      uxBtn.classList.add('active');
      devBtn.classList.remove('active');
      uxProjects.style.display = 'flex';
      devProjects.style.display = 'none';
      title.textContent = 'Featured UX Projects';
    });

    devBtn.addEventListener('click', () => {
      devBtn.classList.add('active');
      uxBtn.classList.remove('active');
      uxProjects.style.display = 'none';
      devProjects.style.display = 'flex';
      title.textContent = 'Featured Web Dev Projects';
    });
  }

  // ========== Carousel ==========
  const carouselImages = document.querySelectorAll(".mobile-companies-img");
  const prevBtn = document.querySelector(".arrow-left");
  const nextBtn = document.querySelector(".arrow-right");
  let currentImage = 0;

  function updateCarouselDisplay() {
    carouselImages.forEach((img, index) => {
      img.classList.toggle("active", index === currentImage);
    });
    if (prevBtn && nextBtn) {
      prevBtn.disabled = currentImage === 0;
      nextBtn.disabled = currentImage === carouselImages.length - 1;
    }
  }

  prevBtn?.addEventListener("click", () => {
    if (currentImage > 0) {
      currentImage--;
      updateCarouselDisplay();
    }
  });

  nextBtn?.addEventListener("click", () => {
    if (currentImage < carouselImages.length - 1) {
      currentImage++;
      updateCarouselDisplay();
    }
  });

  updateCarouselDisplay();

  // ========== Contact Form ==========
  const form = document.getElementById("contact-form");
  const status = document.getElementById("form-status");
  const button = form?.querySelector("button");

  if (form && status && button) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      button.disabled = true;
      button.textContent = "Sending...";
      const formData = new FormData(form);

      fetch("https://formsubmit.co/ajax/mahakpateluiux@gmail.com", {
        method: "POST",
        body: formData,
      })
        .then(res => res.json())
        .then(() => {
          status.textContent = "🎉 Message sent successfully!";
          status.style.opacity = "1";
          setTimeout(() => (status.style.opacity = "0"), 5000);
          button.disabled = false;
          button.textContent = "Send Message";
          form.reset();
          triggerCelebration();
        })
        .catch(() => {
          status.textContent = "❌ Something went wrong. Please try again.";
          button.disabled = false;
          button.textContent = "Send Message";
        });
    });

    function triggerCelebration() {
      const emojis = ["🎊", "✨", "🎉", "🎈"];
      for (let i = 0; i < 64; i++) {
        const el = document.createElement("span");
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.className = "celebration-emoji";
        el.style.left = Math.random() * 100 + "vw";
        el.style.top = Math.random() * -100 + "px";
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 3000);
      }
    }
  }
}

waitForThemeButtonsAndInit();