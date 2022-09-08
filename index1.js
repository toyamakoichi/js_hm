const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenArr = [];
for (var i = 0; i < arr.length; i++) {

    if (arr[i] % 2 === 0) { evenArr.push(arr[i]); }
}
console.log('Given array')
console.log(arr);
console.log('');
console.log('Even elements')
console.log(evenArr);
console.log('');



