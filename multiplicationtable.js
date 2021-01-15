function multiTable(number) {
  let tabela = '';
  for(let i = 1; i <= 10; i++){
    tabela += `${i} * ${number} = ${i*number}\n`
  }
  return tabela.slice(0, -1)
}
