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

// -------------
//    ARRAYS
// -------------
let arr = [5, 2, "Str", true]   // возможны также объекты и функции

//--- 1 ---
console.log("ARRAYS:")
console.log(arr.length)
console.log(arr[1])
console.log(arr[2])

arr[2] = "Text"
console.log(arr[2])
console.log(arr)
arr[4] = 7 // добавить новый элемент

// Многомерный массив (2D)
console.log("2D ARRAY:")
let matrix = [
    [1, 2, 4],
    [4, 7, 9],
    [1, 0, 3]
]
console.log(matrix)
console.log(matrix[1][1])

//--- 2 ---
console.log("ОЧЕРЕДЬ - СТЕК:")
console.log(arr.length-1)   // последний элемент
console.log(arr.length-2)   // предпоследний элемент итд

/*
 * unshift - добавляет в начало
 * shift - забирает с начала
 * push - добавляет элемент в конец
 * pop - забирает элемент с конца
 *
 */

// "Очередь" (shift - push)
console.log(arr.shift())    // cдвинуть влево на шаг
console.log(arr)

console.log(arr.push(8))    // добавить в конец
console.log(arr)

// "Стек" (push - pop)
// ПОСЛЕДНИМ ЗАШЁЛ - ПЕРВЫМ ВЫШЕЛ
console.log(arr.pop())      // последнее значение
arr.unshift(6)        // дoбавить в начало

//--- 3 ---
console.log("concat:")
let arr1 = [5, 2, "Str1", true]
let arr2 = [1, 2, 3]
console.log(arr)
let arr3 = arr1.concat(arr2)   // обьединить массивы arr + arr2
console.log(arr3)

console.log("indexOf:")
console.log(arr3.indexOf("Str1"))   // индес элемента

console.log("join:")    // объединение элементов массива строку
console.log(arr1.join(", "))      // строка элементов c разделителем

//--- 4 ---
console.log("splice:")
console.log (arr1.splice(1,1))    // удалить с 1-го индекса один элемент
console.log (arr1.splice(1))    // удалить всё с 1-го индекса
console.log (arr1.splice(1, 0, 7,5,"text")) // добавить элементы в конец
console.log (arr1.splice(2, 1, "New Str"))  // заменить 2-й элемент на новый
console.log (arr1.splice(2, 1, "New Str 1", true))  // заменить 2-й элемент на два новых
console.log (arr1.splice(2, 2, "New Str 2", true))  // заменить 2-й м 3-й элемент (New Str 1) два новых
console.log (arr1.splice(-1, 0, "Add element"))  // вставить элемент перед последним (-1)

console.log("slice:")
console.log (arr1.slice(0, 3))  // получить значения с 0 - 3
console.log (arr1.slice(4))     // получить значения с 4-го и до конца
console.log (arr1.slice(-1))    // получить значения последнего элемента
console.log (arr1.slice(-2))    // получить значения предпоследнего элемента
console.log (arr1.slice(-3, -2))    // true

console.log("includes:")
console.log (arr1.includes("text")) // true

console.log("reverse:")
console.log (arr1.reverse())    // в обратном порядке

console.log("split:")            // массив в строку
console.log("Ivan,Peter,Sasha".split(",")) // массив в строку c разделителем ","
console.log("Ivan".split(""))   // разбить строку на массив символов
