var num=1243
var last=num%10;

while(num>=10){
    num=Math.floor(num/10);
}
var first=num
console.log("Sum of first and last:",first+last)