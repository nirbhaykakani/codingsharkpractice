const arr=[1,2,1,3,2,2]
const count=[]
for(let i=0;i<arr.length;i++){
    if (count[arr[i]] === undefined) {
        count[arr[i]] = 0;
    }
    count[arr[i]]++
}
var duplicate=0
for(let i=0;i<count.length;i++){
    if(count[i]>1){
        duplicate=duplicate+(count[i]-1)
    }
}
console.log(duplicate)