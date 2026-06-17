var physics=90
var chemistry=85
var maths=95
var biology=75
var computer=80

var percentage=(physics+chemistry+maths+biology+computer)/5

if(percentage>=90){
    console.log("A")
}else if(percentage>=80){
    console.log("B")
}else if(percentage>=70){
    console.log("C")
}else if(percentage>=60){
    console.log("D")
}else if(percentage>=40){
    console.log("E")
}else{
    console.log("F")
}