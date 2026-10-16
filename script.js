document.addEventListener('DOMContentLoaded', () => {

    // Mobile Navigation Toggle Controller
    const b = document.getElementById('mobile-menu-btn');
    const n = document.getElementById('nav-content');

    if (b && n) {
        b.addEventListener('click', () => {
            const hidden = n.classList.toggle('hidden');
            b.setAttribute('aria-expanded', String(!hidden));
        });

        n.querySelectorAll('a').forEach(a =>
            a.addEventListener('click', () => {
                if (window.innerWidth < 768) {
                    n.classList.add('hidden');
                    b.setAttribute('aria-expanded', 'false');
                }
            })
        );
    }

    // Quotes Carousel Controller
    const quotes = [
        {
            quote: '"The most important thing is to try and inspire people so that they can be great in whatever they want to do."',
            author: 'Kobe Bryant'
        },
        {
            quote: '"Humility is not thinking less of yourself, but thinking of yourself less."',
            author: 'C.S. Lewis'
        },
        {
            quote: '"Something\'s lost, but something\'s gained, in living everyday."',
            author: 'Joni Mitchell, Both Sides Now'
        }
    ];

    let i = 0;
    const display = document.getElementById('quote-display');

    function updateQuote() {
        if (!display) return;

        display.style.opacity = '0';

        setTimeout(() => {
            const blockquote = display.querySelector('blockquote');
            const paragraph = display.querySelector('p');

            if (blockquote) {
                blockquote.textContent = quotes[i].quote;
            }

            if (paragraph) {
                paragraph.textContent = quotes[i].author;
            }

            display.style.opacity = '1';
        }, 200);
    }

    document.getElementById('prev-quote')?.addEventListener('click', () => {
        i = (i + quotes.length - 1) % quotes.length;
        updateQuote();
    });

    document.getElementById('next-quote')?.addEventListener('click', () => {
        i = (i + 1) % quotes.length;
        updateQuote();
    });

    // Dynamic Year Update in Footer
    document.querySelectorAll('.year-span').forEach(
        e => e.textContent = new Date().getFullYear()
    );

});
