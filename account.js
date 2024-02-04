// Account js da functionlar orqali emas class orqali object hosil qilamiz
// va u class ni modul package file orqali qanday qilib index ichida ishlatishni ko`rib chiqamiz
// 
// const moment  = require('moment');


// class Account{
//     #amount; //amount private
// #account_id; //account_id private
//     constructor(name /*account kimga tegishli*/ , amount /*qancha pul borligi*/, accoun_id ){
// this.name =name;
// this.#amount =amount;
// this.#account_id =accoun_id;
//     }
//      tellMeBalance(){
//         console.log(`Sizning hisobingizdagi qoldiq:`, this.#amount);
//         return this.#amount;
//      }

//      withdrawMoney(amount){
//         if (this.#amount>amount){
//         this.#amount-=amount;
//         console.log(`Hisobingizdan ${amount} so'm yechildi, hisobingizdagi qoldiq summa ${this.#amount} so'm`);
//         } else {
//             console.log(`sizning balansingizda belgilangan summadagi mablag' mavjud emas. Balansingiz: ${this.#amount}` );
//         }
//     }

//     makeDeposit(deposit){
//         this.#amount+=deposit;
//         console.log(`To your account was deposited ${deposit}, your accout balance is ${this.#amount} `);
//     }

//     giveMeDetails(){
//         console.log(`Hello Dear ${this.name}, your account balance is ${this.#amount}, and your account number is: ${this.#account_id}`);
//     }

//     static tellMeAboutClass(){
//         console.log("This is a class for creating objects that represent bank accounts.");
//     }

//     static tellMeTime(){
//         console.log(`This is current time: ${moment().format('YYYY MM DD HH:mm:ss')}.`);
//     }


// }

// module.exports =  Account; 