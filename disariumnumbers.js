function disariumNumber(n){
  let sN = n.toString();
  let output = [];
  //convert the string into an array with each digit of the  number
  for (var i = 0, len = sN.length; i < len; i += 1) {
    output.push(+sN.charAt(i));
  }
  //convert the string array to an integer array
  let intArray = output.map(Number);
  let count = 0;
  let result = 0;
  //calculate the condition
  while(count < intArray.length){
   result += Math.pow(intArray[count], (count+1));
    
    count++;
  }
  //test the condition and return the output
  if(result == n){
  return "Disarium !!";
  }else{
  return "Not !!";
  }
  
}
