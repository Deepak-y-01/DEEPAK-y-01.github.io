// Wait for the entire HTML document to be loaded and parsed before running the script.
document.addEventListener('DOMContentLoaded', () => {

    /* ==================================================================
       TRANSLATION DATA OBJECT
       - Contains all text content for English ('en') and Hindi ('hi').
       - The 'data-key' attribute in the HTML corresponds to the keys here.
    ================================================================== */
    const translations = {
        en: {
            heroTitle: "Hey there, I'm Deepak Yadav 👋",
            heroSubtitle: "A PGDM Marketing student with a passion for digital strategy and over two years of freelance experience in digital marketing. I turn ideas into measurable results, helping brands shine online. 🚀",
            summaryTitle: "Professional Summary",
            summaryText: "Highly motivated and results-oriented PGDM student specializing in Marketing and HR, with 2+ years of experience as a freelance digital marketer. Proven ability to develop and execute successful marketing strategies, conduct market research, and analyse competitor activities. Adept at content creation, social media marketing, and utilizing data analysis to inform marketing decisions. Seeking a challenging role in a dynamic environment where I can contribute to the growth of the organization while further developing my marketing and analytical skills.",
            skillsTitle: "Skills",
            skillContentWriting: "Content Writing",
            skillMarketResearch: "Market Research",
            skillNegotiation: "Negotiation",
            internshipTitle: "Internship Experience",
            internshipDate: "April’24 - June’24",
            internshipPoint1: "Developed and executed integrated marketing campaigns, resulting in a 15% increase in lead generation.",
            internshipPoint2: "Developed a competitor benchmarking report for 10 industry leaders.",
            internshipPoint3: "Contributed to UI/UX design projects, improving user experience and interface design.",
            internshipPoint4: "Utilized data analytics tools to track campaign performance and measure key metrics.",
            educationTitle: "Educational Qualifications",
            "passingYear": "Passing Year",
            "passingYear.1": "Passing Year",
            "passingYear.2": "Passing Year",
            "passingYear.3": "Passing Year",
            positionsTitle: "Positions of Responsibility",
            position1Title: "Member of Mercatus Mantra",
            position1Point1: "Organized and managed the flagship event 'Buzzar,' coordinating logistics, planning, and vendor management.",
            position1Point2: "Played a key role in post-event evaluation, analysing performance and identifying areas for improvement.",
            position2Title: "Discipline Committee Coordinator",
            position2Point1: "Organized and coordinated the annual college fest 'Manthan,' overseeing logistics and team management.",
            position2Point2: "Successfully mediated conflicts and resolved disciplinary issues to ensure a positive environment.",
            certificationsTitle: "Certifications",
            cert1: "Electronic Arts Product Management Job Simulation - May 2024",
            cert2: "BCG Introduction to Strategy Consulting - April 2024",
            cert3: "JPMorgan Chase Markets (Sales & Trading) - April 2024",
            cert4: "Cognizant Agile Methodology Job Simulation - May 2024",
            cert5: "Developing Soft Skills and Personality - 2019",
            interestsTitle: "Interests",
            interest1: "Reading Non-fiction",
            interest2: "Writing Short Stories",
            interest3: "Nature Photography",
            interest4: "Video Editing",
            interest5: "Swimming",
            footerText: "© 2025 Deepak Yadav. Made with ❤️"
        },
        hi: {
            heroTitle: "नमस्ते, मैं दीपक यादव हूँ 👋",
            heroSubtitle: "डिजिटल रणनीति के प्रति जुनून और डिजिटल मार्केटिंग में दो साल से अधिक के फ्रीलांस अनुभव के साथ एक पीजीडीएम मार्केटिंग छात्र। मैं विचारों को मापने योग्य परिणामों में बदलता हूँ, जिससे ब्रांडों को ऑनलाइन चमकने में मदद मिलती है। 🚀",
            summaryTitle: "व्यावसायिक सारांश",
            summaryText: "अत्यधिक प्रेरित और परिणाम-उन्मुख पीजीडीएम छात्र जो मार्केटिंग और मानव संसाधन में विशेषज्ञता रखते हैं, और एक फ्रीलांस डिजिटल मार्केटर के रूप में 2+ वर्ष का अनुभव है। सफल मार्केटिंग रणनीतियों को विकसित करने और निष्पादित करने, बाजार अनुसंधान करने और प्रतियोगी गतिविधियों का विश्लेषण करने की सिद्ध क्षमता। सामग्री निर्माण, सोशल मीडिया मार्केटिंग और मार्केटिंग निर्णयों को सूचित करने के लिए डेटा विश्लेषण का उपयोग करने में माहिर। एक गतिशील वातावरण में एक चुनौतीपूर्ण भूमिका की तलाश है जहां मैं संगठन के विकास में योगदान दे सकूं और साथ ही अपने मार्केटिंग और विश्लेषणात्मक कौशल को और विकसित कर सकूं।",
            skillsTitle: "कौशल",
            skillContentWriting: "कंटेंट राइटिंग",
            skillMarketResearch: "बाजार अनुसंधान",
            skillNegotiation: "बातचीत",
            internshipTitle: "इंटर्नशिप अनुभव",
            internshipDate: "अप्रैल’24 - जून’24",
            internshipPoint1: "एकीकृत विपणन अभियानों का विकास और निष्पादन किया, जिसके परिणामस्वरूप लीड जनरेशन में 15% की वृद्धि हुई।",
            internshipPoint2: "10 उद्योग के नेताओं के लिए एक प्रतियोगी बेंचमार्किंग रिपोर्ट विकसित की।",
            internshipPoint3: "UI/UX डिजाइन परियोजनाओं में योगदान दिया, उपयोगकर्ता अनुभव और इंटरफ़ेस डिजाइन में सुधार किया।",
            internshipPoint4: "अभियान के प्रदर्शन को ट्रैक करने और प्रमुख मैट्रिक्स को मापने के लिए डेटा एनालिटिक्स टूल का उपयोग किया।",
            educationTitle: "शैक्षणिक योग्यता",
            "passingYear": "उत्तीर्ण वर्ष",
            "passingYear.1": "उत्तीर्ण वर्ष",
            "passingYear.2": "उत्तीर्ण वर्ष",
            "passingYear.3": "उत्तीर्ण वर्ष",
            positionsTitle: "जिम्मेदारी के पद",
            position1Title: "मर्केटस मंत्र के सदस्य",
            position1Point1: "प्रमुख कार्यक्रम 'बज़्ज़ार' का आयोजन और प्रबंधन किया, जिसमें लॉजिस्टिक्स, योजना और विक्रेता प्रबंधन का समन्वय किया।",
            position1Point2: "घटना के बाद के मूल्यांकन में महत्वपूर्ण भूमिका निभाई, प्रदर्शन का विश्लेषण किया और सुधार के क्षेत्रों की पहचान की।",
            position2Title: "अनुशासन समिति समन्वयक",
            position2Point1: "वार्षिक कॉलेज उत्सव 'मंथन' का आयोजन और समन्वय किया, जिसमें लॉजिस्टिक्स और टीम प्रबंधन की देखरेख की।",
            position2Point2: "सकारात्मक माहौल सुनिश्चित करने के लिए संघर्षों का सफलतापूर्वक मध्यस्थता और अनुशासनात्मक मुद्दों का समाधान किया।",
            certificationsTitle: "प्रमाणपत्र",
            cert1: "इलेक्ट्रॉनिक आर्ट्स उत्पाद प्रबंधन नौकरी सिमुलेशन - मई 2024",
            cert2: "बीसीजी रणनीति परामर्श का परिचय - अप्रैल 2024",
            cert3: "जेपी मॉर्गन चेस मार्केट्स (सेल्स एंड ट्रेडिंग) - अप्रैल 2024",
            cert4: "कॉग्निजेंट एजाइल मेथोडोलॉजी जॉब सिमुलेशन - मई 2024",
            cert5: "सॉफ्ट स्किल्स और व्यक्तित्व का विकास - 2019",
            interestsTitle: "रुचियाँ",
            interest1: "नॉन-फिक्शन पढ़ना",
            interest2: "लघु कथाएँ लिखना",
            interest3: "प्रकृति फोटोग्राफी",
            interest4: "वीडियो संपादन",
            interest5: "तैराकी",
            footerText: "© 2025 दीपक यादव। ❤️ से बनाया गया"
        }
    };

    /* ==================================================================
       ELEMENT SELECTORS
       - Caching frequently used DOM elements for better performance.
    ================================================================== */
    const htmlEl = document.documentElement;
    const themeToggleBtn = document.getElementById('theme-toggle');
    const langEnBtn = document.getElementById('lang-en');
    const langHiBtn = document.getElementById('lang-hi');

    /* ==================================================================
       THEME TOGGLER FUNCTIONALITY
       - Toggles between 'light-theme' and 'dark-theme' classes on the <html> element.
       - Saves the user's preference to localStorage to persist it across visits.
    ================================================================== */
    themeToggleBtn.addEventListener('click', () => {
        const isDark = htmlEl.classList.contains('dark-theme');
        if (isDark) {
            htmlEl.classList.replace('dark-theme', 'light-theme');
            localStorage.setItem('theme', 'light');
        } else {
            htmlEl.classList.replace('light-theme', 'dark-theme');
            localStorage.setItem('theme', 'dark');
        }
    });

    /* ==================================================================
       LANGUAGE SWITCHER FUNCTIONALITY
       - Handles changing the site's language based on user selection.
       - Saves the preference to localStorage.
    ================================================================== */
    const setLanguage = (lang) => {
        // Find all elements with a 'data-key' and update their text
        document.querySelectorAll('[data-key]').forEach(element => {
            const key = element.getAttribute('data-key');
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        // Update the page's language attribute for accessibility
        htmlEl.lang = lang;
        // Save the setting
        localStorage.setItem('language', lang);
        
        // Update the active state of the language buttons
        langHiBtn.classList.toggle('active', lang === 'hi');
        langEnBtn.classList.toggle('active', lang === 'en');
    };

    // Add click listeners to the language buttons
    langEnBtn.addEventListener('click', () => setLanguage('en'));
    langHiBtn.addEventListener('click', () => setLanguage('hi'));

    // On page load, apply the saved language or default to English
    const savedLanguage = localStorage.getItem('language') || 'en';
    setLanguage(savedLanguage);

    /* ==================================================================
       COLLAPSIBLE SECTIONS (ACCORDION)
       - Toggles the 'active' class on a section when its header is clicked.
       - Updates ARIA attributes for accessibility and changes the icon.
    ================================================================== */
    document.querySelectorAll('.collapsible').forEach(collapsible => {
        const header = collapsible.querySelector('.collapsible-header');
        const icon = collapsible.querySelector('.collapsible-icon');

        header.addEventListener('click', () => {
            const isActive = collapsible.classList.toggle('active');
            // Update accessibility attribute
            header.setAttribute('aria-expanded', isActive);
            // Change icon from '+' to 'x' (remove/add)
            icon.textContent = isActive ? 'remove' : 'add';
        });
    });

    /* ==================================================================
       SCROLL-TRIGGERED FADE-IN ANIMATION
       - Uses Intersection Observer API for efficient scroll detection.
       - Adds the 'is-visible' class to elements as they enter the viewport.
    ================================================================== */
    const animationObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // If the element is on screen
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Stop observing the element after it has animated once
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1 // Trigger when at least 10% of the element is visible
    });

    // Attach the observer to all elements with the 'data-scroll-animation' attribute
    document.querySelectorAll('[data-scroll-animation]').forEach(el => {
        animationObserver.observe(el);
    });

});
