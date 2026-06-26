var items=[{
    "a":20
},{
    "a":22
},{
    "a":22
}]

const count=[]
var j=0;
var nonDuplicate={}
for(let i=0;i<items.length;i++){
    if (count[items[i]["a"]] == undefined) {
        count[items[i]["a"]] = 0;
    }
    count[items[i]["a"]]++;
    if(count[items[i]["a"]]>1){
        continue;
    }
     
    nonDuplicate[j++]=items[i]["a"];
}
items = nonDuplicate;
console.log(items);