export const ADD_BOOK = 'ADD_BOOK'
export const REMOVE_BOOK = 'REMOVE_BOOK'
import { uuid } from 'uuidv4'

//action就是一些返回对象的函数
const addBook = book => {
    return {
        type: ADD_BOOK,
        book: {
            ...book,
            id: uuid()
        }
    }
}

const removeBook = book => {
    return {
        type: REMOVE_BOOK,
        book
    }
}

export { addBook, removeBook }