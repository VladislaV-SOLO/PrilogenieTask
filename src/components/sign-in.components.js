import { Component } from "../core/component.js";

export class SignInComponent extends Component {
    constructor(formId) {
        super(formId)
    }

init() {
    console.log(this.componet);

    this.componet.addEventListener('submit', onSubmitHandler)
}
}

function required(str = '') {
    return str && str.trim()
}

function onSubmitHandler(event) {
    event.preventDefault()
    console.log(this.name.value);
    console.log(this.password.value);

    if (!required(this.name.value)) {
        console.log('поле username обязательно');
    }
    if (!required(this.password.value)) {
        console.log('поле password обязательно');
    }

}