
function findsmallNum(arr){
    let min = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log(`The smallest element in the array as ${min}.`);
}
let myArray = [22, 80, 20, 6, 33, 7, 13];
findsmallNum(myArray)
