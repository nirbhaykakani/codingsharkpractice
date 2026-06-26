var sumItems=[{
    "a":20
},{
    "a":21
},{
    "a":22
}]

sum=0
for(let i=0;i<sumItems.length;i++){
    sum=sum+sumItems[i]["a"]
}
console.log(sum)