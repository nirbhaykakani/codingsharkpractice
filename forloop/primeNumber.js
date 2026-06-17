
function prime(num){
    for(let i=num-1;i>1;i--){
        if(num%i==0){
            return false;
        }
    }
    return true;
}

var num=11;
var sumOfPrime=0;
for(let i=num;i>=1;i--){
    if(prime(i)==false){
        continue;
    }
    sumOfPrime=sumOfPrime+i;
}
console.log("Sum of prime numbers: ",sumOfPrime)
