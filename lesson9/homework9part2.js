// //! DZ 17/11

// class People {
//     constructor(name,surname) {
//         this.name = name;
//         this.surname = surname;
//     }

// getFullName() {
//          return Имя: ${this.name}, Фамилия: ${this.surname}
//       }
// }

//       const firstPeople = new People("ivan", "Petrov");

//       console.log(firstPeople.getFullName());

//       class Worker extends People {
//         constructor(name,surname, rate, days) {
//                 super(name,surname);
//                 this.rate = rate;
//                 this.days = days;
//               }
//               getSalary() {
//                   return ${this.getFullName()}, Зарплата: ${this.rate*this.days} руб.
//               }

//               getName() {
//                 return this.name;
//             };

//             getSurname() {
//                 return this.surname;
//             };
//             getRate() {
//                 return this.rate
//             }
//             getDays() {
//                 return this.days
//             }

//             setRate(newRate) {
//                 return this.rate = newRate
//             }
//             setDays(newDays) {
//                 return this.days = newDays;
//             }
//       }

// const firstWorker = new Worker ("Petr", "Petrov", 1500, 20)
// const secondWorker = new Worker ("Semen", "Petrov", 1900, 2)
// var worker = new Worker('Иван', 'Иванов', 10, 31)
// // console.log(firstWorker.getSalary());
// // console.log(secondWorker.getSalary());

// // console.log(firstWorker.name);
// // console.log(firstWorker.surname);
// // console.log(firstWorker.getFullName());
// // console.log(firstWorker.rate);
// // console.log(firstWorker.days);
// // console.log(firstWorker.getSalary());

// /* 2. */

// class Boss extends Worker {
//     constructor (name,surname, rate, days, workers) {
//         super(name,surname,rate,days)
//         this.workers = workers;

//     }
//     getSalary () {
//         return ${this.getFullName()}, Зарплата: ${this.rate*this.days*this.workers} руб.
//     }
// }

// const boss = new Boss ('Иван', 'Иванов', 10, 31, 10 )
// // console.log(boss.name); //выведет 'Иван'
// // console.log(boss.surname); //выведет 'Иванов'
// // console.log(boss.getFullName()); //выведет 'Иванов Иван'
// // console.log(boss.rate); //выведет 10
// // console.log(boss.days); //выведет 31
// // console.log(boss.workers); //выведет 10
// // console.log(boss.getSalary()); //выведет 3100 - то есть 10*31*10

// /*  3. */
// // console.log(worker.getName()); //выведет 'Иван'
// // console.log(worker.getSurname()); //выведет 'Иванов'
// // console.log(worker.getRate()); //выведет 10
// // console.log(worker.getDays()); //выведет 31
// // console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// /* 4 */
// // console.log(worker.getRate()); //выведет 10
// // console.log(worker.getDays()); //выведет 31
// // console.log(worker.getSalary()); //выведет 310 - то есть 10*31

// // //Теперь используем сеттер:
// // worker.setRate(20); //увеличим ставку
// // worker.setDays(10); //уменьшим дни
// // console.log(worker.getSalary()); //выведет 200 - то есть 20*10

// Реализуйте класс MyString, который будет иметь следующие методы:
// метод reverse(),который параметром принимает строку, а возвращает ее в перевернутом виде,
//  метод ucFirst(), который параметром принимает строку, а возвращает эту же строку,
//  сделав ее первую букву заглавной и метод ucWords,
//  который принимает строку и делает заглавной первую букву каждого слова этой строки.

/* 5 */

// class MyString {
//     reverse(str) {
//         return [...str].reverse().join("");
//     }
//     ucFirst(str) {
//         return str[0].toUpperCase()+ str.slice(1)
//     }
//     ucWords(str) {
//         return str.replace(/(^|\s)\S/g, m => m.toUpperCase())    }
// }

// var str = new MyString();

// console.log(str.reverse('abcde')); //выведет 'edcba'
// console.log(str.ucFirst('abcde')); //выведет 'Abcde'
// console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'

// Реализуйте класс Validator, который будет проверять строки.
// К примеру, у него будет метод isEmail параметром принимает строку и проверяет,
// является ли она корректным емейлом или нет.
// Если является - возвращает true, если не является - то false.
// Кроме того, класс будет иметь
// следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты
// и метод isPhone для проверки телефона.

// class Validator {
//     isEmail(email) {
//     let   emailForm = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//      return   emailForm.test(email)
//     }

// isDomain(str) {
//     return  /(|www\.)\S+/i.test(str)
// }
// isDate (str) {
//  return    /^\d{2}\.\d{2}\.\d{4}$/i.test(str)
// }
// isPhone (str) {
//  return /^\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/.test(str)

// }
// }

// var validator = new Validator();

// console.log(validator.isEmail('phphtml@mail.ru'));
// console.log(validator.isDomain('phphtml.net'));
// console.log(validator.isDate('12.05.2020'));
// console.log(validator.isPhone('+7 (905) 851-68-92'));

// // Реализуйте класс Student (Студент), который будет наследовать от класса User,
// // подобно тому, как это сделано в теоретической части урока.
// // Этот класс должен иметь следующие свойства:
// // name (имя, наследуется от User),
// // surname (фамилия, наследуется от User),

// year (год поступления в вуз).
// Класс должен иметь метод getFullName() (наследуется от User),
// с помощью которого можно вывести одновременно имя и фамилию студента.
// Также класс должен иметь метод getCourse(),
// который будет выводить текущий курс студента (от 1 до 5).
// Курс вычисляется так: нужно от текущего года отнять год поступления в вуз.
// Текущий год получите самостоятельно.
// Вот так должен выглядеть класс User, от которого наследуется наш Student:

class User {
  constructor(name, surname) {
    this.name = name;
    this.surname = surname;
  }

  getFullName() {
    return this.name + " " + this.surname;
  }
}

class Student extends User {
  constructor(name, surname, year) {
    super(name, surname);
    this.year = year;
  }
  getCourse() {
    return 2021 - this.year;
  }
}

const student1 = new Student("Kirill", "Ivanov", 2018);
console.log(student1.getCourse());
console.log(student1.getFullName());
