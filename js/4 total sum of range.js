
  let rangeSum = function(start,end){

    let arr = [];
    for (let i = start; i <= end; i++) 
        arr.push(i);
    return arr.reduce(function(a,b){
        return a + b;   
    });
};
console.log(rangeSum(2,4))
console.log(rangeSum(-1,3))

/* let array = [];

function range (arr){  
    let lower = Math.min(arr[0],arr[1]);    
    let upper = Math.max(arr[0],arr[1]);  

    for (let i=lower;i<=upper;i++){  
        array.push(i);  
    }
    return array; 
}  

function sum(array){  
    let total = 0; 
    for(let i in array){  
       total = total+array[i];  
    }
    return total;
}  

console.log(sum(range([2,4])));
console.log(sum(range([-1,3]))); */