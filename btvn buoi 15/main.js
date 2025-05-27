//
// const colors = Array.from({ length: 20000 }, (_, i) => ({
//     id: i + 1,
//     name: `color ${i + 1}`
// }));
// const flowers = Array.from({ length: 400000 }, (_, i) => ({
//     id: i + 1,
//     name: `flower ${i + 1}`,
//     colorId: Math.floor(Math.random() * 20000) + 1 // random colorId between 1 and 20000
// }));
// colors.sort((a, b) => a.id - b.id);
// flowers.sort((a, b) => a.colorId - b.colorId);
// const merged = [];
// let i = 0, j = 0;
//
// while (i < flowers.length && j < colors.length) {
//     const flower = flowers[i];
//     const color = colors[j];
//     if (flower.colorId === color.id) {
//         let tempI = i;
//         while (tempI < flowers.length && flowers[tempI].colorId === color.id) {
//             merged.push({
//                 flowerId: flowers[tempI].id,
//                 flowerName: flowers[tempI].name,
//                 colorId: color.id,
//                 colorName: color.name
//             });
//             tempI++;
//         }
//         j++;
//         i = tempI;
//     } else if (flower.colorId < color.id) {
//         i++;
//     } else {
//         j++;
//     }
// }
// console.log(merged.length);



// const colors = Array.from({ length: 20000 }, (_, i) => ({
//     id: i + 1,
//     name: `color ${i + 1}`
// }));
//
// const flowers = Array.from({ length: 400000 }, (_, i) => ({
//     id: i + 1,
//     name: `flower ${i + 1}`,
//     colorId: Math.floor(Math.random() * 20000) + 1
// }));
//
//
// colors.sort((a, b) => a.id - b.id);
//
//
// function binarySearchColor(colors, colorId) {
//     let left = 0;
//     let right = colors.length - 1;
//
//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (colors[mid].id === colorId) {
//             return colors[mid];
//         } else if (colors[mid].id < colorId) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         }
//     }
//
//     return null;
// }
//
//
// const merged = flowers.map(flower => {
//     const color = binarySearchColor(colors, flower.colorId);
//     return {
//         flowerId: flower.id,
//         flowerName: flower.name,
//         colorId: flower.colorId,
//         colorName: color ? color.name : "Unknown"
//     };
// });

console.log(merged.length);