
document.addEventListener('DOMContentLoaded', () => {

  // Mobile navigation menu
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const navContent = document.getElementById('nav-content');

  if (mobileBtn && navContent) {
    mobileBtn.addEventListener('click', () => {
      navContent.classList.toggle('hidden');
    });
  }

  // Quote carousel data
  const quotes = [
    {
      quote: '"Humility is not thinking less of yourself, but thinking of yourself less."',
      author: 'C.S. Lewis'
    },
    {
      quote: '"Technology is best when it brings people together."',
      author: 'Matt Mullenweg'
    },
    {
      quote: '"Precision, empathy, and continuous learning build the foundation for impactful technical innovation."',
      author: 'Personal Philosophy'
    }
  ];

  let currentQuoteIndex = 0;

  const quoteDisplay = document.getElementById('quote-display');
  const prevBtn = document.getElementById('prev-quote');
  const nextBtn = document.getElementById('next-quote');

  function updateQuoteDisplay() {
    if (!quoteDisplay) return;

    quoteDisplay.style.opacity = '0';

    setTimeout(() => {
      quoteDisplay.innerHTML = `
        <blockquote class="text-2xl sm:text-3xl font-extrabold text-blue-700 mb-4">
          ${quotes[currentQuoteIndex].quote}
        </blockquote>
        <p class="font-serif-custom text-gray-600 italic">
          ${quotes[currentQuoteIndex].author}
        </p>
      `;

      quoteDisplay.style.opacity = '1';
    }, 200);
  }

  // Previous quote button
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      currentQuoteIndex =
        (currentQuoteIndex - 1 + quotes.length) % quotes.length;

      updateQuoteDisplay();
    });
  }

  // Next quote button
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      currentQuoteIndex =
        (currentQuoteIndex + 1) % quotes.length;

      updateQuoteDisplay();
    });
  }

  // Automatically update the copyright year
  const yearSpan = document.getElementById('year-span');

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

});
