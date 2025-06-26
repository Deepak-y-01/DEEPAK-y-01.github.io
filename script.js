/* --- Google Fonts & Global Reset --- */
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700&family=Poppins:wght@300;400;500;600&display=swap');
@import url('https://fonts.googleapis.com/icon?family=Material+Icons+Sharp');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* --- THEME & FONT VARIABLES --- */
:root {
    /* Fonts */
    --font-primary: 'Poppins', sans-serif;
    --font-headings: 'Playfair Display', serif;

    /* Light Theme Colors (Pastel & Professional) */
    --bg-light-1: #e0eafc;
    --bg-light-2: #cfdef3;
    --text-color-light: #2c3e50;
    --card-bg-light: rgba(255, 255, 255, 0.45); /* CHANGED: Was 0.5, made slightly more transparent */
    --card-border-light: rgba(209, 213, 219, 0.5); /* CHANGED: Was an opaque white, now a subtle translucent grey */
    --accent-color-light: #3498db;
    --shadow-color-light: rgba(44, 62, 80, 0.1);
    
    /* Dark Theme Colors (Deep & Modern) */
    --bg-dark-1: #0f2027;
    --bg-dark-2: #203a43;
    --bg-dark-3: #2c5364;
    --text-color-dark: #ecf0f1;
    --card-bg-dark: rgba(22, 22, 22, 0.45);
    --card-border-dark: rgba(255, 255, 255, 0.12);
    --accent-color-dark: #1abc9c;
    --shadow-color-dark: rgba(0, 0, 0, 0.3);
}

/* --- THEME STYLES & ANIMATED BACKGROUND --- */
html, body {
    font-family: var(--font-primary);
    transition: background-color 0.5s ease, color 0.5s ease;
    scroll-behavior: smooth;
    width: 100%;
    height: 100%;
}

html.dark-theme {
    color: var(--text-color-dark);
    background: linear-gradient(315deg, var(--bg-dark-1), var(--bg-dark-2), var(--bg-dark-3));
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
}

html.light-theme {
    color: var(--text-color-light);
    background: linear-gradient(315deg, var(--bg-light-1), var(--bg-light-2));
    background-size: 400% 400%;
    animation: gradientAnimation 15s ease infinite;
}

@keyframes gradientAnimation {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
}


/* --- LAYOUT & BASE STYLES --- */
.container {
    max-width: 960px;
    margin: 0 auto;
    padding: 0 1rem;
}

a {
    transition: color 0.3s;
}
html.dark-theme a { color: var(--accent-color-dark); }
html.light-theme a { color: var(--accent-color-light); }
a:hover { text-decoration: underline; }

h1, h2, h3, h4 {
    font-family: var(--font-headings);
    font-weight: 700;
}

h1 { font-size: 2.8rem; }
h2 { font-size: 1.9rem; }
h3 { font-size: 1.35rem; }

ul { list-style-position: inside; padding-left: 1rem; }
li { margin-bottom: 0.5rem; line-height: 1.6; }

/* --- SCROLL ANIMATION --- */
[data-scroll-animation] {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}
[data-scroll-animation].is-visible {
    opacity: 1;
    transform: translateY(0);
}

