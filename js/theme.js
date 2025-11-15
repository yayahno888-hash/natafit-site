// Theme toggle functionality
(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeText = document.querySelector('.theme-toggle-text');
  const htmlElement = document.documentElement;

  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-theme', currentTheme);
  updateThemeText(currentTheme);

  // Theme toggle handler
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeText(newTheme);
    });
  }

  function updateThemeText(theme) {
    if (themeText) {
      const translations = {
        'ru': { light: 'Светлая', dark: 'Тёмная' },
        'en': { light: 'Light', dark: 'Dark' },
        'de': { light: 'Hell', dark: 'Dunkel' }
      };
      const lang = localStorage.getItem('language') || 'ru';
      themeText.textContent = theme === 'light' 
        ? translations[lang].dark 
        : translations[lang].light;
    }
  }

  // Hamburger menu toggle
  const hamburger = document.getElementById('hamburger');
  const nav = document.getElementById('nav');
  
  if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      nav.classList.toggle('active');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!nav.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
      }
    });
    
    // Close menu when clicking on a link
    nav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
      });
    });
  }
})();
