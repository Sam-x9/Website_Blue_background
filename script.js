document.addEventListener('DOMContentLoaded', () => {

    const b = document.getElementById('mobile-menu-btn');
    const n = document.getElementById('nav-content');

    if (b && n) {

        b.addEventListener('click', () => {
            const hidden = n.classList.toggle('hidden');
            b.setAttribute('aria-expanded', String(!hidden));
        });

        n.querySelectorAll('a').forEach(a =>
            a.addEventListener('click', () => {
                if (innerWidth < 768) {
                    n.classList.add('hidden');
                    b.setAttribute('aria-expanded', 'false');
                }
            })
        );
    }

    const quotes = [
        {
            quote: '“The best way to predict the future is to create it.”',
            author: 'A thought about learning and growth'
        },
        {
            quote: '“Every problem is an opportunity to learn something new.”',
            author: 'My approach to IT support'
        },
        {
            quote: '“Technology works best when it helps people.”',
            author: 'My professional philosophy'
        }
    ];

    let i = 0;

    const display = document.getElementById('quote-display');

    function update() {

        if (!display) return;

        display.style.opacity = '0';

        setTimeout(() => {
            display.querySelector('blockquote').textContent = quotes[i].quote;
            display.querySelector('p').textContent = quotes[i].author;
            display.style.opacity = '1';
        }, 200);
    }

    document.getElementById('prev-quote')?.addEventListener('click', () => {
        i = (i + quotes.length - 1) % quotes.length;
        update();
    });

    document.getElementById('next-quote')?.addEventListener('click', () => {
        i = (i + 1) % quotes.length;
        update();
    });

    document.querySelectorAll('.year-span').forEach(
        e => e.textContent = new Date().getFullYear()
    );

});
