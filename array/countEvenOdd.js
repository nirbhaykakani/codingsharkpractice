const array = [54, 31, 2, 26, 7];
var countEven=0;
var countOdd=0;
for(let i=0;i<array.length;i++){
    if(array[i]%2==0){
        countEven++
        continue;
    }
    countOdd++
}
console.log("Even: ",countEven)
console.log("Odd: ",countOdd)