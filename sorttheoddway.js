function sortItOut(array){
  let odd = [];
  let even = [];
  
  for(let i = 0; i<array.length; i++){
    if(array[i] & 1){ 
     odd.push(array[i]);
    }else{
     even.push(array[i]);
    }
  }
  odd = odd.sort(function(a,b) { return a - b;});
  even = even.sort(function(a,b) { return b - a;});
      
  return odd.concat(even);
}
