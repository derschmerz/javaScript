
// 1. Преобразовать строку в массив слов

// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// var str = 'Каждый охотник желает знать';
// function stringToarray(str) {

// arr2 = str.split(" ");
// };

// var arr = stringToarray(str);
// console.log(arr2)

// 2. Удаление указанного количества символов из строки

// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// var str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {

//    return str.slice(0, length);

// };
// console.log((delete_characters(str, 15)))

// 3. Вставить тире между словами строки

// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// var str = "HTML JavaScript PHP";
// var space = / /g;
// let str2 = 0;
// function insert_dash(str) {
//     str2 = str.replace(space, "-").toUpperCase()
   
// }
// insert_dash(str);
// console.log(str2);

// 4. Сделать первую букву строки прописной

// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// var str = "string not starting with capital";  
 
// function cursive_letter(str) {
//     let str2;
//     return str2 = str.charAt(0).toUpperCase() + str.slice(1)

// }

// console.log(cursive_letter(str));

// 5. Первая буква каждого слова заглавная

// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// var str = "каждый охотник желает знать";  
 
// function capitalize(str) {


//     return str.replace(/(^|\s)\S/g, m => m.toUpperCase())
// }
// console.log(capitalize(str))

// 1. Преобразовать строку в массив слов

// Напишите функцию stringToarray(str), которая преобразует строку в массив слов.

// var str = 'Каждый охотник желает знать';
// function stringToarray(str) {

// arr2 = str.split(" ");
// };

// var arr = stringToarray(str);
// console.log(arr2)

// 2. Удаление указанного количества символов из строки

// Напишите функцию delete_characters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.

// var str = 'Каждый охотник желает знать';
// function delete_characters(str, length) {

//    return str.slice(0, length);

// };
// console.log((delete_characters(str, 15)))

// 3. Вставить тире между словами строки

// Напишите функцию insert_dash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. При этом все символы строки необходимо перевести в верхний регистр.

// var str = "HTML JavaScript PHP";
// var space = / /g;
// let str2 = 0;
// function insert_dash(str) {
//     str2 = str.replace(space, "-").toUpperCase()

// }
// insert_dash(str);
// console.log(str2);

// 4. Сделать первую букву строки прописной

// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.

// var str = "string not starting with capital";

// function cursive_letter(str) {
//     let str2;
//     return str2 = str.charAt(0).toUpperCase() + str.slice(1)

// }

// console.log(cursive_letter(str));

// 5. Первая буква каждого слова заглавная

// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.

// var str = "каждый охотник желает знать";

// function capitalize(str) {

//     return str.replace(/(^|\s)\S/g, m => m.toUpperCase())
// }
// console.log(capitalize(str))

// 6. Смена регистра символов строки
// Напишите функцию change_register(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».

// let str = "КаЖдЫй ОхОтНиК жЕлАеТ зНаТь";
// let str2 = "";
// function change_register(str) {

//     for (i=0;i<str.length;i++) {
//         if (str[i] === str[i].toUpperCase()) {
//             str2 += str[i].toLowerCase();
//         } else {
//             str2 += str[i].toUpperCase();
//         }

//     }
//     return str2;

// }
// console.log(change_register(str))

// 7. Удалить все не буквенно-цифровые символы
// Напишите функцию remove_char(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.

// var str = "every., -/ hunter #! wishes ;: {} to $ % ^ & * know";

// function remove_char(str) {
//     str = str.replace(/[^a-zа-яё\s]/gi,'');
//     return str
// };

// console.log(remove_char(str));

// 8. Нулевое заполнение строки
// Напишите функцию zeros(num, len), которая дополняет нулями до указаной длины числовое значение с дополнительным знаком «+» или « -« в зависимости от передаваемого аргумента.

// function zeros (num, len, sign) {
//     let num2 = ${num}.padStart(len, 0)
//     return num2
// };
// console.log(zeros(2, 3));

// 9. Сравнение строк без учёта регистра
// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.

// function comparison(str1, str2) {

//   if (str1.toLowerCase() === str2.toLowerCase()) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }
// console.log(comparison("Привет", "привет"));

// 10. Поиск без учета регистра
// Напишите функцию insensitive_search(str1, str2), которая осуществляет поиск подстроки str2 в строкеstr1 без учёта регистра символов.

// function insensitive_search(str1, str2) {
//     let resilt = str1.toLowerCase().includes(str2.toLowerCase())
//     resilt = resilt === true ? "true" : "false"
// return resilt
// };
// console.log(insensitive_search("hello World", "world"));

// 11. ВерблюжийРегистр (CamelCase)
// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, при этом каждое слово внутри строки пишется с заглавной буквы.

// str = "hEllo woRld";
// function initCap(str) {
//             return str.toLowerCase().replace(/(?:^|\s)[a-z]/g, function(match) {
//             return match.toUpperCase().replace(/\s+/g, "");
//          })
//         }
// console.log(initCap(str));

// 12. Змеиный_регистр (snake_case)
// Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.

// str = "HelloWorld"
// function initSnake(str) {
// var str2 = str.split(/(?=[A-Z])/).join('_').toLowerCase();
// return str2
// };
// console.log(initSnake(str));


// 13. Повторить строку n раз
// Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.

// let str = ""
// function repeatStr(str, n) {
//     let str2 = str.repeat(n)
//     return str2 
// };
// console.log(repeatStr("Hello world ",5));

// 14. Получить имя файла
// Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

// var pathname = "/home/user/dir/file.txt";

// function path(pathname) {
//     let str2 = pathname.split("/").pop();
//     return str2
// };
// console.log(path(pathname));

// 15. Заканчивается ли строка символами другой строки
// Создайте метод объекта String endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.

// var str = "Каждый охотник желает знать";
// var str1 = "скрипт";
// var str2 = "знать";

// String.prototype.endsWith = function(substring) {


// };

// 16. Подстрока до/после указанного символа
// Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.

// var str = 'Астрономия — Наука о небесных телах';
// let char = ""
// function getSubstr(str, char, pos) {
// let str2 = str.substring(str.lastIndexOf(char) + 1);

// console.log(str2);
// };
// console.log(getSubstr(str, "H"));

// 17. Вставить подстроку в указанную позицию строки
// Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.

// function insert(str, substr, pos) {
//     ...ваш код...
// };

// 18. Ограничить длину строки
// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться троеточием «...» (если не задан параметр symb) или заданным символом symb.

// function limitStr(str, n, symb) {
//     ...ваш код...
// };



// 19. Количество вхождений символа в строке
// Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.

// var symb = "о", str = "Астрономия это наука о небесных объектах";
// function count(str, symb) {
//     ...ваш код...
// };

// 21. Удалить лишние пробелы из строки
// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.

// var str = "    Max is a good      boy     "; 

// function strip(str) {
//     ...ваш код...
// };

// 23. Удалить лишние слова из строки

// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.

// var str = "Сила тяжести приложена к центру масс тела"; 

// function cutString(str, n) {
//     ...ваш код...
// };


// 24. Найти слово в строке
// Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.

// var str = 'abc def ghi jkl mno pqr stu';

// function findWord(word, str) {
//     ...ваш код...
// };