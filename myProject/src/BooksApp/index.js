import React from 'react'
import Books from './Books'
import rootReducer from './reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

//createStore通过传入rootReducer来创建Redux store
const store = createStore(rootReducer)

export default class BooksApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                {/* 返回包裹在Provide的组件中的Books组件。将store作为属性传递给Provider */}
                <Books />
            </Provider>
        )
    }
}