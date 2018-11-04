/* jshint esversion: 6*/
const foo = function() { return "hello" }
const foo1 = function() { return true }
const foo2 = function() { return 5 }

console.log('foo:', foo);
console.log('typeof foo:', typeof(foo()));
console.log('foo1:', foo1);
console.log('typeof foo1:', typeof(foo1()));
console.log('foo2:', foo2);
console.log('typeof foo2:', typeof(foo2()));

function b(){
    return a;
    a = 10;
    function a(){}
    var a = '11';
}

console.log('type of b:', typeof(b));