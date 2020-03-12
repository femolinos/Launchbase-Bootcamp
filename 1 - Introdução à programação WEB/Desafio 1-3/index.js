// const usuarios = [
//   {
//     nome: "Felipe",
//     tecnologias: [
//       "Javascript", "HTML"
//     ]
//   },
//   {
//     nome: "Luciano",
//     tecnologias: [
//       "Java", "CSS"
//     ]
//   },
//   {
//     nome: "Karine",
//     tecnologias: [
//       "Typescript", "Python"
//     ]
//   }
// ];

// // for(let i = 0; i < usuarios.length; i++){
// //   console.log(`${usuarios[i].nome} trabalha com ${usuarios[i].tecnologias} `);
// // }

// for(let i = 0; i < usuarios.length; i++){
//   const usuarioTrabalhaComCSS = checaSeUsuarioUsaCSS(usuarios[i]);

//   if(usuarioTrabalhaComCSS){
//     console.log(`O usuário ${usuarios[i].nome} trabalha com CSS`);
//   } else {
//     console.log(`O usuário ${usuarios[i].nome} não trabalha com CSS`);
//   }
// }

// function checaSeUsuarioUsaCSS(usuario){
//   for(let i = 0; i < usuario.tecnologias.length; i++){
//     if(usuario.tecnologias[i] == "CSS"){
//       return true;
//     }
//   }
//   return false;
// }

const usuarios = [
  {
    nome: "Salvio",
    receitas: [115.3, 48.7, 98.3, 14.5],
    despesas: [85.3, 13.5, 19.9]
  },
  {
    nome: "Marcio",
    receitas: [24.6, 214.3, 45.3],
    despesas: [185.3, 12.1, 120.0]
  },
  {
    nome: "Lucia",
    receitas: [9.8, 120.3, 340.2, 45.3],
    despesas: [450.2, 29.9]
  }
];

for(let i = 0; i < usuarios.length; i++){
  let saldo = calculaSaldo(usuarios[i].receitas, usuarios[i].despesas);
  if(saldo >= 0){
    console.log(`${usuarios[i].nome} possui saldo POSITIVO de ${saldo}`);
  } else {
    console.log(`${usuarios[i].nome} possui saldo NEGATIVO de ${saldo}`);
  }
}

function calculaSaldo(receitas, despesas){
  const totalReceitas = somaNumeros(receitas);
  const totalDespesas = somaNumeros(despesas);

  saldo = totalReceitas - totalDespesas;

  return saldo;
}

function somaNumeros(numeros){
  let soma = 0;
  for(let i = 0; i < numeros.length; i++){
    soma = numeros[i] + soma;
  }
  return soma;
}