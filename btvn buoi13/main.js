// Bài 01
// Cho trước 1 mảng số nguyên, yêu cầu tìm số lớn nhất, nhỏ nhất trong mảng và vị trí
// const numbers = [9,8,11,20,25];
// let numberMax = numbers[0];
// let numberLocationMax= 0;
// let numberMin=numbers[0];
// let numberLocationMin=0;
//
// for (let i = 1; i < numbers.length; i++) {
//     if (numbers[i] > numberMax) {
//         numberMax = numbers[i];
//         numberLocationMax = i;
//     }
//     if (numbers[i] < numberMin) {
//         numberMin = numbers[i];
//         numberLocationMin = i;
//     }
// }
//
// console.log("Phần tử lớn nhất là:", numberMax, "ở vị trí thứ :", numberLocationMax);
// console.log("Phần tử nhỏ nhất là:", numberMin, "ở vị trí thứ : ", numberLocationMin);
// Bài 03
// Cho trước 1 mảng bất kỳ, nếu trong mảng có các phần tử trùng nhau thì chỉ giữa lại 1 (Gọi là lọc trùng). In ra mảng sau khi đã xử lý
// const arr = [1, 2, 3, 2, 4, 1, 5, 3, 6,2,6];
// const Arr = arr.filter((value, index) => {
//     return arr.indexOf(value) === index;
// });
// console.log("Mảng sau khi lọc trùng:",Arr);
// bai4
var numbers = [5, 1, 9, 8, 10];
var element = 4;
numbers.sort(function(a, b) {
    return a - b;
});
console.log("Mảng sau khi sắp xếp:", numbers);
let insertIndex = 0;
while (insertIndex < numbers.length && numbers[insertIndex] < element) {
    insertIndex++;
}
numbers.splice(insertIndex, 0, element);
console.log("Mảng sau khi chèn", element + ":", numbers);
