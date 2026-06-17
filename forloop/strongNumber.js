function factorial(num){
    var factorial=1
    for(let i=1;i<=num;i++){
        factorial=factorial*i
    }
    return factorial;
}
var n=145
var numb=n 
var sum=0
while(numb>0){
    sum=sum+factorial(Math.floor(numb%10));
    numb=Math.floor(numb/10);
}
if(sum==n){
    console.log("Strong Number")
}
else{
    console.log("Not a strong number")
}