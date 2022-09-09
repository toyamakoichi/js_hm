const mas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function evenIndex(arr) {
    const evenIndexArr = [];
    for (let i = 0; i < arr.length; i += 2) {
        evenIndexArr.push(arr[i]);
    }
    return evenIndexArr;
}
console.log('Given array')
console.log(mas);
console.log('');
console.log('Elements with even indexes');
console.log(evenIndex(mas));
console.log('');