const sidebar = document.getElementById('sidebar');
const settingsIcon = document.getElementById('settings');

settingsIcon.addEventListener("click", function() {
    sidebar.classList.toggle('translate-x-56');
    settingsIcon.classList.toggle('text-violet-950');
    settingsIcon.classList.toggle('text-violet-200');
    settingsIcon.classList.toggle('dark:text-indigo-950');
});

document.onclick = function(e){
    if (!settingsIcon.contains(e.target) && !sidebar.contains(e.target) && !sidebar.classList.contains('translate-x-56') ) {
        settingsIcon.classList.toggle('text-violet-950');
        settingsIcon.classList.toggle('text-violet-200');
        settingsIcon.classList.toggle('dark:text-indigo-950');
        sidebar.classList.add("translate-x-56");
    }
}