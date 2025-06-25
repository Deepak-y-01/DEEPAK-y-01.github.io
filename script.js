document.addEventListener('DOMContentLoaded', function() {
    var modeToggle = document.getElementById('mode-toggle');
    var body = document.body;

    // Check for saved mode preference in localStorage
    const savedMode = localStorage.getItem('theme');
    if (savedMode) {
        body.classList.remove('dark-mode', 'light-mode'); // Remove default
        body.classList.add(savedMode);
        // Update icon based on saved mode
        if (savedMode === 'light-mode') {
            modeToggle.innerHTML = '<i class="material-icons">brightness_2</i>'; // Moon icon for light mode
        } else {
            modeToggle.innerHTML = '<i class="material-icons">brightness_4</i>'; // Sun icon for dark mode
        }
    }

    modeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        if (body.classList.contains('dark-mode')) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
            modeToggle.innerHTML = '<i class="material-icons">brightness_2</i>'; // Moon icon for light mode
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            modeToggle.innerHTML = '<i class="material-icons">brightness_4</i>'; // Sun icon for dark mode
        }
    });

    // Initialize Materialize Tooltips
    var elems = document.querySelectorAll('.tooltipped');
    M.Tooltip.init(elems, {});
});
