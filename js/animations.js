// Animación del navbar al hacer scroll
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const heroHeight = document.querySelector('.hero-carousel').offsetHeight;

    window.addEventListener('scroll', function() {
        if (window.scrollY > heroHeight - 100) {
            navbar.classList.add('navbar-scrolled', 'bg-dark');
        } else {
            navbar.classList.remove('navbar-scrolled', 'bg-dark');
        }
    });

    // Animación de números en las estadísticas
    const counters = document.querySelectorAll('.counter-value');
    const options = {
        threshold: 1,
        rootMargin: "0px"
    };

    const startCounting = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = entry.target;
                const targetNumber = parseInt(target.getAttribute('data-target'));
                let count = 0;
                const updateCount = () => {
                    const increment = targetNumber / 50;
                    if (count < targetNumber) {
                        count += increment;
                        target.textContent = Math.ceil(count);
                        requestAnimationFrame(updateCount);
                    } else {
                        target.textContent = targetNumber;
                    }
                };
                updateCount();
                observer.unobserve(target);
            }
        });
    };

    const observer = new IntersectionObserver(startCounting, options);
    counters.forEach(counter => observer.observe(counter));

    // Animación suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
