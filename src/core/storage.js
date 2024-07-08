import { notification } from "../index.js";

export class Storage {

    static createNewUser(userData) {
        // const user = {
        //     id: 1,
        //     name: 'Vlad',
        //     email: 'vlad@.ru',
        //     password: '1Q'
        // }


        if (!localStorage.getItem('users')) {
            localStorage.setItem('users', JSON.stringify([userData]))
        } else {
            //проверяем существует ли такой пользователь
            if (checkUserExist(userData)) {
                //если пользователя нет - выходим из функции и ничего не создаем
                //вызов уведомление о том, что такой пользователь уже существует
                notification.show('This use already exist')
                return
            }
            //иначе записываем в localStorage уже существующих пользователей + добавляем новых
            const existUsers = JSON.parse(localStorage.getItem('users'))
            localStorage.setItem('users', JSON.stringify([...existUsers, userData]))
        }

        //вызов уведомления о создании пользователя
        notification.show('Account is created')

        // const value = JSON.parse(localStorage.getItem('users'))

        // console.log(value);
    }
}

function checkUserExist(userData) {
    let isUser = false
    // получаем уже существующих пользователей и массив пользователей
    const existUsers = JSON.parse(localStorage.getItem('users'))
    // в массиве делаем проверку на соответсвие значений userName и email
    existUsers.forEach(({ name, email}) => {

        if (name === userData.name && email === userData.email) {
            //если результат if будет true - значит такой пользователь есть
            // поэтому меняв значение переменной isUser на true
            isUser(true)
            // isUser = true
        }
    })
    return isUser
}

