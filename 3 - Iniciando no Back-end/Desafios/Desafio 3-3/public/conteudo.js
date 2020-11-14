const modalOverlay = document.querySelector('.modal-overlay');
const posts = document.querySelectorAll('.post');

for(let post of posts) {
  post.addEventListener('click', () => {
    const postId = post.getAttribute('id');
    window.location.href = `/courses/${postId}`;
  });
}