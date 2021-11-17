// 1. Реализовать таймер-функцию используя замыкания.
// Функция принимает два  аргумента начальное значение и значение завершения.
// Таймер движется назад.
// Пример:
// foo(start, end).
// При достижении точки завершения в консоль выводится значение таймера
// и сообщение о завершении работы таймера.

// let foo = function (start) {
//   return function (end) {
//     for (i = start; i > end; i--) {
//       console.log(i);
//     }
//     if ((i = end)) {
//       console.log(end, "Time is over");
//     }
//   };
// };
// const timer = foo(10);
// timer(1);


// * 2. Что выведет функция?
// function f() {
//   console.log(this); // Global 
// }

// let user = {
//   g: f.bind(null)
// };

// user.g();

// * 3. Можем ли мы изменить this дополнительным связыванием? нет
// function f() {
//   alert(this.name);
// }

// f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );

// f();

//* 4. В свойство функции записано значение. Изменится ли оно после применения bind? Обоснуйте ответ.
// function sayHi() {
//   alert(this.name);
// }
// sayHi.test = 5;

// let bound = sayHi.bind({
//   name: "Вася",
// });

// console.log(bound);
// console.log(bound.test); // undefind, bind не копирует контекст, только функцию

//* 5. Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.

// Однако, его вызов приводит к ошибке. Почему? Контекст  не скопирован, нужно использовать bind и указать контекст для него

// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(${this.name} logged in);
//   },

//   loginFail() {
//     alert(${this.name} failed to log in);
//   },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

//* 6. Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).

// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) как ok и функцию user.login(false) как fail?

// function askPassword(ok, fail) {
//   let password = prompt("Password?", "");
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: "John",

//   login(result) {
//     alert(this.name + (result ? " logged in" : " failed to log in"));
//   },
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?

// 8.Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func
// всегда указывал на value из переменной elem.
// var elem = {value: "Привет"}

// function func(surname, name) {
//   console.log(this.value + ', ' + surname + ' ' + name);
// }


// func = func.bind(elem)
// func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
// func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'

// 9. Есть функция которая складывает три числа.
// const sum = (a, b) => a + b
// Выполните каррирование