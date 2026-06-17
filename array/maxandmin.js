const array=[54,31,2,26,7]
var max=array[0]
    for(let i=1;i<array.length;i++){
        if(array[i]>max){
            max=array[i]
        }
    }

var min=array[0]
    for(let i=1;i<array.length;i++){
        if(array[i]<min){
            min=array[i]
        }
    }
console.log("Minimum:",min)
console.log("Maximum:",max)