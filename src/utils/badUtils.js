// File JavaScript với nhiều lỗi ESLint và Prettier

// Lỗi: biến không được sử dụng
const unusedGlobalVar = 'not used anywhere'

// Lỗi: function không được sử dụng
function unusedFunction() {
    return 'unused'
}

// Lỗi: biến không được định nghĩa
console.log(undefinedGlobalVar)

// Lỗi: thiếu dấu chấm phẩy
const missingSemicolon = 'test'

// Lỗi: console.log không được khuyến khích
console.log('Multiple console statements')
console.warn('Warning message')
console.error('Error message')

// Lỗi: object không đúng format
const badObject = { a: 1, b: 2, c: 3, d: 4 }

// Lỗi: array không đúng format
const badArray = [1, 2, 3, 4, 5]

// Lỗi: function có nhiều vấn đề
function badFunction(param1, param2) {
    const unusedLocalVar = 'not used'
    console.log('Inside function')
    console.log(undefinedVar)
    return param1 + param2
}

// Lỗi: arrow function không đúng format
const badArrowFunction = (x, y) => x + y

// Lỗi: biến không được sử dụng
let unusedLet = 'unused'
var unusedVar = 'unused'

// Lỗi: thiếu dấu chấm phẩy
const anotherVar = 'test'

// Lỗi: console.log không được khuyến khích
console.log('Final console log')

// Lỗi: object không đúng format
const anotherBadObject = { name: 'John', age: 30, city: 'New York' }

// Lỗi: array không đúng format
const anotherBadArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
