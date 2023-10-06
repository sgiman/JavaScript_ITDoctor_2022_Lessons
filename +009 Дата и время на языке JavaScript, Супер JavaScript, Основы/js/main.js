/***********************************************************************************************************************
 * main.js
 * ---------------------------------------------------------------------------------------------------------------------
 * PhpStorm 2023.1
 * HTML, CSS, JavaScript
 * ---------------------------------------------------------------------------------------------------------------------
 * Уроки по JavaScript - ITDoctor (2022)
 *
 * Курс JavaScript с нуля состоит из 12 уроков. В этом курсе вы узнаете основы языка программирования,
 * без которых невозможно изучать библиотеки, фреймворки или создавать свои собственные интересные скрипты.
 * За 12 уроков вы научитесь работать с переменными разных типов, массивами, объектами,
 * узнаете как проверять условия и создавать циклы. Научитесь создавать свои собственные функции,
 * работать с датой и временем, правильно документировать код и отлавливать ошибки.
 *
 * Так же рассказывается про объектно-ориентированный подход в программирования на языке JavaScript и
 * рассматриваются интересные возможности стандарта ECMAScript 2015 (ES6),
 * который уже максимально хорошо поддерживается всеми браузерами и не требует дополнительной компиляции
 * в более старые версии стандарта ES. Данный курс имеет свое логическое продолжение в виде курса "Супер JavaScript".
 * Узнать подробнее о курсе "Супер JavaScript" можно будет после завершения данного курса. *
 *
 * https://www.youtube.com/playlist?list=PLuY6eeDuleINoCQtGZsMoVVCSgEH7gKQ5
 *
 ***********************************************************************************************************************
 * Writing & Modification by sgiman (SCS) @ 2023-10
 */

alert("main.js")

let a = new Date(60000) // Дата c 01-01-1970 после 1мин. (Thu Jan 01 1970 03:01:00 GMT+0300)
console.log(a)

let b = new Date("2015-05-25T10:51:12.941") // установить дату и время
console.log(b)

console.log(Date.parse("2015-05-25T10:51:12.941"))  // в миллисекунды

let c1 = new Date(2015,6,21,10,51,54,458)    // year,month,day,hours,min,sec,ms
console.log(c1)

let c2 = new Date(2015,6)   // year,month
console.log(c2)

let d = new Date(2015,6,21,10,51,54,458)    // year,month,day,h,min,sec,ms

//--------------------------------
// (см. datetime_javascript.jpg)
//--------------------------------

//--- Получение компонент даты ---
console.log(d.getFullYear())                // год из даты
console.log(d.getMonth())                   // месяц из даты (0...11)
console.log(d.getDate())                    // день из даты
console.log(d.getHours())                   // часы из даты
console.log(d.getMilliseconds())            // миллисекунды из даты
console.log(d.getDay())                     // день недели из даты (0...6)
console.log(d.getTime())                    // число миллисекунд с даты 01-01-1970
console.log(d.getTimezoneOffset())          // разница в минутах Timezone

//--- Установка компонент даты --
console.log(a.setTime(5000))
console.log(a.getTime())
console.log(a)
// .... //

//--- Автоисправление даты ---
let e = new Date(2015, 1, 30)   // 30 фев. 2015 - это 02 марта 2015
console.log(e)

let f = new Date(2015, 1, 28)   // 28 фев. 2015
f.setDate(f.getDate()+2)        // добавить 2 дня
console.log(f)

let g = new Date(2015, 1, 28)
console.log(+g) // получить timestamp для даты (+)

// v1
let d1 = +new Date() // число (+) из текущей латы
for(let i=0; i<1000; i++) { // empty loop
    console.log(0)
}
let d2 = +new Date()
console.log(d2-d1)  // разница в миллисекундах (время выполнения цикла - в ms)

// v2
let a1 = Date.now(new Date())   // текущая дата в миллисекундах
for(let i=0; i<1000; i++) { // empty loop
    console.log(0)
}
let a2 = Date.now(new Date())
console.log(a2-a1)  // время выполнения цикла - в ms

//********************************
// Форматирование и вывод даты
//********************************
// v1
let dt = new Date(2014, 11, 31, 12, 30, 0)
let options = {
    era: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    timezone: "UTC",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
}
console.log(dt.toLocaleString("ru",options))
//console.log(dt.toLocaleString("en-US",options))

// v2
let df = new Date(2022, 1, 14, 21, 30, 0)
console.log(df.toString())      // всё
console.log(df.toDateString())  // дата
console.log(df.toTimeString())  // время

let options2 = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
}
console.log(df.toLocaleString("ru", options2))

