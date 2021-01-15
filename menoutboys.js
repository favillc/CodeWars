function menFromBoys(arr){
  let odd = [];
  let even = [];
  let count = 0;
  while(count < arr.length){
    if(arr[count] % 2 != 0){
    odd.push(arr[count]);
    }else{
    even.push(arr[count]);
      }
    count++;
  }
  function onlyUnique(value, index, self) { 
    return self.indexOf(value) === index;
  }
  let ueven = even.filter( onlyUnique );
  let uodd = odd.filter( onlyUnique );
  odd = uodd.sort(function(a, b) {
  return b-a;
  });
  even = ueven.sort(function(a, b) {
  return a-b;
  });
  
      
  return even.concat(odd);
}
