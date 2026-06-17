var balance=200000
function recurseCountNotes(balance){
    if(balance>=500){
        return 1+recurseCountNotes(balance-500)
    }else if(balance>=200){
        return 1+recurseCountNotes(balance-200)
    }else if(balance>=100){
        return 1+recurseCountNotes(balance-100)
    }
    else if(balance>=50){
        return 1+recurseCountNotes(balance-50)
    }
    else if(balance>=20){
        return 1+recurseCountNotes(balance-20)
    }
    else if(balance>=10){
        return 1+recurseCountNotes(balance-10)
    }
    else if(balance>=5){
        return 1+recurseCountNotes(balance-5)
    }else if(balance>=2){
        return 1+recurseCountNotes(balance-2)
    }else if(balance==1){
        return 1+recurseCountNotes(balance-1)
    }
    else{
        return 0;
    }
}

function countFiveHundred(balance){
    if(balance<500){
        return 0;
    }
    else{
        return 1+countFiveHundred(balance-500)
    }
}
function countTwoHundred(balance){
    if(balance>=500){
        return countTwoHundred(balance%500)
    }
    else if(balance<200){
        return 0;
    }
    else{
        return 1+countTwoHundred(balance-200)
    }
}
function countOneHundred(balance){
    if(balance>=500){
        return countOneHundred(balance%500)
    }
    else if(balance>=200){
        return countOneHundred(balance%200)
    }
    else if(balance<100){
        return 0;
    }
    else{
        return 1+countOneHundred(balance-100)
    }
}
function countFifty(balance){
    if(balance>=500){
        return countFifty(balance%500)
    }
    else if(balance>=200){
        return countFifty(balance%200)
    }
    else if(balance>=100){
        return countFifty(balance%100)
    }
    else if(balance<50){
        return 0;
    }
    else{
        return 1+countFifty(balance-50)
    }
}
function countTwenty(balance){
    if(balance>=500){
        return countTwenty(balance%500)
    }
    else if(balance>=200){
        return countTwenty(balance%200)
    }
    else if(balance>=100){
        return countTwenty(balance%100)
    }
    else if(balance>=50){
        return countTwenty(balance%50)
    }
    else if(balance<20){
        return 0;
    }
    else{
        return 1+countTwenty(balance-20)
    }
}
function countTen(balance){
    if(balance>=500){
        return countTen(balance%500)
    }
    else if(balance>=200){
        return countTen(balance%200)
    }
    else if(balance>=100){
        return countTen(balance%100)
    }
    else if(balance>=50){
        return countTen(balance%50)
    }
    else if(balance>=20){
        return countTen(balance%20)
    }
    else if(balance<10){
        return 0;
    }
    else{
        return 1+countTen(balance-10)
    }
}
function countFive(balance){
    if(balance>=500){
        return countFive(balance%500)
    }
    else if(balance>=200){
        return countFive(balance%200)
    }
    else if(balance>=100){
        return countFive(balance%100)
    }
    else if(balance>=50){
        return countFive(balance%50)
    }
    else if(balance>=20){
        return countFive(balance%20)
    }
    else if(balance>=10){
        return countFive(balance%10)
    }
    else if(balance<5){
        return 0;
    }
    else{
        return 1+countFive(balance-5);
    }
}
function countTwo(balance){
    if(balance>=500){
        return countTwo(balance%500)
    }
    else if(balance>=200){
        return countTwo(balance%200)
    }
    else if(balance>=100){
        return countTwo(balance%100)
    }
    else if(balance>=50){
        return countTwo(balance%50)
    }
    else if(balance>=20){
        return countTwo(balance%20)
    }
    else if(balance>=10){
        return countTwo(balance%10)
    }
    else if(balance>=5){
        return countTwo(balance%5)
    }
    else if(balance<2){
        return 0;
    }
    else{
        return 1+countTwo(balance-2);
    }
}
function countOne(balance){
    if(balance>=500){
        return countOne(balance%500)
    }
    else if(balance>=200){
        return countOne(balance%200)
    }
    else if(balance>=100){
        return countOne(balance%100)
    }
    else if(balance>=50){
        return countOne(balance%50)
    }
    else if(balance>=20){
        return countOne(balance%20)
    }
    else if(balance>=10){
        return countOne(balance%10)
    }
    else if(balance>=5){
        return countOne(balance%5)
    }
    else if(balance>=2){
        return countOne(balance%2);
    }
    else if(balance<1){
        return 0;
    }
    else{
        return 1+countOne(balance-1);
    }
}
console.log("Balance: ",balance);
console.log("Total notes:",recurseCountNotes(balance))
console.log("Total $500 notes:",countFiveHundred(balance))
console.log("Total $200 notes:",countTwoHundred(balance))
console.log("Total $100 notes:",countOneHundred(balance))
console.log("Total $50 notes:",countFifty(balance))
console.log("Total $20 notes:",countTwenty(balance))
console.log("Total $10 notes:",countTen(balance))
console.log("Total $5 notes:",countFive(balance))
console.log("Total $2 notes:",countTwo(balance))
console.log("Total $1 note:",countOne(balance))