function count (string) {  
  let contado = {}; //objeto
  let letra, contador;
  for(let i = 0; i<string.length; i++){
    letra = string.charAt(i);
    contador = contado[letra];
    contado[letra] = contador ? contador+1 : 1;
  }
   return contado;
}
