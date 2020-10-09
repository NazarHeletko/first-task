let url = window.location;

if (url.host === "api.forpeeps.eu") {
    window.API_URL = 'https://api.forpeeps.eu/';
    window.ACCOUNTS_API_URL = window.API_URL + 'accounts/api/'
    window.LANGUAGES_API_URL = window.API_URL + 'languages/api/'
} else if (url.host === "staging.forpeeps.eu") {
    window.API_URL = 'https://staging.forpeeps.eu/';
    window.ACCOUNTS_API_URL = window.API_URL + 'accounts/api/'
    window.LANGUAGES_API_URL = window.API_URL + 'languages/api/'
} else {
    // Dev version
    window.API_URL = 'https://staging.forpeeps.eu/';
    window.ACCOUNTS_API_URL = window.API_URL + 'accounts/api/'
    window.LANGUAGES_API_URL = window.API_URL + 'languages/api/'
}
