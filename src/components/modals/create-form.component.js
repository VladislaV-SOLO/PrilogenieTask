import { Component } from "../../core/component.js";
import { Form } from "../../core/form.js";
import { Storage } from "../../core/storage.js";
import { Validator } from "../../core/validator.js";

export class FormCreatePostModal extends Component {
    constructor (id) {
        super(id)
    }

    init() {
        this.componet.addEventListener('click', onCloseModalHandler.bind(this))
        this.formWrapper = this.componet.firstElementChild
        this.formWrapper.addEventListener('submit', onSubmitPostHandler.bind(this))
        this.form = new Form(this.formWrapper, {
            title: [Validator.required],
            description: [Validator.required]
        })
    }

    onHide() {
        this.form.clear()
    }
}

function onCloseModalHandler(event) {
    const {target} = event
    // сокрытие модалки на клик оверлея(не по ней, а на темный экран)
    let isBg = target == this.componet
    if (isBg) {
        this.hide()
    }
}

function onSubmitPostHandler(e) {
    e.preventDefault()
    // console.log(this.form);
    // console.log(this.form.value());
    if(this.form.isValid()) {
        // console.log(this.form.value());
        const formData = {
            id: new Date().getTime(),
            ...this.form.value(),
            status: 'processing'
        }
        console.log(formData);

        Storage.createPost(formData)
        // скрываем модалку
        this.hide()
        // вызываем pageContent.show() чтобы дополнительно запустить pageContent.onShow()
        pageContent.show()
    }
}