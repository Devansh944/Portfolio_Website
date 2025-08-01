// Fade-in animation for sections on scroll
document.addEventListener("DOMContentLoaded", function () {
    // Section blocks
    const sections = document.querySelectorAll('.section-block');
    const options = { threshold: 0.12 };
    const reveal = (entries, observer) => {
        entries.forEach((entry, idx) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Animate project cards inside projects section
                if (entry.target.id === "projects") {
                    const cards = entry.target.querySelectorAll('.card');
                    cards.forEach((card, i) => {
                        setTimeout(() => card.classList.add('visible'), 180 * i);
                    });
                }
                // Animate skills boxes
                if (entry.target.id === "skills") {
                    const skills = entry.target.querySelectorAll('.skill-box');
                    skills.forEach((box, i) => {
                        setTimeout(() => box.classList.add('visible'), 60 * i);
                    });
                }
                // Animate experience
                if (entry.target.id === "experience") {
                    const grids = entry.target.querySelectorAll('.grid');
                    grids.forEach((grid, i) => {
                        setTimeout(() => grid.classList.add('visible'), 120 * i);
                    });
                }
                // Animate about text
                if (entry.target.id === "about") {
                    const aboutText = entry.target.querySelector('.text-gray-600');
                    if (aboutText) setTimeout(() => aboutText.classList.add('visible'), 200);
                }
                observer.unobserve(entry.target);
            }
        });
    };
    const observer = new IntersectionObserver(reveal, options);
    sections.forEach((section) => observer.observe(section));

    // Animate intro image and name
    setTimeout(() => {
        const introImg = document.querySelector('.intro-image');
        const devanshName = document.querySelector('.devansh-name');
        if (introImg) introImg.classList.add('visible');
        if (devanshName) devanshName.classList.add('visible');
    }, 300);
});

