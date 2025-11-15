// Share functionality
const ShareButtons = {
  init() {
    this.url = window.location.href;
    this.title = document.title;
    this.text = 'Профессиональный фитнес-тренер в Германии';
    this.setupCopyButton();
  },

  openShareWindow(url, width = 600, height = 400) {
    const left = (screen.width - width) / 2;
    const top = (screen.height - height) / 2;
    window.open(
      url,
      'share',
      `width=${width},height=${height},left=${left},top=${top},toolbar=0,status=0`
    );
  },

  shareWhatsApp() {
    const text = encodeURIComponent(`${this.text}\n${this.url}`);
    this.openShareWindow(`https://wa.me/?text=${text}`);
  },

  shareTelegram() {
    const text = encodeURIComponent(this.text);
    const url = encodeURIComponent(this.url);
    this.openShareWindow(`https://t.me/share/url?url=${url}&text=${text}`);
  },

  shareVK() {
    const url = encodeURIComponent(this.url);
    const title = encodeURIComponent(this.title);
    this.openShareWindow(`https://vk.com/share.php?url=${url}&title=${title}`);
  },

  shareFacebook() {
    const url = encodeURIComponent(this.url);
    this.openShareWindow(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
  },

  shareTwitter() {
    const text = encodeURIComponent(this.text);
    const url = encodeURIComponent(this.url);
    this.openShareWindow(`https://twitter.com/intent/tweet?text=${text}&url=${url}`);
  },

  async copyLink(button) {
    try {
      await navigator.clipboard.writeText(this.url);
      
      // Visual feedback
      const originalHTML = button.innerHTML;
      button.classList.add('copied');
      button.innerHTML = '✓';
      
      setTimeout(() => {
        button.classList.remove('copied');
        button.innerHTML = originalHTML;
      }, 2000);
    } catch (err) {
      // Fallback for older browsers
      const input = document.createElement('input');
      input.value = this.url;
      document.body.appendChild(input);
      input.select();
      document.execCommand('copy');
      document.body.removeChild(input);
      
      button.classList.add('copied');
      setTimeout(() => button.classList.remove('copied'), 2000);
    }
  },

  setupCopyButton() {
    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('share-copy') || 
          e.target.closest('.share-copy')) {
        const button = e.target.classList.contains('share-copy') 
          ? e.target 
          : e.target.closest('.share-copy');
        this.copyLink(button);
      }
    });
  }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  ShareButtons.init();
});
