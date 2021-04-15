// - Дана textarea.
// В неё вводится текст.
// Сделайте так, чтобы после захода на эту страницу через некоторое время, введенный текст остался в textarea.

document.forms.texta.mytextearea.oninput = function (e) {
    localStorage.setItem('textarea', e.target.value)
}
document.addEventListener("DOMContentLoaded", () => {
    document.forms.texta.mytextearea.value = localStorage.getItem('textarea');


// - Дана форма с инпутами, текстареа, чекбоксами, радио кнопочками, селектами и тп.
// Пользователь вводит какие-то данные и закрывает страницу (не факт, что он заполнил всю форму).
// Сделайте так, чтобы при следующем заходе на страницу введенные им ранее данные стояли на своих местах.
// Сделайте ваш скрипт как можно более универсальным.

    for (let i = 0; i < document.forms.length; i++) {
        if (document.forms[i].name !== 'saveHistory' && document.forms[i].name !== 'texta' && document.forms[i].name !== 'notes') {
            document.forms[i].oninput = function (e) {
                data = [];
                for (let elementsKey in this.elements) {
                    let value = this.elements[elementsKey].type === 'checkbox' || this.elements[elementsKey].type === 'radio' ?
                        this.elements[elementsKey].checked : this.elements[elementsKey].value;
                    if (this.elements[elementsKey].type) {
                        data.push({
                            name: this.elements[elementsKey].name,
                            type: this.elements[elementsKey].type,
                            value: value
                        });
                    }
                }
                localStorage.setItem('formData-' + this.name, JSON.stringify(data));
            }
            if (localStorage.getItem('formData-' + document.forms[i].name) !== null) {
                const parsedData = JSON.parse(localStorage.getItem('formData-' + document.forms[i].name));
                parsedData.forEach((value, key) => {
                    if (value.type === 'checkbox' || value.type === 'radio') {
                        if (value.value) {
                            document.forms[i][key].checked = "checked";
                        }
                    } else if (value.type === 'textarea') {
                        document.forms[i][key].innerHTML = value.value;
                    } else {
                        document.forms[i][key].value = value.value;
                    }
                })
            }
        }
    }


// -Дан текстареа. В него можно ввести данные, нажать кнопку "сохранить" и они "фикисруются" (в хранилище), затем поредактировать их, затем еще поредактировать и возможно еще.....
// Требование : хранить историю своих изменений (даже после перезагрузки страницы).
// Сверху над текстареа должны появится стрелочки, с помощью которых можно перемещаться по истории (не забудьте!чекпоинт истории - нажатеи кнопки сохранить).
    let index = localStorage.getItem('historyIndex') ? +localStorage.getItem('historyIndex') : 0;
    let historyOfForm = localStorage.getItem('formHistory') ? JSON.parse(localStorage.getItem('formHistory')) : [];
    if (index > 0) {
        document.forms.saveHistory.stexts.value = historyOfForm[index];
    }
    document.forms.saveHistory.goBack.onclick = function () {
        let index = localStorage.getItem('historyIndex') ? +localStorage.getItem('historyIndex') : 0;
        if (index > 0) {
            document.forms.saveHistory.stexts.value = historyOfForm[--index];
            localStorage.setItem('historyIndex', index);
        }
        return false;
    }
    document.forms.saveHistory.goForward.onclick = function () {
        let index = localStorage.getItem('historyIndex') ? +localStorage.getItem('historyIndex') : 0;
        if (index < historyOfForm.length - 1) {
            document.forms.saveHistory.stexts.value = historyOfForm[++index];
            localStorage.setItem('historyIndex', index);
        }
        return false;
    }

    document.forms.saveHistory.onsubmit = function (e) {
        e.preventDefault();
        let historyOfForm = localStorage.getItem('formHistory') ? JSON.parse(localStorage.getItem('formHistory')) : [];
        if (document.forms.saveHistory.stexts.value !== historyOfForm[localStorage.getItem('historyIndex')]) {
            historyOfForm.push(document.forms.saveHistory.stexts.value);
            localStorage.setItem('formHistory', JSON.stringify(historyOfForm));
            localStorage.setItem('historyIndex', JSON.parse(localStorage.getItem('formHistory')).length - 1);
        }
    }

// - Реализуйте записную книгу, хранящую данные в локальном хранилище.
// Данные которые надо сохранять : ФИО, номер, почта, фирма, отдел, день рождения
// Данные вводить через соответсвующую форму.
// --Каждому контакту добавить кнопку для удаления контакта.
// --Каждому контакту добавить кнопку редактироваиня. При нажати на нее появляется форма, в которой есть все необходимые инпуты для редактирования, которые уже заполнены данными объекта

    function saveNote(e) {
        e.preventDefault();
        let notesList = localStorage.getItem('notesList') ? JSON.parse(localStorage.getItem('notesList')) : [];
        let data = {};
        for (let elementsKey in this.elements) {
            if (this.elements[elementsKey].type && this.elements[elementsKey].name && this.elements[elementsKey].type !== 'hidden') {
                data[this.elements[elementsKey].name] = this.elements[elementsKey].value;
            }
        }
        if (!this.parentNode.id) {
            notesList.push(data);
        } else {
            notesList.splice(this.parentNode.id, 1, data);
        }
        localStorage.setItem('notesList', JSON.stringify(notesList));
        showNotes(document.getElementById('notes'));
    }

    document.forms.notes.onsubmit = saveNote;
    showNotes(document.getElementById('notes'));

    function showNotes(element) {
        if (localStorage.getItem('notesList')) {
            element.innerHTML = '';
            let parsedNotes = JSON.parse(localStorage.getItem('notesList'));
            parsedNotes.forEach((value, key) => {
                let batya = document.createElement('div');
                let deleteButton = document.createElement('button');
                deleteButton.innerHTML = 'Удалить';
                deleteButton.name = "deleteNote";
                let editButton = document.createElement('button');
                editButton.innerHTML = 'Редактировать';
                editButton.name = "editNote";
                batya.id = key;
                batya.innerHTML = JSON.stringify(value);
                batya.appendChild(deleteButton);
                batya.appendChild(editButton);
                element.appendChild(batya);
            })
        }
        document.getElementsByName('deleteNote').forEach(function (value) {
            value.onclick = function () {
                let parsedNotes = JSON.parse(localStorage.getItem('notesList'));
                parsedNotes.splice(this.parentNode.id, 1);
                localStorage.setItem("notesList", JSON.stringify(parsedNotes));
                showNotes(document.getElementById('notes'));
            }
        })
        document.getElementsByName('editNote').forEach(function (value) {
            value.onclick = function () {
                let form = document.forms.notes.cloneNode(true);
                form.name = "noteEdit";
                let note = JSON.parse(localStorage.getItem('notesList'))[this.parentNode.id];
                for (i in note) {
                    form[i].value = note[i];
                }
                this.parentNode.appendChild(form);
                document.forms.noteEdit.onsubmit = saveNote;
            }
        })
    }
});
