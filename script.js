document.addEventListener('DOMContentLoaded', () => {

  // Mobile navigation menu
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navContent = document.getElementById('nav-content');

  if (mobileBtn && navContent) {
    mobileBtn.addEventListener('click', () => {
      navContent.classList.toggle('hidden');
    });

    // Close the menu after tapping a link on mobile
    navContent.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
          navContent.classList.add('hidden');
        }
      });
    });
  }

  // Quote carousel data
  const quotes = [
    {
      quote: '"Humility is not thinking less of yourself, but thinking of yourself less."',
      author: 'C.S. Lewis'
    },
    {
      quote: '"The most important thing is to try and inspire people so that they can be great in whatever they want to do."',
      author: 'Kobe Bryant'
    }
    // To add your Joni Mitchell favorite, paste it here:
    // , { quote: '"YOUR QUOTE HERE"', author: 'Joni Mitchell, Both Sides Now' }
  ];

  let currentQuoteIndex = 0;

  const quoteDisplay = document.getElementById('quote-display');
  const prevBtn = document.getElementById('prev-quote');
  const nextBtn = document.getElementById('next-quote');

  function updateQuoteDisplay() {
    if (!quoteDisplay) return;

    quoteDisplay.style.opacity = '0';

    setTimeout(() => {
      const current = quotes[currentQuoteIndex];

      quoteDisplay.innerHTML = `
        <blockquote class="text-2xl sm:text-3xl font-extrabold text-blue-700 leading-tight mb-4 tracking-tight"></blockquote>
        <p class="font-serif-custom text-gray-600 italic text-base md:text-lg"></p>
      `;
      quoteDisplay.querySelector('blockquote').textContent = current.quote;
      quoteDisplay.querySelector('p').textContent = current.author;

      quoteDisplay.style.opacity = '1';
    }, 200);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
      updateQuoteDisplay();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
      updateQuoteDisplay();
    });
  }

  // Automatically update the copyright year
  const yearSpan = document.getElementById('year-span');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
