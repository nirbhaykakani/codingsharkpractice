var num=1
if(num<=1){
    console.log("It is not a Prime Number")
    return;
}
for(let i=num-1;i>1;i--){
    if(num%i==0){
        console.log("It is not a Prime Number")
        return;
    }
}
console.log("It is a Prime Number")

