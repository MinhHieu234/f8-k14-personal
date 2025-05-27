// bai1
//
// const students = [
//     { name: "An", class: "12A1" },
//     { name: "Bình", class: "12A2" },
//     { name: "Cường", class: "12A1" },
//     { name: "Dung", class: "12A3" },
//     { name: "Em", class: "12A2" },
// ];
//
// const grouped = {};
//
// for (const student of students) {
//     const { name, class: className } = student; // Destructuring cho gọn
//     if (!grouped[className]) {
//         grouped[className] = [];
//     }
//     grouped[className].push(name);
// }
//
// console.log(grouped);
// bai2
// const students = [
//     { name: "An", class: "12A1", score: 8.5 },
//     { name: "Bình", class: "12A1", score: 9.2 },
//     { name: "Cường", class: "12A2", score: 7.5 },
//     { name: "Dung", class: "12A2", score: 9.0 },
//     { name: "Em", class: "12A3", score: 8.0 }
// ];
//
// const topStudents = {};
//
// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     const className = student.class;
//
//     if (!topStudents[className] || student.score > topStudents[className].score) {
//         topStudents[className] = {
//             topStudent: student.name,
//             score: student.score
//         };
//     }
// }
// for (const className in topStudents) {
//     const data = topStudents[className];
//     console.log("Lớp:", className, "- Học sinh giỏi nhất:", data.topStudent, "- Điểm:", data.score);
// }


// bai3
// const students = [
//     { name: "An", class: "12A1", score: 8.5 },
//     { name: "Bình", class: "12A1", score: 9.2 },
//     { name: "Cường", class: "12A2", score: 7.5 },
//     { name: "Dung", class: "12A2", score: 9.0 },
//     { name: "Em", class: "12A3", score: 8.0 }
// ];
// const classScores = {};
// for (let i = 0; i < students.length; i++) {
//     const student = students[i];
//     const className = student.class;
//     if (!classScores[className]) {
//         classScores[className] = {
//             sum: 0,
//             count: 0
//         };
//     }
//     classScores[className].sum += student.score;
//     classScores[className].count += 1;
// }
// for (const className in classScores) {
//     const data = classScores[className];
//     const average = data.sum / data.count;
//     console.log("Lớp:", className, "- Điểm trung bình:", average.toFixed(2));
// }

