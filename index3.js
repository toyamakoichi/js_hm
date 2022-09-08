function checkFib(n, m) {
    const fibArr = [];
    for (i = n; i <= m; i++) {
        if (Math.sqrt(5 * (i * i) - 4) % 1 === 0 || Math.sqrt(5 * (i * i) + 4) % 1 === 0) {
            fibArr.push(i);
        }
    }
    return fibArr;
}
console.log('Fibonacci numbers in given range');
console.log(checkFib(200, 800));
