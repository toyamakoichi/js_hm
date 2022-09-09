const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function evenElem(array) {
    const evenArr = [];
    for (let i = 0; i < array.length; i++) {

        if (array[i] % 2 === 0) { evenArr.push(array[i]); }
    }
    return evenArr;
}

console.log('Given array')
console.log(arr);
console.log('');
console.log('Even elements')
console.log(evenElem(arr));
console.log('');



