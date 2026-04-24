alert("Welcome to my Portfolio");

/* ----------------------------------------
   CONTENT TOGGLE — "See more about me"
   Changes button text and shows/hides content
---------------------------------------- */
function toggleContent() {
    const extra = document.getElementById('extraContent');
    const btn = document.getElementById('toggleBtn');

    if (!extra || !btn) return;

    const isHidden = extra.classList.contains('hidden');

    if (isHidden) {
        extra.classList.remove('hidden');
        btn.textContent = 'Hide information';
        btn.style.background = 'var(--clr-muted)';
    } else {
        extra.classList.add('hidden');
        btn.textContent = 'See more about me';
        btn.style.background = 'var(--clr-accent)';
        btn.style.color = '#0a0a0f';
    }
}

// Select elements
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelector(".nav-links");

// Click event
menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});