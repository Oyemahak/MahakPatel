// main.js — Global JS Orchestrator 🎩
// Handles theme switching, dynamic imports, carousel, and contact form

function waitForThemeButtonsAndInit() {
  if (document.querySelectorAll('.theme-btn').length === 0) {
    requestAnimationFrame(waitForThemeButtonsAndInit);
    return;
  }

  const themeBtns = document.querySelectorAll('.theme-btn');
  const savedTheme = localStorage.getItem('portfolio-theme') || 'default';

  // Dynamically import only what's needed 🌈
  async function applyTheme(theme) {
    document.body.className = `${theme}-theme`;
    localStorage.setItem('portfolio-theme', theme);
    themeBtns.forEach(b => b.classList.remove('active'));
    document.querySelector(`[data-theme="${theme}"]`)?.classList.add('active');

    // Clear any leftovers
    document.querySelectorAll('.snowflake, .raindrop, .ripple, .star, .moon, .lightning')
      .forEach(el => el.remove());

    if (theme === 'moon') {
      const { initMoonTheme } = await import('./moonTheme.js');
      initMoonTheme();
    } else if (theme === 'snow') {
      const { initSnowTheme } = await import('./snowTheme.js');
      initSnowTheme();
    } else if (theme === 'rain') {
      const { initRainTheme } = await import('./rainTheme.js');
      initRainTheme();
    }
  }

  // Theme button logic 🖱️
  themeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      applyTheme(btn.dataset.theme);
    });
  });

  applyTheme(savedTheme);

  // Carousel Controls 🎠
  const carouselImages = document.querySelectorAll(".mobile-companies-img");
  const prevBtn = document.querySelector(".arrow-left");
  const nextBtn = document.querySelector(".arrow-right");
  let currentImage = 0;

  function updateCarousel() {
    carouselImages.forEach((img, i) =>
      img.classList.toggle("active", i === currentImage)
    );
    if (prevBtn && nextBtn) {
      prevBtn.disabled = currentImage === 0;
      nextBtn.disabled = currentImage === carouselImages.length - 1;
    }
  }

  prevBtn?.addEventListener("click", () => {
    if (currentImage > 0) currentImage--;
    updateCarousel();
  });

  nextBtn?.addEventListener("click", () => {
    if (currentImage < carouselImages.length - 1) currentImage++;
    updateCarousel();
  });

  updateCarousel();

  // Contact Form 💌
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
          status.textContent = "🎉 Message sent!";
          status.style.opacity = "1";
          setTimeout(() => (status.style.opacity = "0"), 5000);
          button.disabled = false;
          button.textContent = "Send Message";
          form.reset();
          triggerCelebration();
        })
        .catch(() => {
          status.textContent = "❌ Oops! Try again.";
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

  // Mobile Menu 🍔
  const menuButton = document.querySelector('.mobile-menu-icon');
  const menu = document.querySelector('.desktop-menu');
  if (menuButton && menu) {
    menuButton.addEventListener('click', () => {
      const isOpen = menu.classList.toggle('active');
      menuButton.setAttribute('aria-expanded', isOpen);
      menuButton.querySelector('i').className = isOpen ? 'fas fa-times' : 'fas fa-bars';
    });
  }

  // Project Tabs Switcher 🔀
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
}

waitForThemeButtonsAndInit();