const botoes_esconder = document.querySelectorAll('.subtitulo');
let conteudo = [];

for(let botao of botoes_esconder) {
  botao.addEventListener('click', () => {
    if(botao.children[1].innerHTML == 'Esconder') {

      botao.children[1].innerHTML = 'Mostrar';

      const elem = document.getElementById(botao.getAttribute('id') + '-content');
      conteudo.push({ key: botao.getAttribute('id'), content: elem.parentNode.removeChild(elem) });

    } else {

      botao.children[1].innerHTML = 'Esconder';

      for(let i = 0; i < conteudo.length; i++) {
        if(botao.getAttribute('id') == conteudo[i].key) {
          document.getElementsByClassName(botao.getAttribute('id')).item(0).appendChild(conteudo[i].content);
          conteudo.splice(i);
        }
      }

    }
  });
}