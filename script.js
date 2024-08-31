tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {}
    }
  }


  tailwind.config = {
    darkMode: 'class',
    theme: {
      extend: {}
    }
  }

  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }

  const menuButton = document.getElementById('mobile-menu-button');
  const closeButton = document.getElementById('mobile-menu-close');
  const mobileMenu = document.getElementById('mobile-menu');

  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  closeButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });