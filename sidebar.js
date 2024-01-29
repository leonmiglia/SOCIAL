const sidebar = document.getElementById('sidebar');
const settingsIcon = document.getElementById('settings');

settingsIcon.addEventListener("click", function() {
    sidebar.classList.toggle('translate-x-56');
    settingsIcon.classList.toggle('text-violet-950');
    settingsIcon.classList.toggle('text-violet-200');
});