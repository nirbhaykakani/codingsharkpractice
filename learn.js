// for (var i = 0; i < 5; i++) {
//     console.log(i)
// }
// console.log(i)


// if (-1) {
//     console.log("Call If")
// }else{
//     console.log("Call Else")
// }

// let a = 1;
// let b = 2;
// let c = 3;

// if(c>b>a){
//     console.log("Yes its second");
// }

// if(a<b<c){
//     console.log("Yes its first");
// }


for (let i = 1; i < 6; i++) {
    let str = "";
    for (let j = 0; j < i; j++) {
        str += "*"
    }
    console.log(str);
}
console.log()

for(let i=4;i>0;i--){
    let str=""
    for(let j=i;j>0;j--){
        str+="*"
    }
    console.log(str);
}
console.log()
var n=4
for(let i=n-1;i>=0;i--){
    let str=""
    for(let j=i;j>0;j--){
        str=str+" "
    }
    for(let j=n-i;j>0;j--){
        str=str+"*"
    }
    console.log(str);
}
console.log()
var n=4

for(let i=0;i<n;i++){
    let str=""
    for(let j=0;j<i;j++){
        str=str+" "
    }
    for(let j=n-i;j>0;j--){
        str=str+"*"
        
    }
    for(let j=0;j<i;j++){
        str=str+" "
    }
    console.log(str);
}

console.log()
var n=4
for(let i=n-1;i>=0;i--){
    let str=""
    for(let j=i;j>0;j--){
        str=str+" "
    }
    for(let j=n-i;j>0;j--){
        str=str+"*"
        str=str+" "
    }
    console.log(str);
}
console.log()
var n=4

for(let i=0;i<n;i++){
    let str=""
    for(let j=0;j<i;j++){
        str=str+" "
    }
    for(let j=n-i;j>0;j--){
        str=str+"*"
        str=str+" "
    }

    console.log(str);
}



