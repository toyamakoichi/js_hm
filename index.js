const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArr = [];
const evenIndexArr = [];
const fibArr = [];
for (var i = 0; i < arr.length; i++) {
    if (i % 2 === 0) { evenIndexArr.push(arr[i]); }
    else if (arr[i] % 2 === 0) { evenArr.push(arr[i]); }
}
function checkFib(n, m) {
    
    for (i = n; i <= m; i++) {
        if (Math.sqrt(5 * (i * i) - 4) % 1 === 0 || Math.sqrt(5 * (i * i) + 4) % 1 === 0) {
            fibArr.push(i);
        }
       
    }
    return fibArr;
}
console.log('Given array')
console.log(arr);
console.log('');
console.log('Even elements')
console.log(evenArr);
console.log('');
console.log('Elements with even indexes');
console.log(evenIndexArr);
console.log('');
console.log('Fibonacci numbers in given range');
console.log(checkFib(200,800));

