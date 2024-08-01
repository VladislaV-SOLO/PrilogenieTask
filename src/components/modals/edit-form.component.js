import { Component } from "../../core/component.js";
import { Form } from "../../core/form.js";
import { Storage } from "../../core/storage.js";
import { Validator } from "../../core/validator.js";
import { pageContent } from "../../index.js";

export class FormCreatePostModal extends Component {
    constructor (id) {
        super(id)
    }

    init() {
        this.componet.addEventListener('click', onCloseModalHandler.bind(this))
        this.formWrapper = this.componet.firstElementChild;
        this.formWrapper.addEventListener('submit', onSubmitPostHandler.bind(this))
        this.form = new Form(this.formWrapper, {
            title: [Validator.required],
            description: [Validator.required]
        })
    }

    onShow(todoId) {
        this.todoId = todoId
        this.todoData = Storage.getPostInfo(todoId)
        this.formWrapper.title.value = this.todoData.title
        this.formWrapper.description.value = this.todoData.description
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
    if(this.form.isValid()) {
        // console.log(this.form.value());
        const formData = {
            ...this.todoData,
            ...this.form.value(),
        }
        console.log(formData);

        Storage.editPost(formData)
        // вызываем pageContent.show() чтобы дополнительно запустить pageContent.onShow()
        pageContent.show()
        // скрываем модалку
        this.hide()
    }
}