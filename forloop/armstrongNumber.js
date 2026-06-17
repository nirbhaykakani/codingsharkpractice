
function countDigits(n){
    num=n
    count=0
    while(num>0){
        count=count+1
        num=Math.floor(num/10)
    }
    return count
}

function power(n,count){
    var pow = 1
    for(let i=1;i<=count;i++){
        pow=pow*n
    }
    return pow
}

var n=154
var numb=n
var sum=0
var count=countDigits(n)
while(numb>0){
    sum=sum+power(numb%10,count);
    numb=Math.floor(numb/10);
}
if(n==sum){
    console.log(true)
}
else{
    console.log(false)
}
