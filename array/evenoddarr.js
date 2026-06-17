const arr=[1,2,3,5,4]
var j=0
var k=0
const even=[]
const odd=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        even[j++]=arr[i]
    }else{
        odd[k++]=arr[i]
    }
}
console.log("Even: ",even)
console.log("Odd: ",odd)