document.addEventListener('DOMContentLoaded', () => {

    // --- THEME TOGGLER ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Function to apply the saved theme on page load
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        // The default is dark theme (from HTML), so we only need to act if the saved theme is 'light'
        if (savedTheme === 'light') {
            body.classList.remove('dark-theme');
        }
    };

    // Add click event listener to the toggle button
    themeToggleBtn.addEventListener('click', () => {
        // Toggle the 'dark-theme' class on the body
        body.classList.toggle('dark-theme');

        // Save the user's preference to localStorage
        if (body.classList.contains('dark-theme')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    });
    
    // Apply the saved theme when the page loads
    applySavedTheme();


    // --- COLLAPSIBLE SECTIONS ---
    const collapsibles = document.querySelectorAll('.collapsible');

    collapsibles.forEach(collapsible => {
        const header = collapsible.querySelector('.collapsible-header');
        const icon = collapsible.querySelector('.collapsible-icon');

        header.addEventListener('click', () => {
            // Toggle the 'active' class on the main .collapsible element
            collapsible.classList.toggle('active');
            
            // Change the icon based on the active state
            if (collapsible.classList.contains('active')) {
                icon.textContent = 'remove';
            } else {
                icon.textContent = 'add';
            }
        });
    });

});
