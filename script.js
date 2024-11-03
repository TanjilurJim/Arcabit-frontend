let lastScrollPosition = 0;

window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    const currentScrollPosition = window.scrollY;

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

    // Update the last scroll position to the current one
    lastScrollPosition = currentScrollPosition;
});
