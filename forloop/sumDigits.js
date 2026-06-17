var num=130
var sum=0
while(num>0){
    sum=sum+num%10;
    num=Math.floor(num/10);
}
console.log("Sum: ",sum)