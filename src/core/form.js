export class Form {
    constructor(form, controls) {
        this.form = form
        this.controls = controls
    }

    value() {
        // что происходит при вводе данных и нажатии на кнопку add 
        // в модальном окне для создания файла на странице
        const value = {};
        // ['title', 'description']
        // value['title'] = 'form.title.value'
        // value['title'] = 'значение из инпута'
        // value['description'] = 'значение из texterea'

        Object.keys(this.controls).forEach((field) => {
            value[field] = this.form[field].value
        })
        return value
    }

    isValid() {
        let isFormValid = true

        Object.keys(this.controls).forEach((field) => {

            const validatorFns = this.controls[field]

            let isValid = true

            validatorFns.forEach((validator) => {
                isValid = validator(this.form[field].value) && isValid
            })

            isValid ? clearNoticeError(this.form[field]) : setNoticeError(this.form[field])

            isFormValid = isValid && isFormValid

        })

        return isFormValid
    }

    clear() {
        Object.keys(this.controls).forEach(field => {
            this.form[field].value = ''
            // clearNoticeError(input)
        })
    }

}

const requiredErrorText = 'Field is required'
const emailErrorText = 'Field is required (at least: "@" symbol)'
const passwordErrorText = 'Field is required (at least: 1 uppercase letter and 1 digit)'

function setNoticeError(input) {
    clearNoticeError(input)

    input.parentElement.classList.add('invalid')

    const fieldName = input.getAttribute('name')
    if (fieldName === "name" || fieldName === "title" || fieldName === "description") {
        input.insertAdjacentHTML('afterend', setErrorText(requiredErrorText))
    }

    if (fieldName === "email") {
        input.insertAdjacentHTML('afterend', setErrorText(emailErrorText))
    }

    if (fieldName === "password") {

        input.dataset.signIn === 'sign-in' ?
            input.insertAdjacentHTML('afterend', setErrorText(requiredErrorText)) :
            input.insertAdjacentHTML('afterend', setErrorText(passwordErrorText))
    }
}

function setErrorText(text) {
    return `<p class="form__field-warning">${text}</p>`
}


function clearNoticeError(input) {
    //если ошибка есть то будем проводить очистку
    // console.log(input.nextElementSibling); со второго клика на кнопку выдаёт уже не NULL, а тег <p>
    if (input.nextElementSibling) {
        //логика очистка
        if (input.closest('.form__field')) {
            input.closest('.form__field').removeChild(input.nextElementSibling)
            input.parentElement.classList.remove('invalid')
        }
        if (input.closest('.modal__field')) {
            console.log(input.nextElementSibling);
            input.closest('.modal__field').removeChild(input.nextElementSibling)
            input.parentElement.classList.remove('invalid')
        }
    }
}
// Field is required
// Field is required (at least: "@" symbol)
// Field is required (at least: 1 uppercase letter and 1 digit)