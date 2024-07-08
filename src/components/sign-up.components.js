import { Component } from "../core/component.js";
import { Form } from "../core/form.js";
import { Storage } from "../core/storage.js";
import { Validator } from "../core/validator.js";
// import { onSubmitHandler } from "./onSubmitHandler.js";



export class SignUpComponent extends Component {
    constructor(formId) {
        super(formId)
    }

    init() {
        this.componet.addEventListener('submit', onSubmitHandler.bind(this))
        this.form = new Form(this.componet, {
            name: [Validator.required],
            email: [Validator.required, Validator.isEmailValid],
            password: [Validator.required, Validator.isPasswordValid] // [Validator.password]
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
            id: new Date().getTime(),
            ...this.form.value(),
        }
        Storage.createNewUser(formData)
        //очищаем форму после создания пользователя
        this.form.clear()
    }
}
