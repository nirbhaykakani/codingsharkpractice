var n=4
for(let i=n-1;i>=0;i--){
    let str=""
    for(let j=i;j>0;j--){
        str=str+" "
    }
    for(let j=n-i;j>0;j--){
        str=str+"*"
    }
    console.log(str);
}