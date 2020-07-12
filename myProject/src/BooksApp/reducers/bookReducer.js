import { ADD_BOOK, REMOVE_BOOK, EDIT_BOOK } from '../actions'
import uuid from 'react-native-uuid'

//初始state
const initialState = {
    books: [{
        name: 'East of Eden',
        author: 'John Steinbeck',
        id: uuid.v4()
    }]
}

//接受state参数并且返回state参数，默认返回初始化的state
//第二个参数是action，包括要执行的action常量命令和数据
//这里监听的action，实际上就是页面上connect(mapStateToProps, mapDispatchToProps)(Books)中mapDispatchToProps内定义的函数的返回值
export default bookReducer = (state = initialState, action) => {
    switch (action.type) {
        //如果action命令是添加book,那就返回一个包含新添加book的新数组
        case ADD_BOOK:
            return {
                books: [
                    ...state.books,
                    action.book
                ]
            }
        //从一个数组中删除某个元素
        case REMOVE_BOOK:
            //查找要删除的项的index
            const index = state.books.findIndex(t => t.id === action.book.id)
            return {
                books: [
                    //留下从0到index-1的项
                    ...state.books.slice(0, index),
                    //留下从index+1到最后一项
                    ...state.books.slice(index + 1)
                ]
            }
        case EDIT_BOOK:
            const book = state.books.find(t => t.id === action.book.id)
            book.name = action.book.name
            book.author = action.book.author
            return state
            
        //如果action语句都不匹配，就返回原始state
        default:
            return state
    }
}