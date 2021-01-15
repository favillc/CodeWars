function position(letter){
 let alphabet = "abcdefghijklmnopqrstuvwxyz";
 let arr = alphabet.split("");
 for(var i = 0; i<arr.length; i++){
   if(letter == arr[i])
       return "Position of alphabet: " + (i+1);
 }
}
