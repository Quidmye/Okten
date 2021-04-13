//- Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
let divText = document.getElementsByName('text')[0];
divText.onclick = () => {
    document.getElementById('text').style.display = document.getElementById('text').style.display === 'none' ? 'block' : 'none';
}

//- Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
let button = document.createElement('button');
button.innerText = 'Скрыть саму себя';
document.body.appendChild(button);
button.onclick = () => {
    button.style.display = 'none';
}

//- Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
//     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
document.forms.checkAge.onsubmit = (e) => {
    e.preventDefault();
    document.forms.checkAge.age.value >= 18 ? alert('Вы совершеннолетний') : alert('Вы еще не совершеннолетний');
}

//- Створіть меню, яке розгортається/згортається при клику

document.getElementById('showOrHideMenu').onclick = () => {
    document.getElementById('menu').style.display = document.getElementById('menu').style.display === 'none' ? 'block' : 'none';
    document.getElementById('showOrHideMenu').innerText = document.getElementById('menu').style.display === 'none' ? 'Показать' : 'Скрыть'
}

//- Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вивести список коментарів в документ, кожний в своєму блоці.
//     Додайте кожному коментарю по кнопці для згортання його body.
const comments = [
    {
        title: 'Title',
        body: 'body'
    },
    {
        title: 'lorem',
        body:  'ipsum dolo sit ameti'
    },
    {
        title: 'Заголовок',
        body: 'Контент'
    }
];
comments.forEach((value) => {
    let commentDiv = document.createElement('div');
    let commentTitle = document.createElement('h2');
    let commentBody = document.createElement('p');
    let commentButton = document.createElement('button');
    commentTitle.innerText = value.title;
    commentBody.innerText = value.body;
    commentButton.innerText = 'Скрыть';
    commentButton.classList = 'hideBody';
    commentButton.onclick = function (e){
        commentBody.style.display = commentBody.style.display === 'none' ? 'block' : 'none';
    }
    commentDiv.appendChild(commentTitle);
    commentDiv.appendChild(commentBody);
    commentDiv.appendChild(commentButton);
    document.body.appendChild(commentDiv)
});

//- Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
//     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.

document.getElementById('forms').onclick = () => {
    console.log(
        document.forms.form1.oneOne.value,
        document.forms.form1.oneTwo.value,
        document.forms.form2.twoOne.value,
        document.forms.form2.twoTwo.value
    );
}

// - Створити функцію, яка генерує таблицю.
//     Перший аргумент визначає кількість строк.
//     Другий параметр визначає кількість ячейок в кожній строці.
//     Третій параметр визначає елемент в який потрібно таблицю додати.

function generateTable(tr, td, element){
    let table = document.createElement('table');
    for (let i = 0; i < tr; i++){
        let tr = document.createElement('tr');
        for(let c = 0; c < td; c++){
            let td = document.createElement('td');
            td.innerHTML = `Tr: ${i}, Td: ${c}`;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    element.appendChild(table);
}
generateTable(4, 5, document.body)
let images = [
    {
        src: 'img/index.jpg',
        alt: 'Image 1'
    },
    {
        src: 'img/index2.jpg',
        alt: 'Image 2'
    },
    {
        src: 'img/index3.jpg',
        alt: 'Image 3'
    },
];
function setImage(alt, src){
    let img = document.querySelector('#image img');
    img.src = src;
    img.alt = alt;;
}
let imageIndex = 0;
document.getElementById('buttonLeft').onclick = () => {
    imageIndex = imageIndex < 1 ? images.length-1 : --imageIndex;
    setImage(images[imageIndex].alt, images[imageIndex].src);
}
document.getElementById('buttonRight').onclick = () => {
    imageIndex = imageIndex === images.length-1 ? 0 : ++imageIndex;
    setImage(images[imageIndex].alt, images[imageIndex].src);
}
document.addEventListener('DOMContentLoaded', () => {
    setImage(images[imageIndex].alt, images[imageIndex].src);
});

