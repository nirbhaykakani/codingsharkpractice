
function happy(n,count){
    var numb=n
    var sum=0

    while(numb>0){
        let digit =numb%10;
        sum=sum+digit*digit;
        numb=Math.floor(numb/10);
    }

    count=count+1
    if(count>=10){
        return false;
    }
    if(sum==1){
        return true;
    }
    else{
        return happy(sum,count+1);
    }
}

var n=70
var count=0

console.log(happy(n,0))