// Theme toggle functionality
(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const themeText = document.querySelector('.theme-toggle-text');
  const langSelect = document.getElementById('lang-select');
  const htmlElement = document.documentElement;

  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  htmlElement.setAttribute('data-theme', currentTheme);
  
  // Check for saved language preference or default to 'ru'
  const currentLang = localStorage.getItem('language') || 'ru';
  htmlElement.setAttribute('lang', currentLang);
  if (langSelect) {
    langSelect.value = currentLang;
  }
  
  // Initialize translations
  updateAllTranslations(currentLang);
  updateThemeText(currentTheme, currentLang);

  // Theme toggle handler
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = htmlElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      
      htmlElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      
      const lang = localStorage.getItem('language') || 'ru';
      updateThemeText(newTheme, lang);
    });
  }

  // Language selector handler
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      const newLang = e.target.value;
      htmlElement.setAttribute('lang', newLang);
      localStorage.setItem('language', newLang);
      
      updateAllTranslations(newLang);
      
      const theme = htmlElement.getAttribute('data-theme');
      updateThemeText(theme, newLang);
    });
  }

  function updateThemeText(theme, lang) {
    if (themeText) {
      const translations = {
        'ru': { light: 'Светлая', dark: 'Тёмная' },
        'en': { light: 'Light', dark: 'Dark' },
        'de': { light: 'Hell', dark: 'Dunkel' }
      };
      themeText.textContent = theme === 'light' 
        ? translations[lang].dark 
        : translations[lang].light;
    }
  }

  function updateAllTranslations(lang) {
    // Check if translations object exists
    if (typeof translations === 'undefined') {
      console.warn('Translations not loaded');
      return;
    }

    const langData = translations[lang];
    if (!langData) {
      console.warn('Language data not found for:', lang);
      return;
    }

    // Update all elements with data-translate attribute
    document.querySelectorAll('[data-translate]').forEach(element => {
      const key = element.getAttribute('data-translate');
      const translation = getNestedTranslation(langData, key);
      
      if (translation) {
        // Update meta tags
        if (element.tagName === 'META') {
          element.setAttribute('content', translation);
        } 
        // Update title
        else if (element.tagName === 'TITLE') {
          element.textContent = translation;
        }
        // Update regular elements
        else {
          element.textContent = translation;
        }
      }
    });

    // Update placeholders with data-translate-placeholder
    document.querySelectorAll('[data-translate-placeholder]').forEach(element => {
      const key = element.getAttribute('data-translate-placeholder');
      const translation = getNestedTranslation(langData, key);
      
      if (translation && element.tagName === 'INPUT') {
        element.setAttribute('placeholder', translation);
      }
    });
  }

  function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
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
