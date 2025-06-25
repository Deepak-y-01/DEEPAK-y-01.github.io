document.addEventListener('DOMContentLoaded', () => {
    // --- THEME TOGGLE LOGIC ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const lightModeIcon = document.getElementById('light-mode-icon');
    const darkModeIcon = document.getElementById('dark-mode-icon');

    const applySavedTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'light') {
            body.classList.add('light-theme');
            body.classList.remove('dark-theme');
            lightModeIcon.style.display = 'none';
            darkModeIcon.style.display = 'inline-block';
        } else {
            body.classList.add('dark-theme');
            body.classList.remove('light-theme');
            lightModeIcon.style.display = 'inline-block';
            darkModeIcon.style.display = 'none';
        }
    };

    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-theme')) {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            localStorage.setItem('theme', 'light');
            lightModeIcon.style.display = 'none';
            darkModeIcon.style.display = 'inline-block';
        } else {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            lightModeIcon.style.display = 'inline-block';
            darkModeIcon.style.display = 'none';
        }
    });

    applySavedTheme();

    // --- COLLAPSIBLE SECTION LOGIC ---
    const collapsibleHeaders = document.querySelectorAll('.collapsible-header');

    collapsibleHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const collapsibleSection = header.parentElement;
            const icon = header.querySelector('.collapsible-icon');

            collapsibleSection.classList.toggle('active');

            if (collapsibleSection.classList.contains('active')) {
                icon.textContent = 'remove';
            } else {
                icon.textContent = 'add';
            }
        });
    });
});