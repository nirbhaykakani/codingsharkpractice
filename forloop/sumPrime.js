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
var num=8;
var sumPrime=0;
for(let i=1;i<=num;i++){
    if(primeOrNot(i)){
        sumPrime=sumPrime+i
    }
}
console.log("Sum of Prime:",sumPrime)