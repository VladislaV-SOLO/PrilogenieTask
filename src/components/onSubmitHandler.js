import { Storage } from "../core/storage.js";

export function onSubmitHandler(event) {
    event.preventDefault();

    // console.log(this.form.value());
    console.log(this.form.isValid());

    //проверяем валидна ли форма
    if (this.form.isValid()) {

        const formData = {
            id: new Date().getTime(),
        };

        Storage.createNewUser(this.form.value());
    }

}
