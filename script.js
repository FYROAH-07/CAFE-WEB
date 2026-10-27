
/* ==================================
   SLOW BREW — INTERACTIONS
   ================================== */

// 1. MOBILE NAVIGATION

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
        const isOpen = navLinks.classList.toggle("open");

        menuToggle.setAttribute("aria-expanded", String(isOpen));
        menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
            menuToggle.setAttribute("aria-expanded", "false");
            menuToggle.textContent = "☰";
        });
    });
}

// 2. SCROLL REVEAL ANIMATIONS

const revealElements = document.querySelectorAll(
    ".story, .menu-section, .visit, .menu-card, .coffee-card, .menu-heading, .gallery-item"
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
});

if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach((element) => {
        revealObserver.observe(element);
    });
} else {
    revealElements.forEach((element) => {
        element.classList.add("visible");
    });
}

// 3. UPDATE NAVIGATION WHEN SCROLLING

const navbar = document.querySelector(".navbar");

window.addEventListener(
    "scroll",
    () => {
        if (navbar) {
            navbar.classList.toggle("scrolled", window.scrollY > 30);
        }
    },
    { passive: true }
);

// 4. CURRENT YEAR IN CONSOLE FOR TESTING

console.log("SLOW BREW is ready. Take it slow. ☕");
