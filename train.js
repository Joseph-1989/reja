// TASK-F:

// Shunday findDoublers function tuzing, unga faqat bitta string argument pass bolib,
// agar stringda bir hil harf qatnashgan bolsa true, qatnashmasa false qaytarishi kerak.
// MASALAN: getReverse("hello") return true return qiladi

function findDoublers(string) {
  let count = {};

  for (const char of string) {
    if (!count[char]) {
      count[char] = 1;
    } else {
      count[char]++;
    }
  }

  for (const key in count) {
    if (count[key] > 1) {
      return true;
    }
  }
  return false;
}

console.log("\n=!=-!=-!=-!=-!=-!=-!\n");
console.log(findDoublers("Hello")); // true
console.log(findDoublers("Akmal")); // false
console.log(findDoublers("Onam")); // true
console.log(findDoublers("qora")); // false
