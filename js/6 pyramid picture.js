function printPyramid(n) {
    for (let i = 0; i < n; i++) {
      let str = '';
      for (let j = 1; j < n-i; j++) {
        str = str + ' ';
      }
      for (let k = 1; k <= (2*i+1); k++) {
        str += '#';
      }
      console.log(str);
    }
  }
  
  printPyramid(3);