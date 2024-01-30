const notLike = document.getElementById('no-like');
const like = document.getElementById('like');

notLike.addEventListener("click", ()=> {
    like.classList.remove('hidden');
});

like.addEventListener("click", ()=> {
    like.classList.add('hidden');
});
