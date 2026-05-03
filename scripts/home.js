const habitTrackerBtn = document.getElementById('habit-tracker-btn');
const libraryBtn = document.getElementById('library-btn');
const settingsBtn = document.getElementById('settings-btn');

habitTrackerBtn.addEventListener('click', () => {
    window.location.href = 'pages/habitTracker.html';
});

libraryBtn.addEventListener('click', () => {
    window.location.href = 'pages/libraryOfProblems.html';
});

settingsBtn.addEventListener('click', () => {
    window.location.href = 'pages/view-progress.html';
});