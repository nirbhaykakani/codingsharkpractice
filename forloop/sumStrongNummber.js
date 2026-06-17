function factorial(num){
    var factorial=1
    for(let i=1;i<=num;i++){
        factorial=factorial*i
    }
    return factorial;
}
function strongNumber(n){
    var numb=n 
    var sum=0
    while(numb>0){
        sum=sum+factorial(Math.floor(numb%10));
        numb=Math.floor(numb/10);
    }
    if(sum==n){
        return true
    }
    else{
        return false
    }
}
var sumStrong=0
var strongN=145
for(let i=1;i<=strongN;i++){
    if(strongNumber(i)){
        sumStrong=sumStrong+i
    }
}
console.log(sumStrong)