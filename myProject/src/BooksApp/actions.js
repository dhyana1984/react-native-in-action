export const ADD_BOOK = 'ADD_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'
export const EDIT_BOOK = 'EDIT_BOOK'

import uuid from 'react-native-uuid'

//action就是一些返回对象的函数
const addBook = book => {
    return {
        type: ADD_BOOK,
        book: {
            ...book,
            id: uuid.v4()
        }
    }
}

const removeBook = book => {
    return {
        type: REMOVE_BOOK,
        book
    }
}

const editBook = book => {
    return {
        type: EDIT_BOOK,
        book
    }
}

export { addBook, removeBook, editBook }