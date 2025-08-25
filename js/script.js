// Smooth scrolling for navbar links
document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop - 60, // Adjusted for fixed navbar
            behavior: 'smooth'
        });
    });
});
