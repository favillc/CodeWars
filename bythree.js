function divisibleByThree(str){
 let output = [],
    sNumber = str.toString();

  for (var i = 0, len = sNumber.length; i < len; i += 1) {
      output.push(+sNumber.charAt(i));
  }
  for (var i = 0, sum = 0; i < output.length; sum += output[i++]);
  if(sum%3 != 0){
     return false;
  }else{
    return true;
  }

}
