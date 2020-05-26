// Image Imports
import './styles/index.scss';
import './images/linkedin-icon.svg';
import './images/email-icon.svg';
import './images/phone-icon.svg';
import './images/logo.svg';
import './images/person.jpg';
import './images/person.webp';

// Favicon Imports
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
    
    if (/index?(.html)/.test(location)) {
        return;
    } else if (/over_mij?(.html)/.test(location)) {
        document.getElementById('about-header-link').classList.add('current-page');
    } else if (/projecten?(.html)/.test(location)) {
        document.getElementById('coops-header-link').classList.add('current-page');
    } else if (/sales?(.html)/.test(location)) {
        document.getElementById('sales-header-link').classList.add('current-page');
    } else if (/extra?(.html)/.test(location)) {
        document.getElementById('extras-header-link').classList.add('current-page');
    }
}

document.addEventListener('DOMContentLoaded', () => { changeHighlight() });