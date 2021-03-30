//Взяти файл template_2.html та працювати в ньому
// 1) Напишіть код, який :

//a) змінює колір тексту елемнту з ід main_header на назву групи (mon-year)
let mainHeader = document.getElementById('main_header');
mainHeader.style.color = 'grey';
mainHeader.innerText = 'feb-2021'

//b) робить шириниу елементу ul 400px
let ul = document.getElementsByTagName('ul');
ul[0].style.width = '400px';

//c) робить шириниу всіх елементів з класом linkList шириною 50%
let linkList = document.getElementsByClassName('linkList');
for (item of linkList){
    item.style.width = '50%';
}

//d) отримує текст який зберігається в елементі з класом listElement2
let elementText = document.getElementsByClassName('listElement2')[0].innerText;

//e) отримує всі елементи li та змінює ім колір фону на сірий
let beds = document.getElementsByTagName('li');
for (bed of beds){
    bed.style.backgroundColor = 'grey';
}

//f) отримує всі елементи 'a' та додає їм клас anchor
let anchors = document.getElementsByTagName('a');
for (anchor of anchors){
    anchor.classList.add('anchor');
}

//g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
for (anchor of anchors){
    if (anchor.innerText === 'link3'){
        anchor.style.fontSize = '40px';
    }
}

//h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
for (anchor of anchors){
    anchor.classList.add(anchor.innerText);
}

//i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
let subHeader = document.getElementsByClassName('sub-header');

for (element of subHeader){
    element.style.backgroundColor = prompt('Enter color');
}

//j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
for (element of subHeader){
    if(element.innerText === 'content 2 segment'){
        element.style.color = prompt('Enter text color');
    }
}

//k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
document.getElementsByClassName('content_1')[0].innerText = prompt('Enter text');

// l) отримати елементи p та змінити їм padding на 20px
let p = document.getElementsByTagName('p');
for (element of p){
    element.style.padding = '20px';
}


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year)
let textTwo = document.getElementsByClassName('text2');

for(item of textTwo){
    item.innerText = 'feb-2021';
}
