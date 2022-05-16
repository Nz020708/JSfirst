// let a=5;
// a=6;
// console.log(a);
// let array =[5,6,7,8,9,32,45,12];
// let sum=0;
// for (let index = 0; index < array.length; index++) {
//     if (array[index]%2!=0) {
//         sum+=array[index];

//     }
// }
// console.log(sum);

// let a='SAlAM';
// function Check(word){
//     if (word==a.toLowerCase|| word==a.toUpperCase) {
//         console.log("true")
//     }
//     else{
//         console.log("false")
//     }
// }
// Check();

// 
// function Check(a,b) {
//     if (a+b==100 || a===100 || b===100) {
//         return true;
//     }
//     else{
//         return false;

//     }
// }
// console.log(Check(45,55));

function CreditCalculator(amount,month) {
    let rem=amount%month;
    let monthPayment=(amount-rem)/month;
    for (var index = 1; index < month; index++) {
        console.log(`${index}-ci ayin odenishi:${monthPayment}`);
        
    }
    console.log(`${index}-ci ayin odenishi:${monthPayment+rem}`);

}
CreditCalculator(2000,3);