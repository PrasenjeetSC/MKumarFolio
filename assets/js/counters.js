document.addEventListener("DOMContentLoaded", () => {

    /* Animated Counters */
    const counters = document.querySelectorAll('.counter');
    const statsSection = document.getElementById('statsSection');
    let started = false;

    function runCounters() {
        counters.forEach(counter => {
        const target = +counter.dataset.target;
        const duration = 2200; // milliseconds (2.2 seconds)
        const startTime = performance.now();

        function update(now) {
            const progress = Math.min((now - startTime) / duration, 1);
            const value = Math.floor(progress * target);

            counter.textContent = value + '+';

            if (progress < 1) {
            requestAnimationFrame(update);
            } else {
            counter.textContent = target + '+';
            }
        }

        requestAnimationFrame(update);
        });
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
        if (entry.isIntersecting && !started) {
            started = true;
            runCounters();
        }
        });
    }, { threshold: 0.4 });

    observer.observe(statsSection);

});