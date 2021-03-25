/*
// --створити масив та вивести його в консоль:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
let arrayNumbers = [15, 14, 45, 48, -86];
let arraySrings = ['Word', 'New word', 'New word 1', 'New new word', 'New new word 1'];
let arrayRandom = ['NumberOne', 'Yeap', 2, true, -2];
console.log(arrayNumbers, arraySrings, arrayRandom);

//-- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let emptyArray = [];
emptyArray[0] = 'Слово';
emptyArray[1] = 'Еще одно';
emptyArray[2] = 2;
emptyArray[3] = false;
console.log(emptyArray);

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for(i = 0; i < 10; i++){
    document.write(`<div>Довільний текст всередені ${i+1}`)
}

//- За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for(i = 0; i < 10; i++){
    document.write(`<div>Довільний текст всередені ${i}`)
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let counter = 0;
while(counter < 20){
    document.write(`<h1>довільним текстом всередині</h1>`);
    counter++;
}

//- За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині
let counter2 = 0;
while(counter2 < 20){
    document.write(`<h1>довільним текстом всередині - ${counter2}</h1>`);
    counter2++;
}

//- Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let tenNumbers = [2, 45, 65, 78, 45, 61, -23, 93, -2, -999];

for (const tenNumber of tenNumbers) {
    console.log(tenNumber);
}

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let tenStrings = ['dsadsa', 'dadsadsa', 'gfdgdf', 'gfdgdf', 'vcxvxcvcx', 'tyreyrt', 'p[op[', 'zczzx', 'dasdsaas', '646456'];

for (const tenString of tenStrings) {
    console.log(tenString);
}

//- Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let tenRandom = ['dsadsa', true, 'gfdgdf', 546.4, false, 'tyreyrt', 546465, NaN, 'dasdsaas', undefined];

for (const tenRand of tenRandom) {
    console.log(tenRand);
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let newArray = ['dsadas', true, false, 5454, 'dsadsa', false, 3231, 'dsadsa', true, 2323];
for (const newArrayEle of newArray) {
    if(typeof newArrayEle === "boolean"){
        console.log(newArrayEle);
    }
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let newArray2 = ['dsadas', true, false, 5454, 'dsadsa', false, 3231, 'dsadsa', true, 2323];
for (const newArrayEle of newArray2) {
    if(typeof newArrayEle === "number"){
        console.log(newArrayEle);
    }
}

//- Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let newArray3 = ['dsadas', true, false, 5454, 'dsadsa', false, 3231, 'dsadsa', true, 2323];
for (const newArrayEle of newArray3) {
    if(typeof newArrayEle === "string"){
        console.log(newArrayEle);
    }
}

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

let emptyArr = [];
emptyArr[0] = 'dsa';
emptyArr[2] = 2.3;
emptyArr[3] = -500;
emptyArr[4] = true;
emptyArr[5] = false;
emptyArr[6] = 'dsadsadas';
emptyArr[7] = true;
emptyArr[8] = 'dsa';
emptyArr[9] = 498;

//- Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (i = 0; i < 10; i++) {
    console.log(i);
    document.write(i)
}

//- Створити цикл for на 100  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (i = 0; i < 100; i++) {
    console.log(i);
    document.write(i)
}

//- Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (i = 0; i < 100; i+2) {
    console.log(i);
    document.write(i)
}

//- Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (i = 0; i < 100; i++) {
    if(i % 2 === 0){
        console.log(i);
        document.write(i)
    }
}



//- Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (i = 0; i < 100; i++) {
    if(i % 2 !== 0){
        console.log(i);
        document.write(i)
    }
}

//- Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)


for (minutes = 2, minutes > 0; minutes--;){
    for (seconds = 60; seconds > 0; seconds--){
        console.log(`Минут: ${minutes}, секунд: ${seconds}`);
    }
}


//- Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)
for (hours = 2; hours > 0; hours--) {
    for (minutes = 2, minutes > 0; minutes--;) {
        for (seconds = 60; seconds > 0; seconds--) {
            console.log(`Часов: ${hours}, минут: ${minutes}, секунд: ${seconds}`);
        }
    }
}
*/


//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let abc = ['a', 'b', 'c'];
let abcResult = '';
for (i = 0; i < abc.length; i++) {
    abcResult += abc[i];
}

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let bac = ['a', 'b', 'c'];
let bacResult = '';
while (bac.length > 0) {
    bacResult += bac.shift();
}

//- Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let cab = ['a', 'b', 'c'];
let cabResult = '';
for (letter of cab) {
    cabResult += letter;
}

//- Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

let acb = ['a', 'b', 'c'];

for (i = 1; i <= 3; i++) {
    acb.push(i);
}

//- Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

let oneTwoThree = [1, 2, 3];
console.log(oneTwoThree.reverse());

//- Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.
let twoOneThree = [1, 2, 3];
twoOneThree.push(4, 5, 6);

//- Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.

let threeOneTwo = [1, 2, 3];
threeOneTwo.unshift(4, 5, 6);

//- Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()

let jsCssJq = ['js', 'css', 'jq'];
document.write(jsCssJq.shift());

//- Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()

let cssJsJq = ['js', 'css', 'jq'];
document.write(cssJsJq.pop());

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].

let ar1 = [1, 2, 3, 4, 5];
ar1.slice(3);

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

let ar2 = [1, 2, 3, 4, 5];
ar2.slice(0, 2);

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

let ar3 = [1, 2, 3, 4, 5];
ar3.splice(1, 2);

//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

let ar4 = [1, 2, 3, 4, 5];
ar4.splice(3, 0, 'a', 'b', 'c');


//- Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

