function duplicateCount(text){
  let str = text.toUpperCase();
  let objt = {} //precisa
  let contador = 0; //sem sujeira
  let i = 0;
  //aparentemente o while é mais rápido que o for em JS, mas por algum motivo aqui foi mais lento
  //talvez seja a natureza do problema, não sei ainda...
  for(i=0; i<str.length;i++){
    if(!objt[str[i]]) //atribui como propriedade
        objt[str[i]] = 1;
    else if(objt[str[i]]<2){
        objt[str[i]]++;
        contador++;
    }
  }
  return contador;
}
