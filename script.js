document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.animated');

    function checkVisibility() {
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        if (rect.top <= windowHeight * 0.75) {
          element.classList.add('show');
        }
      });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Verifica a visibilidade inicialmente
  });