// Smooth Scroll for Navigation Links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop - 50, // Offset for fixed navbar
            behavior: 'smooth'
        });

        // Highlight Active Link
        document.querySelectorAll('nav a').forEach(link => link.classList.remove('active'));
        this.classList.add('active');
    });
});

// Change Navbar Background on Scroll
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Dropdown Menu Toggle on Click (for mobile)
document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('click', function() {
        let submenu = this.nextElementSibling;
        if (submenu && submenu.tagName === 'UL') {
            submenu.classList.toggle('open');
        }
    });
});

// Auto-Collapse Dropdown on Outside Click
window.addEventListener('click', (e) => {
    if (!e.target.closest('nav')) {
        document.querySelectorAll('nav ul li ul').forEach(ul => {
            ul.classList.remove('open');
        });
    }
});