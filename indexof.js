x=[1,2,3]
console.log(x);                         //[ 1, 2, 3 ]
console.log(x[-1]);                     //undefined
x[-1]=5;
console.log(x);                         //[ 1, 2, 3, '-1': 5 ]
console.log(x[-1]);                     //5

console.log(x.indexOf(5));              //-1
console.log(x.indexOf(1000000));        //-1
console.log(x.indexOf(254982));         //-1
// indexOf() looks for a value in an array, if it does not find it,
// it returns -1

console.log(x[x.indexOf(5)]);           //5
console.log(x[x.indexOf(1000000)]);     //5
console.log(x[x.indexOf(254982)]);      //5
