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
// for (const student of students) {
//     const { name, class: className, score } = student;
//     if (!topStudents[className] || score > topStudents[className].score) {
//         topStudents[className] = { topStudent: name, score: score };
//     }
// }
// const result = Object.entries(topStudents).map(([className, data]) => ({
//     class: className,
//     topStudent: data.topStudent,
//     score: data.score
// }));
//
// console.log(result);

// bai3
const students = [
    { name: "An", class: "12A1", score: 8.5 },
    { name: "Bình", class: "12A1", score: 9.2 },
    { name: "Cường", class: "12A2", score: 7.5 },
    { name: "Dung", class: "12A2", score: 9.0 },
    { name: "Em", class: "12A3", score: 8.0 }
];

const classScores = {};


for (const student of students) {
    const { class: className, score } = student;

    if (!classScores[className]) {
        classScores[className] = { sum: 0, count: 0 };
    }

    classScores[className].sum += score;
    classScores[className].count += 1;
}


const result = Object.entries(classScores).map(([className, data]) => ({
    class: className,
    averageScore: +(data.sum / data.count).toFixed(2)
}));

console.log(result);
