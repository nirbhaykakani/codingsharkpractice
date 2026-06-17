var n=4

for(let i=0;i<n;i++){
    let str=""
    for(let j=0;j<i;j++){
        str=str+" "
    }
    for(let j=n-i;j>0;j--){
        str=str+"*"
        
    }
    for(let j=0;j<i;j++){
        str=str+" "
    }
    console.log(str);
}