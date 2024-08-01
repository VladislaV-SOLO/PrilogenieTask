import { Component } from "../../core/component.js";
import { Form } from "../../core/form.js";
import { Storage } from "../../core/storage.js";
import { Validator } from "../../core/validator.js";
import { pageContent } from "../../index.js";
import { renderPostInfo } from "../../template/render-post-info.js";

export class PostInfoModal extends Component {
    constructor (id) {
        super(id)
    }

    init() {
        this.componet.addEventListener('click', onCloseModalHandler.bind(this))
        }

    onShow(todoId) {
        this.componet.innerHTML = ''
        const htmlInfo = renderPostInfo(todoId)
        this.componet.insertAdjacentHTML('afterbegin', htmlInfo)
    }

    onHide() {
        this.componet.innerHTML = ''
    }
}

function onCloseModalHandler(event) {
    const {target} = event
    // сокрытие модалки на клик оверлея(не по ней, а на темный экран)
    const okeyBtn = this.componet.querySelector('.modal__btn')
    let isTargetToClose = target == this.componet || target == okeyBtn
    console.log(okeyBtn);
    if (isTargetToClose) {
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