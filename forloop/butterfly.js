var n=12

for(let i=0;i<n;i++){
    var str=""
    for(let j=0;j<i;j++){
        str=str+" "
    }
    for(let j=0;j<=i;j++){
        str=str+"*"
    }
    for(let j=n;j>0;j--){
        if(j==1){
            str=str+"*"
        }
        else{
            str=str+" "
        }
    }
    for(let j=4*(n-i);j>0;j--){
        if(j==1){
            str=str+"*"
        }
        str=str+" "
    }
    for(let j=n;j>0;j--){
        str=str+" "
    }
    for(let j=0;j<=i;j++){
        str=str+"*"
    }
    console.log(str)
}
for(var i=n-1;i>=0;i--){
    var str=""
    for(let j=0;j<i;j++){
        str=str+" "
    }
    for(let j=0;j<=i;j++){
        str=str+"*"
    }
    for(let j=n;j>0;j--){
        if(j==1 && i==n-1){
            str=str+"*"
            str=str+" "
            str=str+"*"
            str=str+" "
            str=str+"*"
        }
        /*else if(j==1 && i==n-2){
            str=str+" "
            str=str+" "
            str=str+"*"
            str=str+" "
            str=str+" "
        }*/
        else{
            str=str+" "
        }
    }
    for(let j=n+1;j>0;j--){
        if(i==n-1 &&(j==n+1||j==n||j==n-1||j==n-2||j==n-3)){
            continue;
        }
        str=str+" "
    }
    for(let j=0;j<4*(n-i);j++){
        str=str+" "
    }
    for(let j=i;j>=0;j--){
        if(i==n-1&&j==i){
            str=str+" "
        }
        str=str+"*"
    }
    console.log(str)
}