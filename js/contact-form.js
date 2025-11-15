// Contact Form Handler
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const successMessage = document.getElementById('formSuccess');
  
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Clear previous errors
    clearErrors();
    
    // Get form data
    const formData = {
      name: document.getElementById('formName').value.trim(),
      phone: document.getElementById('formPhone').value.trim(),
      email: document.getElementById('formEmail').value.trim(),
      message: document.getElementById('formMessage').value.trim(),
      timestamp: new Date().toISOString()
    };
    
    // Validate
    let isValid = true;
    
    if (!formData.name || formData.name.length < 2) {
      showError('formName', 'nameError');
      isValid = false;
    }
    
    if (!formData.phone || !validatePhone(formData.phone)) {
      showError('formPhone', 'phoneError');
      isValid = false;
    }
    
    if (formData.email && !validateEmail(formData.email)) {
      showError('formEmail', 'emailError');
      isValid = false;
    }
    
    if (!formData.message || formData.message.length < 10) {
      showError('formMessage', 'messageError');
      isValid = false;
    }
    
    if (!isValid) return;
    
    // Save to localStorage
    try {
      const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
      submissions.push(formData);
      localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
      
      // Show success message
      successMessage.classList.add('show');
      form.reset();
      
      // Scroll to success message
      successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
      
      // Hide success message after 5 seconds
      setTimeout(() => {
        successMessage.classList.remove('show');
      }, 5000);
      
    } catch (error) {
      console.error('Error saving form data:', error);
      alert('Произошла ошибка. Пожалуйста, свяжитесь со мной напрямую.');
    }
  });
  
  function showError(inputId, errorId) {
    const input = document.getElementById(inputId);
    const error = document.getElementById(errorId);
    if (input) input.classList.add('error');
    if (error) error.classList.add('show');
  }
  
  function clearErrors() {
    document.querySelectorAll('.error').forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.error-message').forEach(el => el.classList.remove('show'));
  }
  
  function validatePhone(phone) {
    // Basic phone validation - accepts various formats
    const phoneRegex = /^[\d\s\+\-\(\)]{8,}$/;
    return phoneRegex.test(phone);
  }
  
  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Clear error on input
  ['formName', 'formPhone', 'formEmail', 'formMessage'].forEach(id => {
    const input = document.getElementById(id);
    if (input) {
      input.addEventListener('input', () => {
        input.classList.remove('error');
        const errorId = id.replace('form', '').toLowerCase() + 'Error';
        const error = document.getElementById(errorId);
        if (error) error.classList.remove('show');
      });
    }
  });
});
