document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const lightModeIcon = document.getElementById('light-mode-icon');
    const darkModeIcon = document.getElementById('dark-mode-icon');

    // Function to apply the saved theme on load
    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
            lightModeIcon.style.display = 'none';
            darkModeIcon.style.display = 'inline-block';
        } else {
            // Default to dark theme
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            lightModeIcon.style.display = 'inline-block';
            darkModeIcon.style.display = 'none';
        }
    };

    // Event listener for the toggle button
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            // Switch to light theme
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            lightModeIcon.style.display = 'none';
            darkModeIcon.style.display = 'inline-block';
        } else {
            // Switch to dark theme
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            lightModeIcon.style.display = 'inline-block';
            darkModeIcon.style.display = 'none';
        }
    });

    // Apply the theme when the page loads
    applySavedTheme();
});