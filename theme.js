const darkModeButton = document.getElementById('dark');
const lightModeButton = document.getElementById('light');

darkModeButton.addEventListener("click", ()=> {
    document.documentElement.classList.add('dark');
    darkModeButton.classList.add('text-indigo-800');
    lightModeButton.classList.add('text-indigo-400');
});
lightModeButton.addEventListener("click", ()=> {
    document.documentElement.classList.remove('dark');
    lightModeButton.classList.add('text-violet-500');
    darkModeButton.classList.remove('text-indigo-800');
})