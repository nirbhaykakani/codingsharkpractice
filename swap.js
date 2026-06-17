var a=20;
var b=30;
var c=0;
console.log("a =",a,",b =",b)
c=a;
a=b;
b=c;
console.log("a =",a,",b =",b)
a=a+b;
b=a-b;
a=a-b;
console.log("a =",a,",b =",b)