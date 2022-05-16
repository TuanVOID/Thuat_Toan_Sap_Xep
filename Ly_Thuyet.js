// let score = [700, 8, 9, 10, 3, 30];
//
// console.log(score.sort( (first, second) => {
//     if (second > first){
//         return -1;
//     }
//     else {
//         return 0;
//     }
// } ));
var arr = [234, 43, 235, 55, 63, 5, 6, 235, 547];
// Noi bot
function bubleSort(arr) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
console.log(bubleSort(arr));
