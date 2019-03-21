

function reverse(str) {
    console.log (str.split('').reverse().join(''));
}
reverse('abc');


//Ternary operator:

// function reverse(str) {
//     return (str === '') ? '' : reverse(str.substr(1)) + str.charAt(0);
//   }
//   console.log(reverse("abc")); 
