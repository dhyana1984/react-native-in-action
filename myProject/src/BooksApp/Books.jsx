import React from 'react'
import {
    Text,
    View,
    ScrollView,
    TextInput,
    TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'
import styles from './Books.style'
import { addBook, removeBook } from './actions'

//初始的state
const initialState = {
    name: '',
    author: ''
}

class Books extends React.Component {

    state = initialState

    updateInput = (key, value) => {
        this.setState({
            ...this.state,
            [key]: value
        })
    }

    addBook = () => {
        //dispatchAddBook可以作为connect函数属性进行访问的函数，此函数接受整个state作为参数
        this.props.dispatchAddBook(this.state)
        //清空当前state的值
        this.setState(initialState)
    }

    removeBook = book => {
        this.props.dispatchRemoveBook(book)
    }

    render() {
        const { books } = this.props
        return (
            <View style={styles.container}>
                <Text style={styles.title}>Books</Text>
                <ScrollView
                    keyboardShouldPersistTaps='always'
                    style={styles.booksContainer}
                >{
                        books.map((book, index) =>
                            <View style={styles.book} key={index}>
                                <Text style={styles.name}>{book.name}</Text>
                                <Text style={styles.author}>{book.author}</Text>
                                <Text onPress={() => this.removeBook(book)}>Remove</Text>
                            </View>
                        )}
                </ScrollView>
                <View style={styles.inputContainer}>
                    <View style={styles.inputWarrper}>
                        <TextInput
                            value={this.state.name}
                            onChangeText={value => this.updateInput('name', value)}
                            style={styles.input}
                            placeholder="Book Name"
                        />
                        <TextInput
                            value={this.state.author}
                            onChangeText={value => this.updateInput('author', value)}
                            style={styles.input}
                            placeholder="Author Name"
                        />
                    </View>
                    <TouchableOpacity onPress={this.addBook}>
                        <View style={styles.addButtonContainer}>
                            <Text style={styles.addButton}>+</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}


//mapStateToProps是一个函数，返回一个对象
//mapStateToProps 的作用是将Redux state映射到组件的属性中，其中state参数是就是Redux state
//返回的对象就是Books页面的props所包含的一个对象
const mapStateToProps = state => ({ books: state.bookReducer.books })

//mapDispatchToPropsde是一个对象
//mapDispatchToPropsde 的作用是将action函数直接映射到组件的属性中
const mapDispatchToProps = {
    dispatchAddBook: book => addBook(book),
    dispatchRemoveBook: book => removeBook(book)
}

//connect第一个参数就是将redux state内容作为结果返回给当前页面的props
//connect第二个参数就是当前页面的class
export default connect(mapStateToProps, mapDispatchToProps)(Books)

