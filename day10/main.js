// // 1. Biến và Kiểu Dữ Liệu
var a = 10;
let b = 20;
const c = 30;

var x;
x = 5;

console.log("a =", a);
console.log("b =", b);
console.log("c =", c);
console.log("x =", x);
// 2. Toán tử số học
let x = 15;
let y = 4;

console.log("x + y =", x + y);
console.log("x - y =", x - y);
console.log("x * y =", x * y);
console.log("x / y =", x / y);
console.log("x % y =", x % y);
console.log("x ** 2 =", x ** 2);
// 3. Toán tử tăng và giảm
let a = 5;

console.log("a++ =", a++);
console.log( a);

console.log("++a =", ++a);
console.log("a-- =", a--);
console.log(a);


let b = 2;
let c = b++ + ++b + b--;
console.log("Giá trị b cuối cùng:", b);
console.log("Giá trị c:", c);
// 4. Toán tử với String
let str1 = "Hello";
let str2 = "World";

console.log(str1 + " " + str2);

console.log("abc" - "def");
console.log("abc" * 3);
console.log("abc" / 2);

console.log("5" + "10");
console.log("5" - "2");
console.log("10" * "2");
// 5. Number + String
let num = 10;
let str = "5";

console.log(num + str);
console.log(num - str);
console.log(num * str);
console.log(num / str);
// 6. Ép kiểu tường minh
let strNumber = "123";
let realNumber = Number(strNumber);
console.log(typeof realNumber);
console.log(realNumber + 1);
// Number -> String
let num2 = 456;
let str2 = String(num2);
console.log(typeof str2);
console.log(str2 + "7");

// Boolean -> Number
console.log(Number(true));
console.log(Number(false));

// Boolean -> String
console.log(String(true));

// String -> Boolean
console.log(Boolean("hello"));
console.log(Boolean(""));

// Number -> Boolean
console.log(Boolean(0));
console.log(Boolean(100));