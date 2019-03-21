function cursorCheck(str) { 
    for (let index = 0; index < str.length; index++) {
        if (str.toLowerCase().includes('ostap') || str.toLowerCase().includes('roman')) {
            return true
        } else {
            return false
        }     
    }
  }
  
console.log(cursorCheck('Hello I am OstaP')); 
console.log(cursorCheck('Superman is here')) 