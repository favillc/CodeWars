function century(year) {
 let d = (year/100);
 if(year > 0){
     if((year<100)&& (year>1)){
      return 1;
    }else{
      return Math.ceil(year/100)
      
    }
 
 }else{
     return 0;

 }
 
}
