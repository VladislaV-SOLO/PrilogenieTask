export class Component {

    constructor(id) {
        this.componet = document.getElementById(id)
        this.init()
    }

    init() {}

    onHide() {}

    hide() {
        this.componet.classList.add('hide')
        this.onHide()
    }

    show() {
        this.componet.classList.remove('hide')
    }

}