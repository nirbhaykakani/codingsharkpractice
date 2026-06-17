const array = [54, 31, 2, 26, 7];
let left =0
let right=arr.length-1;
while(left<right){
    arr[left]=arr[left]+arr[right];
    arr[right]=arr[left]-arr[right];
    arr[left]=arr[left]-arr[right];
    left++
    right--
}
console.log(arr)