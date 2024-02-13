// B-TextTrackList
// A-task
// va hakozo
// console.log("ishga tushdi");
// console.log("Jack Ma maslahatlari");
// const list = [
//   "yahshi talaba boling", //0-20
//   "togri boshliq tanlang va koproq hato qiling", // 20-30
//   "uzingizga ishlashingizni boshlang", // 30-40
//   "siz kuchli bolgan narsalarni qiling", // 40-50
//   "yoshlarga investitsiya qiling", // 50-60
//   "endi dam oling, foydasi yoq endi", // 60
// ];

// CALLBACK Function

console.log("------------CALLBACK FUNCTION------------------");

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     callback(null, list[5]);
//   }
// }

// maslahatBering(10, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   console.log("javob:", data);
// });
// console.log("passed here 1");

console.log("------------CALLBACK FUNCTION------------------");

// function maslahatBering(a, callback) {
//   if (typeof a !== "number") callback("insert a number", null);
//   else if (a <= 20) callback(null, list[0]);
//   else if (a > 20 && a <= 30) callback(null, list[1]);
//   else if (a > 30 && a <= 40) callback(null, list[2]);
//   else if (a > 40 && a <= 50) callback(null, list[3]);
//   else if (a > 50 && a <= 60) callback(null, list[4]);
//   else {
//     setInterval(function () {
//       callback(null, list[5]);
//     }, 1000);
//   }
// }

// console.log("passed here 0");

// maslahatBering(70, (err, data) => {
//   if (err) console.log("ERROR:", err);
//   else {
//     console.log("javob:", data);
//   }
// });
// console.log("passed here 1");

// ASYNC Function

console.log("==============DEFINITION PART======================");

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return list[5];
// setTimeout (function () {
// return list [5];
//  }, 5000);
//   }
// }

console.log("================CALL PART====================");

// call via then/catch:

// console.log("passed here 0");
// maslahatBering(65)
//   .then((data) => {
//     console.log("javob:", data);
//   })
//   .catch((err) => {
//      console.log("ERROR:", err);
//   });
// console.log("passed here 1");

// call via asyn/await:

// async function run() {
//   let javob = await maslahatBering(20);
//   console.log(javob);
//   javob = await maslahatBering(31);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

console.log("--------------ASYNC Promise function----------------");

// Promise function

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return Promise((resolve, reject) => {
//       setTimeout(() => {
//         resolve(list[5]);
//       }, 5000);
//     });
//   }
// }

// asyn/await
// async function run() {
//   let javob = await maslahatBering(25);
//   console.log(javob);
//   javob = await maslahatBering(70);
//   console.log(javob);
//   javob = await maslahatBering(41);
//   console.log(javob);
// }
// run();

console.log("------------SETINTERVAL------------------");

// async function maslahatBering(a) {
//   if (typeof a !== "number") throw new Error("insert a number");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return Promise((resolve, reject) => {
//       setInterval(() => {
//         resolve(list[5]);
//       }, 1000);
//     });
//   }
// }

// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);
// }
// run();

console.log("------------------------------");

// function countLetter(letter, word) {
// Boshlang'ich soni
// let count = 0;

// Har bir harfni tekshirish va sanash
// for (let i = 0; i < word.length; i++) {
//   if (word[i] === letter) {
//     count++;
//   }
// }

// Natijani qaytarish
//   return count;
// }

// Misol: countLetter("e", "engineer") 3 ni qaytaradi
// console.log(countLetter("a", "akmal"));

console.log("------------------------------");

// TASK_B

function findNum(a) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (!isNaN(a[i])) {
      count++;
    }
  }
  return count;
}
console.log(findNum("1tsdfs5fs8as78787dsa9"));

console.log("------------------------------");

// ANIMALS CHELLENGE

// const animal_list = [
//   "fox",
//   "ant",
//   "bird",
//   "lion",
//   "wolf",
//   "deer",
//   "bear",
//   "frog",
//   "hen",
//   "mole",
//   "duck",
//   "goat",
//   "dog",
//   "cat",
//   "bat",
//   "ck",
//   "cow",
// ];

// function findAnimals(txt) {
//   const foundAnimals = [];
//   for (let i = 0; i < animal_list.length; i++) {
//     const animal = animal_list[i];
//     if (txt.includes(animal)) {
//       foundAnimals.push(animal);
//       // Metindan topilgan hayvon nomini o'chirish uchun
//       // quyidagi qatorlarni izohga qo'yish mumkin.
//       // txt ichidan topilgan hayvon nomini o'chirish uchun.
//       // txt = txt.replace(new RegExp(animal, 'g'), ''); // Agar tekshirish uchun
//     }
//   }
//   return foundAnimals;
// }

// const javob = findAnimals("drib");
// console.log("Javob:", javob); // ["goat", "cat", "bird"]

// ANIMALS CHELLENGE

const animal_list = [
  "fox",
  "ant",
  "bird",
  "lion",
  "wolf",
  "deer",
  "bear",
  "frog",
  "hen",
  "mole",
  "duck",
  "goat",
  "dog",
  "cat",
  "bat",
  "cock",
  "cow",
];

function findAnimals(txt) {
  const name = [];
  for (const animal of animal_list)
    if (animal.split("").every((animal) => txt.includes(animal))) {
      name.push(animal);
    }

  return name;
}

console.log(findAnimals("taclionleomwtabolfreed"));
