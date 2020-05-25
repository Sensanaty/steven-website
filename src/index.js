// Imports
import './styles/index.scss';
import './images/linkedin-icon.svg';
import './images/email-icon.svg';
import './images/phone-icon.svg';
import './images/logo.svg';
import './images/person.jpg';
import './images/person.webp';
import './images/favicon/android-chrome-512x512.png';
import './images/favicon/android-chrome-192x192.png';
import './images/favicon/apple-touch-icon.png';
import './images/favicon/browserconfig.xml';
import './images/favicon/favicon.ico';
import './images/favicon/favicon-32x32.png';
import './images/favicon/favicon-16x16.png';
import './images/favicon/mstile-150x150.png';
import './images/favicon/safari-pinned-tab.svg';

/**
 * Check the current relative URL of the page, and add a class, "current-page" to the header element depending on which page the user is currently on.
 */
function changeHighlight() {
    // Get the relative URL of the page eg: '/about.html'
    const location = window.location.pathname+window.location.search;
    switch (location) {
        case "/over_mij.html":
        case "/over_mij":
            document.getElementById('about-header-link').classList.add("current-page");
            break;
        case "/projecten.html":
        case "/projecten":
            document.getElementById('coops-header-link').classList.add("current-page");
            break;
        case "/sales.html":
        case "/sales":
            document.getElementById('sales-header-link').classList.add("current-page");
            break;
        case "/extra.html":
        case "/extra":
            document.getElementById('extras-header-link').classList.add("current-page");
            break;
        default:
            break;
    }
    return null;
}


document.onload = changeHighlight();