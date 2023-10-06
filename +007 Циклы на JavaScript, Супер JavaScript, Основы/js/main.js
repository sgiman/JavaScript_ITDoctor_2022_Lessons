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

//-------------
//   LOOPS
//-------------

//--- WHILE ---
console.log("\nWHILE:")
let count = 0
while (count < 10) {
    console.log(count);
    if(count == 4) {
        break;
    }
    count++;
}

//--- DO-WHILE ---
console.log("\nDO-WHILE:")
let i = 10
do {
    console.log(i);
    i--;
} while(i > 7)

//--- FOR ---
console.log("\nFOR:")
//for(let i=0; i<10; i++) {
for(let i=0; i<10; i+=2) { // чётные числа до 10
    console.log(i)
}

console.log("\nFOR ARRAY:")
let arr = [5, 7, 9, 1, 0]
for(let i=0; i<arr.length; i++) {
    console.log(arr[i])
}

//--- FOR-OF (для работы с массивами)---
console.log("\nFOR-OF ARRAY:")
for(let item of arr) {
    console.log(item)
}

//--- FOR-IN (для работы с объектами) ---
console.log("\nFOR-IN ARRAY:")
let obj = {
    "name" : "Peter",
    "age" : 25,
    "number" : 88009944654
}

for(let key in obj) { // не рекомендуется использовать с обычными массивами
    //console.log(obj[key])
    //console.log(key + " : " + obj[key]) // значения всех ключений
    console.log(`Ключ: ${key}, Значение: ${obj[key]}`)
}

//--- forEach ---
console.log("\nforEach:")
let arr2 = [5, 7, 9, 1, 0]

//--- Цикл forEach с анонимной функцией ---
arr2.forEach (function(item, i, array) {
    console.log (`Элемент: ${item*2}
    Индекс: ${i}
    Массив: ${array}`)
})

//-------------
//  METHODS
//-------------

// Массив объектов
let people = [
    {id: 1, name: "Ivan"},
    {id: 2, name: "Masha"},
    {id: 3, name: "Alex"},
    {id: 4, name: "Kate"}
]

// --- find ---
console.log("\nfind:")
let a = people.find(function(item) {
    if(item.id == 3) return item
})
console.log(a)

//--- findIndex ---
console.log("\nfindIndex:")
let b = people.findIndex(function(item) {
    if(item.id == 3) return item
})
console.log(b)

//--- filter ---
console.log("\nfilter:")
let c = people.filter(function(item) {
    if(item.id < 3) return item
})
console.log(c)

//--- map ---
console.log("\nmap:")
let arr3 = [5, 7, 9, 1, 0]
let newArr = arr3.map(function (item) { // новый массив
    return item*3
})
console.log(newArr)

//-------------
//   TASKS
//-------------
//--- TASK 1 ---
console.log("\nTask1:")
let arr4 = []
// заполнить массив
for (let i=0; i<20; i+=2) { // чётные - в порядке возрастания
    arr4.push(i)
}
console.log(arr4)

//--- TASK 2 ---
console.log("\nTask2:")
// v1
let arr5 = []
for (let i=30; i>0; i-=3) { // числа, которые делятся на 3 - в порядке убывания (v1)
    arr5.push(i)
}
console.log(arr5)

// v2
let arr6 = []
for (let i=30; i>0; i--) { // числа, которые делятся на 3 - в порядке убывания (v2)
    if(i%3==0) {
        arr6.push(i)
    }
}
console.log(arr6)

//--- TASK 3 ---
console.log("\nTask3:")
let arr7 = []
for (let i=0; i<10; i++) {
    //arr7.push(i*i)
    arr7.push(Math.pow(i, 2))
}
console.log(arr7)

//--- TASK 3 (кол-во чётных) ---
console.log("\nTask4:")
let arr8 = [7,4,2,1,0,6,2,6,2,15,4,16,20]
let n = 0
for(i=0; i<arr8.length; i++) {
    if(arr8[i]%2==0) {
        n++;
    }
}
console.log("Всего чётных элементов: " + n)

