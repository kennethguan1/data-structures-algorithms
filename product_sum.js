function productSum(array, count=1) {
  // Write your code here.
    let sum=0;      
    for(let i=0; i<array.length; i++){
        if(Array.isArray(array[i])) {                                            
 						sum+=(count+1)* productSum(array[i],count+1)
        } else {
            sum+= array[i];
        }
    }       
    return sum;
}