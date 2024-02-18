// Shunday function tuzing, u bitta string argumentni qabul qilib osha stringni teskari qilib return qilsin.
// MASALAN: getReverse("hello") return qilsin "olleh"

function getReverse(str) {
  let newStr = "";
  console.log("\n=!=-!=-!=-!=-!=-!=-!\n");
  console.log("str:", str);
  console.log("\n=!=-!=-!=-!=-!=-!=-!\n");
  console.log("newStr:", newStr);
  console.log("\n=!=-!=-!=-!=-!=-!=-!\n");
  for (let i = str.length - 1; i >= 0; i--) {
    console.log("i: ", i);
    console.log("\n=!=-!=-!=-!=-!=-!=-!\n");
    console.log("str[i]: ", str[i]);
    console.log("\n=!=-!=-!=-!=-!=-!=-!\n");
    console.log("newStr:", newStr);
    console.log("\n=!=-!=-!=-!=-!=-!=-!\n");
    newStr += str[i];
  }
  return newStr;
}

console.log("\n=!=-!=-!=-!=-!=-!=-!\n");
console.log(getReverse("Hello"));
console.log(getReverse("Akmal"));
console.log(getReverse("Onam"));
console.log(getReverse("qora"));
console.log("\n=!=-!=-!=-!=-!=-!=-!\n");
