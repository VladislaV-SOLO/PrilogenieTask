
import { PageAuthorization } from "./components/page-authorization.component.js";
import { Notification } from "./components/modals/notification.component.js";
import{ PageContent } from "./components/page-content.component.js"
import { FormCreatePostModal } from "./components/modals/create-form.component.js";
import { PostInfoModal } from "./components/modals/todo-info.components.js";
import { ConfirmActionModal } from "./components/modals/confirm-action.components.js";


//для добавления квадрата -- Задание(чтобы удалить по клику)
// import { Component } from "./core/component.js";
// Validator.required('');
// Validator.isEmailValid('    vervremail@.ru   ');
// console.log(Validator.isPasswordValid(''));


const loginPage = new PageAuthorization('login');
export const pageContent = new PageContent('page-content', loginPage);
export const formCreatePostModal = new FormCreatePostModal('create');
export const postInfoModal = new PostInfoModal("info");
console.log(postInfoModal);
export const confirmInfoModal = new ConfirmActionModal("confirm");
export const formEditPostModal = new FormCreatePostModal("edit");
export const notification = new Notification('notification');

console.log(pageContent);

if (JSON.parse(localStorage.getItem('selectedUserId'))) {
    loginPage.hide()
    pageContent.show()
}


// 
// задача объединить два массива(3 способа) -- {login: 'user', email: 'myEmail@mail.ru', gender: 'male or female'}
// 
// const keys = ['login', 'email', 'gender']
// const values = ['user', 'myEmail@mail.ru', 'male or female']

// function task(key, value) {


// 1 способ решения
// let clone = key.map((el, index) => {
//     return [el, value[index]]
// });
// return Object.fromEntries(clone)


// 2 способ решения 
    // return key.reduce((acc, item, index) => {
    //     acc[item] = value[index]
    //     return acc
    // }, {});


    // 3 способ решения
    // const result = {}

    // key.forEach((el, index, arr) => {
    //     result[el] = value[index]
    // });
    // return result

// }
// console.log(task(keys, values))  \\ {login: 'user', email: 'myEmail@mail.ru', gender: 'male or female'}




// добавление квадрата -- Задание
// добавление квадрата -- Задание
// добавление квадрата -- Задание
// добавление квадрата -- Задание
// class CreateComponent extends Component {

//  constructor(container, width, color) {
//     super()
//     this.container = document.getElementById(container)
//     this.square = document.createElement('div')
//     this.square.style.width = width
//     this.square.style.height = width
//     this.square.style.background = color
//     this.componet = this.square
//     this.container.insertAdjacentElement('afterend', this.square)

//     this.square.addEventListener('click', () => {
//         this.hide()
//     })
// }
// }

// const square = new CreateComponent('sign-in', '50px', 'red')

// const justObj = {
//     container: 'sign-in',
//     width: 50,
//     printLog() {

//     }
// }

// console.log(square);
// console.log(justObj);





// задача обЪект с одинаковыми занчениями(empty) найти их
// const wareStore = {
//     jackets: 5,
//     hats: 'empty',
//     socks: 'empty',
//     pants: 15,
//     parer: true,
//     mixers: 14,
//     date: new Date(),
//     cookers: 'empty'
// }

// function printReport(obj) {
//         const result =  Object.entries(obj)// Object.entries возвращает массив wareStore,
//         .filter(([key, value]) => value  === 'empty')// дальше фильтр по отдельности создает массив каждого значения
//         .reduce((acc, [key, value]) => `${acc} ${key},`, ''); // в ретурне empty она нам даёт три обекта со значением empty, reduce нам возвращает только имена hats socks cookers
//         return result.trim().length ? `We need this items: ${result.slice(0, -1)}!` : 'Everything fine'  // We need this items:  hats, socks, cookers!
// }
// console.log(printReport(wareStore)); 