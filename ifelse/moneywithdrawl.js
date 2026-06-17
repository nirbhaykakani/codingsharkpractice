var balance = 20000
var withdrawl=300
if(withdrawl<balance && withdrawl%5==0){
    console.log("Withdrawl:",withdrawl)
    console.log("Amount left: ",balance-withdrawl)
}else{
    console.log("Withdrawl not possible")
}