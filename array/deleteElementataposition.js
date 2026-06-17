var arr=[1,2,1,1,4]
var arr1=[]
let position =2
let k=0
for(let i=0;i<arr.length;i++){
    if(k>=arr.length){
        break;
    }
    if(i==position){
        k++;
    }
    arr1[i]=arr[k]
    k++
}
arr=arr1
console.log(arr)
