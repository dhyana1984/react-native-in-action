import { StyleSheet } from 'react-native'

export default styles = StyleSheet.create({
    container: {
        flex: 1
    },
    title: {
        paddingTop: 40,
        paddingBottom: 20,
        fontSize: 20,
        textAlign: 'center'
    },
    booksContainer: {
        borderTopWidth: 1,
        borderTopColor: '#ddd',
        flex: 1
    },
    book: {
        padding: 20
    },
    name: {
        fontSize: 18
    },
    author: {
        fontSize: 14,
        color: '#999'
    },
    inputContainer: {
        padding: 10,
        backgroundColor: '#ffffff',
        borderTopColor: '#ededed',
        borderTopWidth: 1,
        flexDirection: 'row',
        height: 100,
        marginBottom: 20
    },
    input: {
        height: 44,
        padding: 7,
        backgroundColor: '#ededed',
        borderColor: '#ddd',
        borderWidth: 1,
        borderRadius: 10,
        flex: 1,
        marginBottom: 5
    },
    inputWarrper: {
        flex: 1
    },
    addButtonContainer: {
        width: 80,
        height: 80,
        backgroundColor: '#ededed',
        marginLeft: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    addButton: {
        fontSize: 28,
        lineHeight: 28
    }
})