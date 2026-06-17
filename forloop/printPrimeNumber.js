function primeOrNot(num){
    if(num<=1){
        return false;
    }
    for(let i=num-1;i>1;i--){
        if(num%i==0){
            return false;
        }
    }
    return true;
}
var n=100
for(let i=1;i<=n;i++){
    if(primeOrNot(i)){
        console.log(i)
    }
}