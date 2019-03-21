// 1. Build a function that does currency converter from USD to UAH (1 USD = 8 UAH).
function convert(amount) { 
	let usd = 8
	console.log(amount * usd) ;
}
convert(2); 

//2. A function which returns reversed string.

function reverse(str) {
    return (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0);
  }

console.log(reverse("abc")); 

  //or: 
  
function reverse(str) {
    console.log (str.split('').reverse().join(''));
}

console.log(reverse("abc"));


//3.A function which prints the stair picture of size n

function showStars(n) {
    
    for (let row = 1; row <= n; row++) {
        let pattern = '';
        for (let i =0; i < row; i++)
            pattern+='#';
        console.log(pattern);
    }
}

showStars(5);

//4. A function which returns total sum of a range


let rangeSum = function(start,end){

    let arr = [];
    for (let i = start; i <= end; i++) 
        arr.push(i);
    return arr.reduce(function(a,b){
        return a + b;   
    });
}
console.log(rangeSum(2,4))
console.log(rangeSum(-1,3))

//5.Write a function which returns the smallest of three numbers.

function min(a, b, c) { 
    console.log(Math.min(a,b,c));
    }
    
    min(10, 5, 11) 
    min(3, 8, 4) 



//6. A function which prints the pyramid picture of size n







