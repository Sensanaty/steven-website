// Imports
import './styles/index.scss';
import './images/linkedin-icon.svg';
import './images/email-icon.svg';
import './images/phone-icon.svg';
import './images/logo.svg';
import './images/person.jpg';
import './images/person.webp';

/**
 * Check the current relative URL of the page, and add a class, "current-page" to the header element depending on which page the user is currently on.
 */
function changeHighlight() {
    // Get the relative URL of the page eg: '/about.html'
    const location = window.location.pathname+window.location.search;
    switch (location) {
        case "/about.html":
        case "/about":
            document.getElementById('about-header-link').classList.add("current-page");
            break;
        case "/cooperation.html":
        case "/cooperation":
            document.getElementById('coops-header-link').classList.add("current-page");
            break;
        case "/sales.html":
        case "/sales":
            document.getElementById('sales-header-link').classList.add("current-page");
            break;
        case "/extras.html":
        case "/extras":
            document.getElementById('extras-header-link').classList.add("current-page");
            break;
        default:
            break;
    }
    return null;
}


document.onload = changeHighlight();