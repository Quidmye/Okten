//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write
let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let numberOne = 1;
let numberTwo = 10;
let numberThree = -999;
let numberFour = 123;
let numberFive = 3.14;
let numberSix = 2.7;
let numberSeven = 16;
let boolTrue = true;
let boolFalse = false;

console.log(hello);
alert(owu);
document.write(com);
console.log(ua);
alert(numberOne);
document.write(numberTwo);
console.log(numberThree);
alert(numberFour);
document.write(numberFive);
console.log(numberSix);
alert(numberSeven);
document.write(boolTrue);
console.log(boolFalse);

//- Переприсвоїти кожну змінну з завдання вище на будь які довільні значення.
//   Вивести кожну змінну за допомогою: console.log , alert, document.write

hello = 'hi';
owu = 'site';
com = 'org';
ua = 'ru';
numberOne = "i'm";
numberTwo = 2;
numberThree = -4;
numberFour = 8.1;
numberFive = 3.143;
numberSix = 2313.23;
numberSeven = -2;
boolTrue = false;
boolFalse = true;

console.log(hello);
alert(owu);
document.write(com);
console.log(ua);
alert(numberOne);
document.write(numberTwo);
console.log(numberThree);
alert(numberFour);
document.write(numberFive);
console.log(numberSix);
alert(numberSeven);
document.write(boolTrue);
console.log(boolFalse);

//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками.
//   Вивести "Вітаю *Імя* *По батькові*. Тобі *вік* років".

let name = prompt('Ваше имя?');
let patronymic = prompt('Ваше отчество?');
let age = +prompt('Ваш возраст?');
document.write(`Вітаю ${name} ${patronymic}. Тобі ${age} років`);

//- Взяти змінні з завдання вище та зєднати їх в одну змінну (конкатинація).
let fullInfo = name + patronymic + age;

//- За допомогою prompt() отримати 3 числа. Привести їх до числа (Google "String to number JS"). Вивести їх в консоль.
let one = +prompt('Первое число'); // Google каже про parseInt, але Сергій на лекції показував прлюсик. Не знаю як краще
let two = +prompt('Второе число');
let three = +prompt('Третье число');
console.log(`One: ${one}, two: ${two}, three: ${three}`);

//- За допомогою prompt() отримати 4 числа. Привести їх до числа за допомогою paeseInt. Додати їх всі мож собою і результат вивести в консоль.
let twoOne = +prompt('Первое число');
let twoTwo = +prompt('Второе число');
let twoThree = +prompt('Третье число');
let twoFour = +prompt('Четвертое число');
let twoResult = twoOne + twoThree + twoTwo + twoFour;
console.log(twoResult);

// - За допомогою prompt() отримати 3 числа з плаваючою точкою за допомогою parseFloat.
//  Просумувати їх. Отрманий результат записати в змінну result. Вивести цю змінну в консоль.
let promptFloatOne = prompt('Первое число с плавающей точкой');
let promptFloatTwo = prompt('Второе число с плавающей точкой');
let promptFloatThree = prompt('Третье число с плавающей точкой');
let floatOne = parseFloat(promptFloatOne);
let floatTwo = parseFloat(promptFloatTwo);
let floatThree = parseFloat(promptFloatThree);
let result = floatOne + floatTwo + floatThree;
console.log(result);

//- За допомогою prompt() отримати 3 числа з плаваючою точкою. Заокруглити їх (Google "round number JS"). Просумувати їх між собою. Результат вивести в консоль.
let numberToRoundOne = prompt('Первое число для округления:');
let numberToRoundTwo = prompt('Второе число для округления:');
let numberToRoundThree = prompt('Третье число для округления:');

let roundedNumberOne = Math.round(numberToRoundOne);
let roundedNumberTwo = Math.round(numberToRoundTwo);
let roundedNumberThree = Math.round(numberToRoundThree);

let roundedResult = roundedNumberOne + roundedNumberTwo + roundedNumberThree;
console.log(roundedResult);

//- За допомогою prompt() отримати 2 цілих числа.
//   Перше число - це число яке будуть підносити до степеня. Друге число - це число яке являється степенню.
//   За допомогою Math.pow (Google) піднести перше число в степінь другого числа.
//   Example. Число 1 = 5. Число 2 = 2. Результат = 25

let powBase = prompt('Число к степени');
let powExponent = prompt('Степень');
Math.pow(powBase, powExponent);

//- За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
//   let a = 100; let b = '100'; let c = true;
let a = 100;
let b = '100';
let c = true;
console.log(typeof  a);
console.log(typeof b);
console.log(typeof c);

//- Поставет відповідний оператор в виразах що б вийшов відповідний результат.
//   В однакових виразаї не використовувати однакові оператори!!!
//     5 ? 6 -> true
//     5 ? 6 -> false
//     5 ? 6 -> false
//     5 ? 6 -> false
//     10 ? 10 -> true
//     10 ? 10 -> true
//     10 ? 10 -> false
//     10 ? 10 -> false
//     10 ? 10 -> false
//     123 ? '123' -> false
//     123 ? '123' -> true
console.log(5 < 6);
console.log(5 > 6);
console.log(5 == 6);
console.log(5 >= 6);
console.log(10 == 10);
console.log(10 === 10);
console.log(10 > 10);
console.log(10 < 10);
console.log(10 != 10);
console.log(123 === '123');
console.log(123 == '123');