let ar5 = [1, 2, 3, 4, 5];
ar5.splice(1, 0, 'a', 'b');
ar5.splice(6, 0, 'c');
ar5.splice(8, 0, 'e');


//Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let tenNumbers = [454, -78, -987, 64, 231, 561.4, 646, -74, 61, 98];

for (nums of tenNumbers) {
    if (nums % 2 === 0) {
        console.log(nums);
    }
}

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший

let emptyArr = [];
for (number of tenNumbers) {
    emptyArr.push(number);
}

//- Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let newEmptyArr = [];
let counter = 0;
while (newEmptyArr.length < tenNumbers.length) {
    newEmptyArr[counter] = tenNumbers[counter];
    counter++;
}

//зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:

let tenArr = [2, 17, 13, 6, 22, 31, 45, 66, 100, -18];

// 1. перебрати його циклом while

let newCounter = 0;
while (newCounter < tenArr.length) {
    console.log(`Не понял что значит перебрать ${tenArr[newCounter]}`)
    newCounter++;
}

//2. перебрати його циклом for
for (numbers of tenArr) {
    console.log(`Не понял что значит перебрать 2 ${numbers}`)
}

//3. перебрати циклом while та вивести  числа тільки з непарним індексом
let newCounter2 = 0;
while (newCounter2 < tenArr.length) {
    if (tenArr[newCounter2] % 2 !== 0) {
        console.log(tenArr[newCounter2])
    }
    newCounter2++;
}

//4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (numbers of tenArr) {
    if (numbers % 2 !== 0) {
        console.log(numbers)
    }
}

//5. перебрати циклом while та вивести  числа тільки парні  значення
let newCounter3 = 0;
while (newCounter3 < tenArr.length) {
    if (tenArr[newCounter3] % 2 === 0) {
        console.log(tenArr[newCounter3])
    }
    newCounter3++;
}

//6. перебрати циклом for та вивести  числа тільки парні  значення
for (numbers of tenArr) {
    if (numbers % 2 === 0) {
        console.log(numbers)
    }
}

//7. замінити кожне число кратне 3 на слово "okten"
let newCounter4 = 0;
while (newCounter4 < tenArr.length) {
    if (tenArr[newCounter4] % 3 === 0) {
        tenArr[newCounter4] = "okten";
    }
    newCounter4++;
}

//8. вивести масив в зворотньому порядку.
console.log(tenArr.reverse());

//9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

let newCounter5 = tenArr.length;
while (newCounter5 > 0) {
    console.log(`Не понял что значит перебрать ${tenArr[newCounter5]}`)
    newCounter5--;
}


for (numbers of tenArr.reverse()) {
    console.log(`Не понял что значит перебрать 2 ${numbers}`)
}

let newCounter6 = tenArr.length;
while (newCounter6 > 0) {
    if (tenArr[newCounter6] % 2 !== 0) {
        console.log(tenArr[newCounter6])
    }
    newCounter6--;
}

for (numbers of tenArr.reverse()) {
    if (numbers % 2 !== 0) {
        console.log(numbers)
    }
}

let newCounter7 = tenArr.length;
while (newCounter7 > 0) {
    if (tenArr[newCounter7] % 2 === 0) {
        console.log(tenArr[newCounter7])
    }
    newCounter7--;
}

for (numbers of tenArr.reverse()) {
    if (numbers % 2 === 0) {
        console.log(numbers)
    }
}

//створити пустий масив та :
let emptArray = [];

// - заповнити його 50 парними числами за допомоги циклу.
let counterAr = 0;
while (emptArray.length < 50) {
    counterAr++;
    if (counterAr % 2 === 0) {
        emptArray.push(counterAr);
    }
}

// - заповнити його 50 непарними числами за допомоги циклу.
while (emptArray.length < 100) {
    counterAr++;
    if (counterAr % 2 !== 0) {
        emptArray.push(counterAr);
    }
}

//3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)
let randomArray = [];

for (i = 0; i < 10; i++) {
    randomArray.push(Math.floor(Math.random() * (732 - 8 + 1)) + 8);
}

//2. вывести на консоль  каждый третий елемент
for (i = 0; i < randomArray.length; i++) {
    if (i % 3 === 0) {
        console.log(randomArray[i]);
    }
}

//3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.
for (i = 0; i < randomArray.length; i++) {
    if ((i % 3) && (randomArray[i] % 2 === 0)) {
        console.log(randomArray[i]);
    }
}

//4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.
let newRandArr = [];
for (i = 0; i < randomArray.length; i++) {
    if ((i % 3) && (randomArray[i] % 2 === 0)) {
        console.log(randomArray[i]);
        newRandArr.push(randomArray[i]);
    }
}

//5. Вывести каждый елемент массива у которого соседний с права элемент - парный
for (i = 0; i < randomArray.length; i++) {
    if ((i > 0) && (randomArray[i] % 2 === 0)) {
        console.log(randomArray[i - 1]);
    }
}

let sums = [100, 250, 50, 168, 120, 345, 188];
let AOV = 0;
for (sum of sums){
    AOV += sum;
}
console.log(AOV / sums.length)

//3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let newRandomArray = [];

for (i = 0; i < 10; i++) {
    newRandomArray.push(Math.floor(Math.random() * (732 - 8 + 1)) + 8);
}

let newRandomArray2 = [];
for (i = 0; i < newRandomArray.length; i++) {
    newRandomArray2.push(newRandomArray[i] * 5);
}

//4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив.

let lastArray = ['dsadas', 'rewrw', 3432432, 543, true, false, null, NaN];
let newLastArray = [];

for(val of lastArray){
    if(typeof val === 'number'){
        newLastArray.push(val);
    }
}

