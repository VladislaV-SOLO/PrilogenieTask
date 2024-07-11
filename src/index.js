
import { PageAuthorization } from "./components/page-authorization.component.js";
import { Notification } from "./components/modals/notification.component.js";

//для добавления квадрата -- Задание(чтобы удалить по клику)
// import { Component } from "./core/component.js";

// Validator.required('');
// Validator.isEmailValid('    vervremail@.ru   ');
// console.log(Validator.isPasswordValid(''));


const loginPage = new PageAuthorization('login')

export const notification = new Notification('notification')

// console.log(notification);



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