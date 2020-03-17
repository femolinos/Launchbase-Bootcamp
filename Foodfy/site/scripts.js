const modalOverlay = document.querySelector('.modal-overlay');
const receitas = document.querySelectorAll('.receita');

for(let receita of receitas){
  receita.addEventListener("click", function(){
    const tipoReceita = receita.getAttribute("id");
    console.log(tipoReceita);
    modalOverlay.classList.add('active');
    if(tipoReceita == "burger"){
      modalOverlay.querySelector(".modal-image").src = '../res/layouts/assets/burger.png';
      modalOverlay.querySelector(".modal-comida").innerHTML = "Triplo bacon burger";
      modalOverlay.querySelector(".modal-dono").innerHTML = "por Jorge Relato";
    } else if(tipoReceita == "pizza"){
      modalOverlay.querySelector(".modal-image").src = '../res/layouts/assets/pizza.png';
      modalOverlay.querySelector(".modal-comida").innerHTML = "Pizza 4 estações";
      modalOverlay.querySelector(".modal-dono").innerHTML = "por Fabiana Melo";
    } else if(tipoReceita == "espaguete"){
      modalOverlay.querySelector(".modal-image").src = '../res/layouts/assets/espaguete.png';
      modalOverlay.querySelector(".modal-comida").innerHTML = "Espaguete ao alho";
      modalOverlay.querySelector(".modal-dono").innerHTML = "por Júlia Kinoto";
    } else if(tipoReceita == "lasanha"){
      modalOverlay.querySelector(".modal-image").src = '../res/layouts/assets/lasanha.png';
      modalOverlay.querySelector(".modal-comida").innerHTML = "Lasanha mac n' cheese";
      modalOverlay.querySelector(".modal-dono").innerHTML = "por Juliano Vieira";
    } else if(tipoReceita == "doce"){
      modalOverlay.querySelector(".modal-image").src = '../res/layouts/assets/doce.png';
      modalOverlay.querySelector(".modal-comida").innerHTML = "Docinhos pão-do-céu";
      modalOverlay.querySelector(".modal-dono").innerHTML = "por Ricardo Golvea";
    } else {
      modalOverlay.querySelector(".modal-image").src = '../res/layouts/assets/asinhas.png';
      modalOverlay.querySelector(".modal-comida").innerHTML = "Asinhas de frango ao barbecue";
      modalOverlay.querySelector(".modal-dono").innerHTML = "por Vania Steroski";
    }
  });
}

document.querySelector('.close-modal').addEventListener("click", function(){
  modalOverlay.classList.remove('active');
});

function fecharModal(){
  modalOverlay.classList.remove('active');
}