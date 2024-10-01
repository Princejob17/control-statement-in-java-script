let m=2
let n=4
let sum=0

if (m>n){
    console.log(0);
}
else if(m<=n){
    for(let i=m ;i<=n;i++){
        let p=i*i*i
        sum+=p
    }
}
console.log(sum);