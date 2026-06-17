var num=698
var reverse=""
while(num>0){
    reverse=reverse+num%10
    num=Math.floor(num/10)
}
console.log(reverse);