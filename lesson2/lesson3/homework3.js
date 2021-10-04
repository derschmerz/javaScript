console.log("кот" > "код"); //true т больше чем д
console.log("2" + 2 * "2"); //24 сложение сцепляет, текст стоит впереди, умножение мат.действие
console.log(undefined == null); //true равны при нестрогом равенстве(правило)
console.log(undefined != null); //false  равны при нестрогом равенстве(правило)
console.log(null == 0); //false null == только undifined
console.log(2 > "3"); //false строка '3' становится числом 3
console.log(null - false + true); //1  0-0+1 Логическое значение true становится 1, а false – 0, null становится 0
console.log(1 / "l"); //1 строка '1' становится числом 1
console.log("2" * "3"); //6 умножение -> мат. действие
console.log(4 + 5 + "O"); //9O первое действие-мат форма, 2-е прицепляется текст
console.log("l" + 4 + 5); //145 т.к если хотя бы один операнд является строкой, то второй будет также преобразован в строку, следом третий
console.log("4" - 2); // 2 для минуса только мат. действие
console.log("4" - "4x"); //NaN нельзя вычесть из цифры текст
console.log("23" == 23); //true 23 сравнивается как число
console.log(null == false); //false null == только undifined
console.log(" -4 " / 0 + 1); //-infinity деление на 0
console.log(null + 1); // 1 null становится 0
console.log(undefined + null); //NaN undefined не число NaN+0
console.log(1 === "1"); //false не строгое равенство, 2й - текст
console.log("2" > 10); //false 2>10  строка '2' становится числом 2
console.log(NaN == undefined); //false == только null
