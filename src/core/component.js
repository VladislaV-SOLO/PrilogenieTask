export class Component {

    constructor(id) {
        this.componet = document.getElementById(id)
        this.init()
    }

    init() {}

    onHide() {}

    onShow() {}

    hide() {
        this.componet.classList.add('hide')
        this.onHide()
    }

    show(e) {
        this.componet.classList.remove('hide')
        this.onShow(e)
    }

}