/* --- HEADER --- */
header {
    position: sticky;
    top: 0;
    z-index: 100;
    padding: 1rem 0;
    margin-bottom: 2rem;
    border-radius: 0;
    border-top: 0;
    border-left: 0;
    border-right: 0;
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo {
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    font-family: var(--font-primary); /* Keep logo font consistent */
}

.header-controls {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.language-switcher {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    background: rgba(128, 128, 128, 0.1);
    padding: 0.25rem 0.5rem;
    border-radius: 20px;
}
.lang-btn {
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    font-weight: 600;
    opacity: 0.6;
    transition: opacity 0.3s ease;
}
.lang-btn.active { opacity: 1; }
.lang-btn:hover { opacity: 1; }
.language-switcher span { opacity: 0.4; }


#theme-toggle {
    background: transparent;
    border: none;
    cursor: pointer;
    color: inherit;
}
#theme-toggle .material-icons-sharp { font-size: 28px; vertical-align: middle; }
html.dark-theme #dark-mode-icon { display: none; }
html.light-theme #light-mode-icon { display: none; }


/* --- GLASS CARD STYLING --- */
.glass-card {
    border-radius: 20px;
    padding: 2.5rem;
    margin-bottom: 1.5rem;
    transition: background-color 0.4s ease, border 0.4s ease, box-shadow 0.4s ease;
    backdrop-filter: blur(15px);
    -webkit-backdrop-filter: blur(15px);
}

html.dark-theme .glass-card {
    background: var(--card-bg-dark);
    border: 1px solid var(--card-border-dark);
    box-shadow: 0 8px 32px 0 var(--shadow-color-dark);
}
html.light-theme .glass-card {
    background: var(--card-bg-light);
    border: 1px solid var(--card-border-light);
    box-shadow: 0 8px 32px 0 var(--shadow-color-light);
}

/* --- SECTION SPECIFIC STYLES --- */
#hero { display: flex; align-items: center; gap: 2.5rem; }
.hero-image img {
    width: 150px; height: 150px; border-radius: 50%;
    object-fit: cover;
}
html.dark-theme .hero-image img { border: 4px solid var(--card-border-dark); }
html.light-theme .hero-image img { border: 4px solid var(--card-border-light); }

.hero-content h1 { margin-bottom: 1rem; }
.hero-content p { line-height: 1.7; margin-bottom: 1.5rem; }
.social-links { display: flex; gap: 1rem; align-items: center; }
.social-links a img { width: 36px; height: 36px; transition: transform 0.2s ease-in-out; border-radius: 50%;}
.social-links a:hover img { transform: translateY(-4px) scale(1.1); }
html.dark-theme .social-links a img { background: #fff; }

section h2 { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.5rem; }
section#summary h2 { margin-bottom: 1rem; }

.skills-container { display: flex; flex-wrap: wrap; gap: 0.75rem; }
.skill-tag { padding: 0.5rem 1rem; border-radius: 20px; font-size: 0.9rem; font-weight: 500; }
html.dark-theme .skill-tag { background-color: rgba(255, 255, 255, 0.08); }
html.light-theme .skill-tag { background-color: rgba(0, 0, 0, 0.06); }

.experience-item, .education-item { margin-bottom: 1.5rem; }
.experience-item:last-child, .education-item:last-child { margin-bottom: 0; }
.experience-header { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.5rem; flex-wrap: wrap; gap: 0.5rem; }
html.dark-theme .experience-header h3 { color: var(--accent-color-dark); }
html.light-theme .experience-header h3 { color: var(--accent-color-light); }
.experience-header span { font-style: italic; font-size: 0.9rem; flex-shrink: 0; opacity: 0.8; }

.education-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; }
.education-item p { font-size: 0.9rem; opacity: 0.8; }

.interests-container { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; }
.interest-item { display: flex; align-items: center; gap: 0.75rem; }

/* --- COLLAPSIBLE SECTIONS --- */
.collapsible-header { display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
.collapsible-header h2 { margin-bottom: 0; }
.collapsible-icon { transition: transform 0.3s ease; }
.collapsible-content { max-height: 0; overflow: hidden; transition: max-height 0.4s ease-out, padding-top 0.4s ease-out; }
.collapsible.active .collapsible-content { max-height: 1000px; padding-top: 1.5rem; }
.collapsible.active .collapsible-icon { transform: rotate(135deg); }

/* --- RESPONSIVE DESIGN --- */
@media (max-width: 768px) {
    h1 { font-size: 2.2rem; }
    h2 { font-size: 1.7rem; }
    .glass-card { padding: 1.5rem; }
    #hero { flex-direction: column; text-align: center; }
    .social-links { justify-content: center; }
    .experience-header { flex-direction: column; align-items: flex-start; }
}
