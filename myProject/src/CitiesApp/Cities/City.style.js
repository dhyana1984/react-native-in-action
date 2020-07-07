import { StyleSheet, } from 'react-native'
import { colors } from '../theme'

export default styles = StyleSheet.create({
    locationsContainer: {
        paddingBottom: 104
    },
    locationContainer: {
        padding: 10,
        borderBottomColor: colors.primary,
        borderBottomWidth: 2
    },
    locationName: {
        fontSize: 20
    },
    locationInfo: {
        color: 'rgba(0, 0, 0, .5)'
    },
    input: {
        height: 50,
        backgroundColor: colors.primary,
        color: 'white',
        paddingHorizontal: 8,
        position: 'absolute',
        width: '100%',
        bottom: 104,
        left: 0
    },
    input2: {
        bottom: 52
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%'
    },
    button: {
        height: 50,
        backgroundColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white'
    },
})