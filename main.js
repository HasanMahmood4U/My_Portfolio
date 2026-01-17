// Animate on scroll
const sections = document.querySelectorAll('.section');

function checkScroll() {
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add('animate');
        } else {
            section.classList.remove('animate'); // Optional: remove on scroll up
        }
    });
}

window.addEventListener('scroll', checkScroll);
window.addEventListener('load', checkScroll); // Trigger on load

// Hero avatar tilt interaction
const avatar = document.querySelector('.hero-avatar');
const avatarImg = document.querySelector('.hero-avatar-img');

if (avatar && avatarImg) {
    avatar.addEventListener('mousemove', (e) => {
        const rect = avatar.getBoundingClientRect();
        const x = e.clientX - rect.left; // x position within avatar
        const y = e.clientY - rect.top;  // y position within avatar
        const halfWidth = rect.width / 2;
        const halfHeight = rect.height / 2;
        const rotateY = ((x - halfWidth) / halfWidth) * 8; // tilt strength
        const rotateX = -((y - halfHeight) / halfHeight) * 8;

        avatarImg.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
    });

    avatar.addEventListener('mouseleave', () => {
        avatarImg.style.transform = '';
    });
}

// CTA shake on click
const cta = document.querySelector('.cta-button');
if (cta) {
    cta.addEventListener('click', (e) => {
        // add shake class, remove after animation ends
        cta.classList.remove('shake'); // reset in case
        // force reflow to restart animation if needed
        void cta.offsetWidth;
        cta.classList.add('shake');
        function onAnim() {
            cta.classList.remove('shake');
            cta.removeEventListener('animationend', onAnim);
        }
        cta.addEventListener('animationend', onAnim);
    });
}