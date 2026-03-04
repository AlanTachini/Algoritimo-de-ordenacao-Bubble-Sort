function ordenarDado(dado){
  console.log(dado)
  dado = dado.toString().split("")
  for (let i = 0; i < dado.length - 1; i++){
    for (let j = 0; j < dado.length - 1 - i; j++) {
      if (dado[j].toLowerCase() > dado[j+1].toLowerCase()) {
        let aux = dado[j];
        dado[j] = dado[j+1];
        dado[j+1] = aux;
      }
    }
  }
  return dado.join("");
}

console.log(ordenarDado("eba"));