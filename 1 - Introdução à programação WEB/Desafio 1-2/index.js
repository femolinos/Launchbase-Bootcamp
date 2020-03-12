const empresa = {
  nome: "Rocketseat",
  cor: "roxo",
  foco: "Programação",
  endereco: {
    rua: "Rua Guilherme Gembala",
    numero: 260
  }
};

console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}`);

const programadores = {
  nome: "Felipe",
  idade: 20,
  tecnologias: [
    {
      nome: "Java",
      especialidade: "Desktop"
    },
    {
      nome: "Javascript",
      especialidade: "Web"
    },
    {
      nome: "HTML",
      especialidade: "Web"
    }
  ]
};

console.log(`O usuário ${programadores.nome} tem ${programadores.idade} anos e usa a tecnologia ${programadores.tecnologias[0]} com especialidade em ${programadores.tecnologias[0].especialidade}`);