const array = [54, 31, 2, 46, 7];
let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < array.length; i++) {
    if (array[i] > largest) {
        secondLargest = largest;
        largest = array[i];
    } else if (array[i] > secondLargest && array[i] < largest) {
        secondLargest = array[i];
    }
}

console.log(secondLargest);