const modalOverlay = document.querySelector('.modal-overlay');
const posts = document.querySelectorAll('.post');

for(let post of posts) {
  post.addEventListener('click', () => {
    const link = post.children[1].textContent.split(' ').join('-');
    modalOverlay.classList.add('active');
    modalOverlay.querySelector('iframe').src = `https://blog.rocketseat.com.br/${link}`
  });
}

document.querySelector('.close-modal').addEventListener('click', () => {
  modalOverlay.classList.remove('active');
})