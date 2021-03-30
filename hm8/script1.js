// 1) Напишіть код,  який за допомоги document.getElementById або document.getElementsByClassName або document.getElementsByTagName :

//a) отримує текст з параграфа з id "content"
let idContentText = document.getElementById('content').innerText;

// b) отримує текст з блоку з id "rules"
let idRulesText = document.getElementById('rules').innerText;

// c) замініть текст параграфа з id 'content' на будь-який інший
document.getElementById('content').innerText = 'Абабагаламага';

// d) замініть текст параграфа з id 'rules' на будь-який інший
document.getElementById('rules').innerText = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aperiam enim eos eum facere incidunt magni nesciunt omnis reiciendis! Architecto aut facere impedit labore repellendus.';

//e) змініть кожному елементу колір фону на червоний
// f) змініть кожному елементу колір тексту на синій
let elemenets = document.querySelectorAll('p,div,li');
for (element of elemenets){
    element.style.backgroundColor = 'red';
    element.style.color = 'blue';
}

//g) отримати весь список класів елемента з id=rules і вивести їх в console.log
let rulesClassList = document.getElementById('rules').classList;
console.log(rulesClassList);

//h) отримати всі елементи з класом fc_rules
let fcRules = document.getElementsByClassName('fc_rules');

//i) поміняти колір тексту у всіх елементів fc_rules на червоний
for(element of fcRules){
    element.style.color = 'red';
}

let users = [{
  name: 'vasya',
  age: 31,
  status: false,
  address: { city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1 }
}, {
  name: 'petya',
  age: 30,
  status: true,
  address: { city: 'New York', country: 'USA', street: 'East str', houseNumber: 21 }
}, {
  name: 'kolya',
  age: 29,
  status: true,
  address: { city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78 }
}, {
  name: 'olya',
  age: 28,
  status: false,
  address: { city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56 }
}, {
  name: 'max',
  age: 30,
  status: true,
  address: { city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39 }
}, {
  name: 'anya',
  age: 31,
  status: false,
  address: { city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5 }
}, {
  name: 'oleg',
  age: 28,
  status: false,
  address: { city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90 }
}, {
  name: 'andrey',
  age: 29,
  status: true,
  address: { city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33 }
}, {
  name: 'masha',
  age: 30,
  status: true,
  address: { city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1 }
}, {
  name: 'olya',
  age: 31,
  status: false,
  address: { city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4 }
}, {
  name: 'max',
  age: 31,
  status: true,
  address: { city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45 }
}];

//2) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Вставити цей блок на сторінку

for (let user of users){
    let divka = document.createElement('div');
    divka.innerText = `Name: ${user.name}, age: ${user.age}, status: ${user.status}`;
    document.body.appendChild(divka);
}

//3) За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement.
//    Блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (let user of users){
    let divka = document.createElement('div');
    divka.innerText = `Name: ${user.name}, age: ${user.age}, status: ${user.status}`;
    let adressOfDivka = document.createElement('div');
    for (let value in user.address){
        let divka2 = document.createElement('div');
        divka2.innerText = `${value}: ${user.address[value]}`;
        adressOfDivka.appendChild(divka2);
    }
    document.body.appendChild(divka);
    document.body.appendChild(adressOfDivka);
}

