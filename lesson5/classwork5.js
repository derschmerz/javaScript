/* function helloWorld() {
    console.log('hello world');
}

helloWorld () */

/* const isUserAuth = true;
function checkAccess () {
    if(isUserAuth) {
    console.log ('доступ есть');
    } else {
    console.log ('доступа нет');
}
}

checkAccess();

function  writeMessage() {
    if(isUserAuth) {
    console.log ('Привет пользователь');
    } else {
    console.log ('привет гость');
}
}
writeMessage() */

/* function sum (a, b) {
    console.log(a + b);
}
sum(1, 0);
sum(16, 4) */

// function sum (a, b = 0) {
//     console.log(a + b);
// }
// sum(1, 0);
// sum(16)

/* function getName (name) {
    console.log('до ререрна');
    return name;
    console.log('после ререрна');
}

const userName =  getName ('max')
console.log(userName); */


// function getName (useName) {
//     return useName;
// }
// let name = 'alex';
// const nameUserOne = getName(name) 
// console.log (nameUserOne);

// name = 'ivan';

// const nameUserTwo = getName (name);
// console.log (nameUserTwo);

/* let name  = "alex"
console.log(name,'1');
function sayHi (userName) {
    userName = 'Petr';
    console.log(userName, 'function');
    let name = 'max'
}

sayHi(name)
console.log(name, "2"); */

/*  let a = 0;
let b = 0;

function sum() {
  a += 1;
  b += 1;
  console.log(a + b);
}
sum(); 
sum();
sum(); */


/* function sum() {
  const a = 0;
  const b = 1;
  console.log(a + b);
}
sum();
sum(); */

/* let userName = "alex";
function sayHi(userName, name) {
  if (name) {
    console.log(`привет ${name}`);
  } else {
    name = "Гость";
    console.log`привет ${name}`;
  }
}
sayHi("Привет", userName);
 */
// function exp(a, b = 1) {
//   console.log(a ** b);
// }
//   exp(2, 2);
//   exp(2, 8);
//   exp(20);

//   function getValue (arr) {
//       let sum = 0;
//       for (let i = 0; i <arr)
//   }

// const getName = function () {
//     console.log('Alex')
// }

// const getUserInfo = function(callback) {
//     console.log("USER INFO");
//     callback();
// };
// getUserInfo (getName())

/* test();

function test() {
  console.log("test");
}
test2();

const test2 = function () {
  console.log("test2");
}; */

// стрелочные функции

// const myFirstArrowFunc = () => console.log("!!");

// const test1 = (name) => console.log(name);
/* const getLog = () => console.log("log"); */

// //FD
// function ex1(param) {
//   return param;
// }
// ex1(1);
// // FE
// const ex2 = function (param) {
//   return param;
// };
// ex2(2);
// // AF 1
// const ex3 = (param) => param;
// ex3(3);

// Практика
// Напишите стрелочную функцию которая будет выводить переданную строку в консоль n раз.
// const text = (str,n) => {

//     for (let i = 0; i< n; i+=1) {
//         console.log(str);
//     }
// }
// text ("ivan", 1)

/* const letter = (param) => {
  let arr = ["q", "w", "e", "r", "t", "y", "u", "i", "o"];
  for (i = 0; i < arr.length; i++)
    if (arr[i] == "e" || arr[i] == "y" || arr[i] == "u"|| arr[i] == "i"|| arr[i] == "o") {
      console.log(true);
    }
 
};

letter("y"); */

/* const letter = (param) => {
  if (letter === "a" || letter === "y") {
    return true;
  } else {
    return false;
  }
};

letter("a"); */

/* Примеры на создание функций в JavaScript */
// let arr1 = [1, 2, 3, 4]
// let arr2 = [5, 6, 7, 8]

// // let sum = 0
// // for (let elem of arr) {
// //   sum += elem;
// // }
// // let sum2 = 0;

// // for (let elem of arr2) {
// // 	sum2 += elem;
// // }
// // console.log(sum2);
// // console.log(sum);

// function sumArr(arr){
// let sum = 0
// for (let elem of arr) {
//   sum += elem*elem;
// }
// return sum
// }
// console.log(sumArr(arr1))
// console.log(sumArr(arr2))