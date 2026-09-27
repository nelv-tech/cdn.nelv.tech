document.addEventListener("DOMContentLoaded", () => {
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15
    };
    const revealCallback = (entries, observer) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("active");
                }, index * 150);
                observer.unobserve(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(revealCallback, observerOptions);
    const revealElements = document.querySelectorAll(".wf-reveal, .wf-reveal_dy");
    revealElements.forEach(element => observer.observe(element));
});