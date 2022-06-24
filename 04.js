//implicito

let a = 456;
let b = "456";


console.log(a == b); //true ==> compara valor
console.log(a === b); //false ==> compara valor e tipo


console.log(a+b);//concatena

console.log(a+Number(b));//explicito 912

b = "456a";

console.log(a+Number(b));//NaN
