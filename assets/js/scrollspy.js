document.addEventListener("DOMContentLoaded", () => {

    /* SCROLL SPY */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const sectionObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
            link.classList.toggle(
                'active',
                link.dataset.section === entry.target.id
            );
            });
        }
        });
    }, { threshold: 0.45 });

    sections.forEach(section => sectionObserver.observe(section));

});