var units=200
var costs=0
for(let i=1;i<=units;i++){
    if(i<=50){
        costs=costs+0.50
    }else if(51<=i && i<=150){
        costs=costs+0.75
    }else{
        costs=costs+1.20
    }
} 
costs=costs+0.2*costs
console.log(costs)