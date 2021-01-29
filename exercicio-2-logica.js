let grupo = [
  pessoa1 = {
    nome: "Paulo",
    idade: 18, 
    cidade: "São Paulo",
  },

  pessoa2 = {
    nome: "Joana",
    idade: 46, 
    cidade: "Campinas",
  },

  pessoa3 = {
    nome: "José",
    idade: 40, 
    cidade: "Paulínia",
  },

  pessoa4 = {
    nome: "Helena",
    idade: 32, 
    cidade: "São Paulo",
  },

  pessoa5 = {
    nome: "Jenifer",
    idade: 22, 
    cidade: "Campinas",
  },

  pessoa6 = {
    nome: "Olavo",
    idade: 38, 
    cidade: "São Paulo",
  },

  pessoa7 = {
    nome: "Pedro",
    idade: 20, 
    cidade: "Americana",
  },
]

console.log(`subgrupo 1:`);
for (let i = 0; i < grupo.length; i = i + 1) {
  if (grupo[i].cidade == "São Paulo") {
    console.log(`${grupo[i].nome}`);
  }
};

console.log("--------");
console.log(`subgrupo 2: `);
for (let i = 0; i < grupo.length; i = i + 1) {
  if (grupo[i].idade < 40) {
    console.log(`${grupo[i].nome}`);
  } 
};

console.log("---------");
console.log(`subgrupo 3`);
for (let i = 0; i < grupo.length; i = i + 1) {
  if (grupo[i].idade >= 20 && grupo[i].cidade !== "Campinas") {
    console.log(`${grupo[i].nome}`);
  }
};