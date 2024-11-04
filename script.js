let lastScrollPosition = 0;
const navbar = document.querySelector(".navbar");
const dropdowns = document.querySelectorAll(".nav-item.dropdown");
let dropdownHovered = false; // Track if a dropdown is hovered

// Add event listeners for hover on dropdowns
dropdowns.forEach(dropdown => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');

    dropdown.addEventListener('mouseenter', () => {
        dropdownHovered = true;
        dropdownMenu.style.display = 'block'; // Ensure the dropdown stays open when hovered
        navbar.classList.remove("navbar-hidden");
    });

    dropdown.addEventListener('mouseleave', () => {
        dropdownHovered = false;
        setTimeout(() => {
            if (!dropdownHovered) {
                dropdownMenu.style.display = 'none'; // Hide dropdown after delay
            }
        }, 200); // Delay to allow mouse to move between elements
    });

    dropdownMenu.addEventListener('mouseenter', () => {
        dropdownHovered = true; // Keep dropdown open when mouse is on the menu
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

    if (!dropdownHovered) { // Only apply scroll behavior if not interacting with dropdown
        if (currentScrollPosition > 80) {
            if (currentScrollPosition > lastScrollPosition && currentScrollPosition >= 300) {
                // Scrolling down: hide the navbar
                navbar.classList.add("navbar-hidden");
                navbar.classList.remove("scrolled");
            } else {
                // Scrolling up: show the navbar
                navbar.classList.remove("navbar-hidden");
                navbar.classList.add("scrolled");
            }
        } else {
            // At the top of the page, reset to the original state
            navbar.classList.remove("scrolled", "navbar-hidden");
        }
    }

    // Update the last scroll position to the current one
    lastScrollPosition = currentScrollPosition;
});
