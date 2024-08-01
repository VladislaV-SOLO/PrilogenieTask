import { Storage } from "../core/storage.js"


export const renderConfirmModal = (todoId) => {
    const todo = Storage.getPostInfo(todoId)

    return `<div class="modal-container modal-container_confirm">
    <h2 class="modal__notice">Are you sure you want to delete <span class="modal__notice-name">${todo.title}</span> item from list</h2>
    <div class="modal__actions">
        <button class="modal__btn btn modal__actions-btn modal__actions-btn_agree" type="submit">yes</button>
        <button class="modal__btn btn modal__actions-btn modal__actions-btn_disagree" type="submit">no</button>
    </div>
</div>`
}