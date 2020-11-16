const receitas = document.querySelectorAll('.receita');

for(let receita of receitas) {
  receita.addEventListener('click', () => {
    const recipeTitle = receita.children[1].textContent;

    for(let i = 0; i < receitas.length; i++) {
      if(recipeTitle == receitas[i].children[1].innerHTML) {
        window.location.href = `/recipes/${i}`;
      }
    }
  });
}