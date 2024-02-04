//Module package CORE
// setTimeout(function(){
//     console.log('ishga tushdi');
// }, 5000);
// let number =0;
// setInterval(function() {
//     console.log("hisob", number);
// number++;

// }, 1000);
// const fs = require ('fs');
// const duck=fs.readFileSync('./input.txt', 'utf8')
// console.log(duck);

// console.log('==============================');

// fs.writeFileSync("./input.txt", `${duck}  \n\t\t by Joseph `);
// const new_data = fs.readFileSync('./input.txt', 'utf8');
// console.log(new_data);

//Module package EXTERNAL

// const moment = require('moment'); //require
// // const time =moment(). format('YYYY-MM-DD');
// // const time =moment(). format();
// // console.log(time);

// setInterval(() => {
// const time =moment(). format();
// console.log(`hozirgi vaqt: ${time}`);
// },5000);

// const inquirer = require ('inquirer');
// inquirer
// .prompt([{type: 'input', name: 'raqam', message: 'raqamni kiriting?'}])
// .then((answer) =>{
//     console.log('man kiritgan raqam qiymati:', answer.raqam);
// })
// .catch((err) => console.log(err));

// const validator= require ('validator');
// // const test = validator.isEmail('foo@bar.com'); //=> true
// // const test= validator.isInt('565465465');
// const test= validator.isIP('27.117.99.4');
// console.log(test);
// import { v4 as uuidv4 } from 'uuid';
// uuidv4(); // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'
// const { v4: uuidv4 } = require('uuid');
// const random = uuidv4();
// console.log("random:", random);
// const chalk = require ('chalk');
// const log = console.log;
// demak chalk bizga o`zidan keyingi yozuvlarni rangini belgilashga yordam beradi
// log(`${chalk.blue("Hello")}========${chalk.redBright("the following is random number:")}  ${chalk.yellowBright(random)}==============${chalk.red("!")}`);
// var uuid = require('uuid');
// const uuidv1 = require('uuid/v1');
// console.log(uuid.v1());

//Module package FILE
// const calculate = require ('./hisob.js');
//   const natija = calculate.kopaytirish(80,20);
// console.log(natija);

// console.log('=====================');
// const natija2 = calculate.qoshish(70,20);
// console.log(natija2);

//  console.log('========================');

//  const natija3 = calculate.ayirish(90,20);
// console.log(natija3);

// console.log(require("module").wrapper);

// salov tug`iladi nimaga module ni require qilganda require() ni ichida
// birsafar moment deb yozsam, bir safar ./hisob.js degan syntaxis ni sihlatyapman degan 
// savol tug`iladi

// const Account =  require ('./account');
// Account.tellMeAboutClass();
// Account.tellMeTime();

// const account = new Account ("Salov",500000, 717273747576777879);
// console.log(account);

// account.giveMeDetails();
// account.makeDeposit(455000);
// account.withdrawMoney(50000);
// account.giveMeDetails();
// account.withdrawMoney(4000000);
