const Menu=[2,3,5];
let Total=0;


for(let j =0;j <3;j++) {
    let key=Menu[j];
    switch (key) {
        case 1:
            let Biriyani = 240;
            Total+=Biriyani;
            break;
        case 2:
            let FriedRice = 300;
            Total+=FriedRice;
            break;
        case 3:
            let Tandoori =520;
            Total+=Tandoori;
            break;
        case 4:
            let Parota = 100;
            Total+=Parota;
            break;
        case 5:
            let BBQ=400;
            Total+=BBQ;
            break;
        default:
            break;
    }

}
let Discount=Total-(Total/10)
console.log(Discount);