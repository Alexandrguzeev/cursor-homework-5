function showStars(n) {
    
    for (let row = 1; row <= n; row++) {
        let pattern = '';
        for (let i =0; i < row; i++)
            pattern+='#';
        console.log(pattern);
    }
}

showStars(5);