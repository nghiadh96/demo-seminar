// File JavaScript với nhiều lỗi ESLint và Prettier

// Lỗi: biến không được sử dụng

// Lỗi: function không được sử dụng
function unusedFunction() {
    return "unused";
}

// Lỗi: biến không được định nghĩa

// Lỗi: thiếu dấu chấm phẩy

// Lỗi: console.log không được khuyến khích

// Lỗi: object không đúng format
const badObject = { a: 1, b: 2, c: 3, d: 4 };

// Lỗi: array không đúng format

// Lỗi: function có nhiều vấn đề
function badFunction(param1, param2) {
    return param1 + param2;
}

// Lỗi: arrow function không đúng format
const badArrowFunction = (x, y) => x + y;

// Lỗi: biến không được sử dụng
let unusedLet = "unused";
var unusedVar = "unused";

// Lỗi: thiếu dấu chấm phẩy
const anotherVar = "test";

// Lỗi: console.log không được khuyến khích

// Lỗi: object không đúng format
const anotherBadObject = { name: "John", age: 30, city: "New York" };

// Lỗi: array không đúng format
const anotherBadArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
