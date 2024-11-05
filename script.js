let lastScrollPosition = 0;
const navbar = document.querySelector(".navbar");
const dropdowns = document.querySelectorAll(".nav-item.dropdown");
let dropdownHovered = false;

// Track if a dropdown is hovered
dropdowns.forEach(dropdown => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    dropdown.addEventListener('mouseenter', () => {
        dropdownHovered = true;
        dropdownMenu.style.display = 'block';
        navbar.classList.remove("navbar-hidden");
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdownHovered = false;
        setTimeout(() => {
            if (!dropdownHovered) {
                dropdownMenu.style.display = 'none';
            }
        }, 200);
    });

    dropdownMenu.addEventListener('mouseenter', () => {
        dropdownHovered = true;
    });

    dropdownMenu.addEventListener('mouseleave', () => {
        dropdownHovered = false;
        setTimeout(() => {
            if (!dropdownHovered) {
                dropdownMenu.style.display = 'none';
            }
        }, 200);
    });
});

window.addEventListener("scroll", () => {
    const currentScrollPosition = window.scrollY;

    if (!dropdownHovered) {
        if (currentScrollPosition > 80) {
            if (currentScrollPosition > lastScrollPosition && currentScrollPosition >= 300) {
                navbar.classList.add("navbar-hidden");
                navbar.classList.remove("scrolled");
            } else {
                navbar.classList.remove("navbar-hidden");
                navbar.classList.add("scrolled");
            }
        } else {
            navbar.classList.remove("scrolled", "navbar-hidden");
        }
    }

    lastScrollPosition = currentScrollPosition;
});
