const arr=[3,2,5,1,4,5]
const count=[]
    for(let i=0;i<arr.length;i++){
        if (count[arr[i]] === undefined) {
            count[arr[i]] = 0;
        }
        count[arr[i]]++
    }
    console.log("Unique Elements:")
    for(let i=0;i<count.length;i++){
        if(count[i]==1){
            console.log(i)
        }
    }