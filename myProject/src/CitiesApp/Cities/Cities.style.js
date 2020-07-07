import { StyleSheet, } from 'react-native'
import { colors } from '../theme'

export default styles = StyleSheet.create({
    cityContainer: {
        padding: 10,
        borderBottomWidth: 2,
        borderBottomColor: colors.primary
    },
    city: {
        fontSize: 20
    },
    country: {
        color: "rgba(0,0,0,.5)"
    }
})