const modalOverlay = document.querySelector('.modal-overlay');
const receitas = document.querySelectorAll('.receita');
const modal = document.querySelector('.modal-content');
const imagemModal = document.querySelector('.modal-content img');

for(let receita of receitas) {
  receita.addEventListener('click', () => {
    modalOverlay.classList.add('active');
    imagemModal.src = receita.children[0].src;
    modal.children[1].textContent = receita.children[1].textContent;
    modal.children[2].textContent = receita.children[2].textContent;
  });
}

document.querySelector('.close-modal').addEventListener('click', () => {
  modalOverlay.classList.remove('active');
});