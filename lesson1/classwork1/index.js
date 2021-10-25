// console.log("hello world");
// const year = 2021;
// console.log(year);
// const planetName = "earth";
// console.log(planetName);
// const currentUserTime = "12:20";
// console.log(currentUserTime);
// const countArticle = 10;
// console.log(countArticle);
// const isCash = true;
// console.log(isCash);
// const firstName = "Oleg";
// console.log(firstName);
// const middleName = "Ivanov";
// console.log(middleName);
// const lastName = "Ivanovich";
// console.log(lastName);

// практика Формирование строк через циклы в JavaScript

// let str = "";

// for (let i = 9; i >= 1; i--) {
//   str += i;
// }

// console.log(str);

// Цикл for и типы данных JavaScript
// Переберите циклом числа от 10 до 1000 и выведите на экран те числа, сумма двух первых цифр которых равна 5.

// for (let i = 10; i <= 1000; i++) {
//     let sum = String(i);

//     if (Number(sum[0]) + Number(sum[1]) == 5) {
//         console.log(i);
//     }
// }


// Переберите циклом числа от 1 до 30 и сложите их как строки.


// let result = "";
// for (let i = 1; i <= 30; i++) {
//     result +=i;
// }
// console.log(result);

// Вложенные циклы в JavaScript

// let result = ''
// for (let i = 1; i <= 9; i++) {
// 	for (let j = 1; j <= 3; j++) {
//         		document.write(i)
// 	}
// }

// Заполнение объектов через цикл в JavaScript
// А можно изначально создать объект пустым, а затем добавить в него данные вот так:

// let obj = {};

// obj['понедельник'] = 1;
// obj['b'] = 2;
// obj['c'] = 3;s
// obj['d'] = 4;
// obj['e'] = 5;


// let keys = ['a', 'b', 'c', 'd', 'e'];
// let values = [1, 2, 3, 4, 5];
// let obj = {};

// for (let i = 0; i <= 4; i++) {
// 	let key = keys[i];
// 	let value = values[i];
	
// 	obj[key] = value;
// }

// console.log(obj);

// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс']; 
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {}

// for (i = 0; i<=6; i++) {
//     obj[arr1[i]] = arr2[i] 
// }
// console.log(obj);

