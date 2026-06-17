const arr=[1,2,1,4,2,4]
const count=[]
for(let i=0;i<arr.length;i++){
    if (count[arr[i]] == undefined) {
        count[arr[i]] = 0;
    }
    count[arr[i]]++
}
for(let i=0;i<count.length;i++){
    if (count[i] == undefined) {
        count[i] = 0;
    }
    console.log(i,": ",count[i])
}