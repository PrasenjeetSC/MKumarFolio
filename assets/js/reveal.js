document.addEventListener("DOMContentLoaded", () => {

    /* SCROLL REVEAL */
    const reveals = document.querySelectorAll('.reveal');

    const revealObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            revealObserver.unobserve(entry.target);
        }
        });
    }, { threshold: 0.15 });

    reveals.forEach(el => revealObserver.observe(el));

});