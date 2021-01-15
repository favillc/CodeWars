function sumTwoSmallestNumbers(numbers) {  
  let soma = 0;
   let copymin = [];
   for ( var i = 0; i < numbers.length; i++) {
     let elem = numbers[i]
     if ( elem >= 0) { 
       copymin.push(elem);
       
       copymin.sort(function(a, b) {
  return a - b;
});

     }
     soma = copymin[0] + copymin[1]; 
   }
return soma;
  }
