function ordenarPalavra(palavra){
  console.log(palavra)
  palavra = palavra.toString().split("")
  for (let i = 0; i < palavra.length - 1; i++){
    for (let j = 0; j < palavra.length - 1 - i; j++) {
      if (palavra[j].toLowerCase() > palavra[j+1].toLowerCase()) {
        let aux = palavra[j];
        palavra[j] = palavra[j+1];
        palavra[j+1] = aux;
      }
    }
  }
  return palavra.join("");
}

console.log(ordenarPalavra("eba"));