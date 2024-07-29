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
            const existUsers = getAllUsersFromLocalStorage()
            localStorage.setItem('users', JSON.stringify([...existUsers, userData]))
        }

        //вызов уведомления о создании пользователя
        notification.show('Account is created')
        return userData.id;

        // const value = JSON.parse(localStorage.getItem('users'))

        // console.log(value);
    }

    static enterTodoList(login) {
        const existUsers = getAllUsersFromLocalStorage()
        const user = existUsers.find(({name, password}) => {
            return name === login.name && password === login.password
        })
        if (user) {
            notification.show('Successfull authorization')
            return user.id
        } else {
            notification.show('Incorrect login or password')
        }
    }

    static getUserData() {
        return findUserData()
    }

    static createPost(postData) {
        const existUsers = getAllUsersFromLocalStorage()
        const currentUser = findUserData()
        const updateUser = {
            ...currentUser,
            todoList: [...currentUser.todoList, postData]
        }
        updateLocalStorage(updateUser)
        notification.show('Post created')
    }

    static getPostInfo(todoId) {
        const currentUser = findUserData()
        // console.log(currentUser);
        return currentUser.todoList.find(item => Number(item.id) === Number(todoId))
    }

    static removeTodo(todoId) {
        const existUsers = getAllUsersFromLocalStorage()
        const currentUser = findUserData()
        const upDateUserPosts = currentUser.todoList.filter((todo) => Number(todo.id) !== Number(todoId))
        console.log(upDateUserPosts);
        const updateUser = {
            ...currentUser,
            todoList: upDateUserPosts
        }
        updateLocalStorage(updateUser)
    }

}

function checkUserExist(userData) {
    let isUser = false
    // получаем уже существующих пользователей и массив пользователей
    const existUsers = getAllUsersFromLocalStorage()
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

function getAllUsersFromLocalStorage() {
    const existUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : []
    return existUsers
}


function findUserData() {
    const userId = JSON.parse(localStorage.getItem('selectedUserId'))
    if (userId) {
        const users = getAllUsersFromLocalStorage()
        return users.find((user) => {
            return user.id === userId
        })
    }
}

function updateLocalStorage(updateUser) {
    const existUsers = getAllUsersFromLocalStorage()
    const currentUser = findUserData()
    const indexCurrentUser = existUsers.findIndex((user) => user.id === currentUser.id)
    const updateUsersArray = [...existUsers.slice(0, indexCurrentUser), updateUser, ...existUsers.slice(indexCurrentUser + 1)]
    localStorage.setItem('users', JSON.stringify(updateUsersArray))
}