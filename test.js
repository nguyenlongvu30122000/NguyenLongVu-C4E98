
//Bai 1:

// let n = prompt(`Moi ban nhap so nguyen duong n: `);
// if( n<4 || n>20 ){
//     prompt(` Moi ban nhap lai so nguyen duong`);
// }else{
//     let inputN = Number(prompt("Moi ban nhap so lay doi xung"));
//     function findIppositeNumber(n , inputN){
//         if((n/2) > inputN){
//             let a = (n/2) + inputN;
//             alert(`So can tim la ${a}`);
//         }if((n/2) < inputN){
//             let b = inputN - (n/2);
//             alert(`So can tim la ${b}`);
//         }
//     }
//     findIppositeNumber(n,inputN);

// }


// Bai2:


// let S1 = prompt(`Moi ban nhap chuoi 1`);
// let S2 = prompt(`Moi ban nhap chuoi 2`);

// function merge2String(S1, S2){
//     let Array1 = S1.split("");
//     let Array2 = S2.split("");
//     let a = "";
//     if( Array1.length < Array2.length){
//         for( let i =0 ; i<Array1.length; i++){
//             a += Array1[i];
//             a += Array2[i];
//         } for( let i= Array1.length; i< Array2.length ; i++){
//             a += Array2[i];
//         }
//     } else {
//         for( let i= 0; i<Array2.length;i++){
//             a += Array2[i];
//             a += Array1[i];
//         }for( let i = Array2.length; i< Array1.length; i++){
//             a += Array2[i];
//         }
//     }
//     console.log(a);
// }
// merge2String(S1, S2);


// Bai 3:
 
const btn1 = document.getElementById("btn");
const input1 = document.getElementById("input");
let lucky = Math.floor((Math.random() * 10)+1);
let b =0;
btn1.onclick = function (){
    let a = input1.value;
    if( a != lucky){
        alert(`Chuc ban may man lan sau!!!`);
        input1.value =" " ;
        b ++;
        if( b> 3 && a!=lucky){
            
            console.log(lucky);
        }
    }
    else{
        alert(`Chuc mung ban da trung thuong!!!`);
    }   
}

// const btn1 = document.getElementById("btn");
// const input1 = document.getElementById("input");
// let lucky = Math.floor((Math.random() *10)+1);
// let b = 0;
// btn1.onclick= function(){
//     let a = input1. value;
//     do{
//         alert(`Chuc ban may man lan sau`);
//         input1.value= "";
//         b++;
//         if ( b == 3){
//             alert(`Con so may man la ${lucky}`)
//             break;
//         }
//     }while( a != lucky);
//     if( a == lucky){
//         alert(`Chuc mung ban da trung thuong`)
//     }
// }
