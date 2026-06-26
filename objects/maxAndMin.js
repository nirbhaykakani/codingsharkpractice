var items=[{
    "a":20
},{
    "a":24
},{
    "a":22
}]

var max=items[0]["a"]
var min=items[0]["a"]

for(let i=1;i<items.length;i++){
    if(items[i]["a"]>max){
        max=items[i]["a"]
    }
    if(items[i]["a"]<min){
        min=items[i]["a"]
    }
}

console.log("Max:",max)
console.log("Min:",min)
