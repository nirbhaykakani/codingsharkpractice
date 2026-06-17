var num=2000
if(num%4==0){
    if(num%100==0){
        if(num%400==0){
            console.log("Leap year")
        }
        else{
            console.log("Not a leap year")
        }
    }
}
else{
    console.log("Not a leap year")
}