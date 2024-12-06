document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const menuItems = document.querySelector('.menu-items');

    navToggle.addEventListener('click', () => {
        menuItems.classList.toggle('active');
        
        // Optional: Animate hamburger to close icon
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        const isClickInsideMenu = menuItems.contains(event.target);
        const isClickOnToggle = navToggle.contains(event.target);
        
        if (!isClickInsideMenu && !isClickOnToggle && menuItems.classList.contains('active')) {
            menuItems.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
});