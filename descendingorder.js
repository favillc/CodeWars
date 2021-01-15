function descendingOrder(n){
  let digits = (""+n).split("");
  let intdigits = digits.map(Number);
  let x = intdigits.sort(function(a, b){return b-a});
  x = x.toString();
  x = parseFloat(x.replace(/,/g, ''));
  return x;
}
