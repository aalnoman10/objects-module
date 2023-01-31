// const oddArr = [3, 5, 34, 52, 3, 12, 78];

// function oddSum(x) {
//     let sum = 0;
//     for (let i = 0; i < x.length; i++) {
//         if (x[i] % 2 != 0) {
//             sum += x[i];
//             console.log(sum);
//         }
//     }
//     console.log('final', sum);
// }

// oddSum(oddArr);

const evenArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function evenSum(evenArr) {
    let sum = 0;
    for (let i = 0; i < evenArr.length; i++) {
        if (evenArr[i] % 2 == 0) {
            sum += evenArr[i];
        }
    }
    console.log(sum);
}

evenSum(evenArr);