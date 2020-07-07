import { StyleSheet } from 'react-native'
import { colors } from '../theme'

export default styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1,
        justifyContent: 'center'
    },
    heading: {
        color: 'white',
        fontSize: 40,
        marginBottom: 10,
        alignSelf: 'center'
    },
    input: {
        margin: 10,
        backgroundColor: 'white',
        paddingHorizontal: 8,
        height: 50
    },
    button: {
        height: 50,
        backgroundColor: '#666',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 18
    }
})