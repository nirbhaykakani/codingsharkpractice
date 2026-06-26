function power(n,power){
    sum=1
    for(let i=1;i<=power;i++){
        sum=sum*n;
    }
    return sum
}

for(let i=1;i<=10;i++){
    console.log((3*(power(i,2))))
    console.log((3*(power(i,2))))
}