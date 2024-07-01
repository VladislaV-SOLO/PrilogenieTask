import { Component } from "../core/component.js";
import { Form } from "../core/form.js";
import { Validator } from "../core/validator.js";

export class SignInComponent extends Component {
    constructor(formId) {
        super(formId)
    }

init() {
    this.componet.addEventListener('submit', onSubmitHandler.bind(this))

    this.form = new Form(this.componet, {
        name: [Validator.required],
        password: [Validator.required] // [Validator.password]
    })
}
}


function onSubmitHandler(event) {
    event.preventDefault()

    console.log(this.form.value());
    console.log(this.form.isValid());

    // console.log(this.name.value);
    // console.log(this.password.value);

    // if (!required(this.name.value)) {
    //     console.log('поле username обязательно');
    // }
    // if (!required(this.password.value)) {
    //     console.log('поле password обязательно');
    // }

}