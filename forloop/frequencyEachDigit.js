var num=12112
const value=[];
while(num>0){
    let digit=Math.floor(num%10);
    if (value[digit] === undefined) {
        value[digit] = 0;
    }
    value[digit]++;
    num=Math.floor(num/10);
}
for(let i=0;i<value.length;i++){
    if (value[i] === undefined) {
        value[i] = 0;
    }
    console.log(i,":",value[i])
}