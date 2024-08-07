import { Component } from "../core/component.js";
import { SignInComponent } from "./sign-in.components.js";
import { SignUpComponent } from "./sign-up.components.js";

export class PageAuthorization extends Component {
    constructor(id) {
        super(id)

    }

    init() {
        this.signIn = new SignInComponent('sign-in', this.componet)
        this.signUp = new SignUpComponent('sign-up', this.componet)
        
        this.links = this.componet.querySelectorAll('.form__link')
        
        this.links.forEach(link => {
            link.addEventListener('click', onChangeFormHandler.bind(this))
        })
    // this.componet.addEventListener('click', onChangeFormHandler.bind(this))
    }
}


function onChangeFormHandler(event) {
    event.preventDefault();
    if (event.target.classList.contains('link-in')) {

        this.signUp.hide();
        this.signIn.show();
    } else if (event.target.classList.contains('link-up')) {

        this.signIn.hide();
        this.signUp.show();
    }
}