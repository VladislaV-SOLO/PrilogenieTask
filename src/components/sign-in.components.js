import { Component } from "../core/component.js";
import { Form } from "../core/form.js";
import { Storage } from "../core/storage.js";
import { Validator } from "../core/validator.js";
import { pageContent } from "../index.js";

export class SignInComponent extends Component {
    constructor(formId, page) {
        super(formId)
        this.page = page
    }

init() {
    this.componet.addEventListener('submit', onSubmitHandler.bind(this))

    this.form = new Form(this.componet, {
        name: [Validator.required],
        password: [Validator.required] // [Validator.password]
    })
}

    onHide() {
        this.form.clear()
    }

}


function onSubmitHandler(event) {
    event.preventDefault()

    if(this.form.isValid()) {
        const formData = {
            ...this.form.value()
        }
        console.log(formData); // то что мы пишем при входе в аккаунт sign-in(user: Vlad; password: 1Q;)
        this.form.clear()
        const userId = Storage.enterTodoList(formData)
        if(!userId) return
        localStorage.setItem('selectedUserId', userId)
        setTimeout(() => {
            // скрывает страницу авторизации
            this.page.classList.add('hide')
            // раскрыть страницу списка дел
            pageContent.show()
        }, 2500)
    }


    // console.log(this.form.value());
    // console.log(this.form.isValid());




    // console.log(this.name.value);
    // console.log(this.password.value);

    // if (!required(this.name.value)) {
    //     console.log('поле username обязательно');
    // }
    // if (!required(this.password.value)) {
    //     console.log('поле password обязательно');
    // }

}