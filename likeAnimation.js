const notLikeIcons = document.querySelectorAll('.no-like');
const likeIcons = document.querySelectorAll('.like');

notLikeIcons.forEach((notLikeIcon) => {
    notLikeIcon.addEventListener("click", ()=> {
        const likeIcon = notLikeIcon.nextElementSibling;
        likeIcon.classList.remove('hidden');
    });
});

likeIcons.forEach((likeIcon) => {
    likeIcon.addEventListener("click", ()=> {
        likeIcon.classList.add('hidden');
    });
});