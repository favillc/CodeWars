function isPowerOfTwo(n){
  if(n != 0){
   return n && (n & (n - 1)) === 0;
   }else{
     return false;
   }
}
