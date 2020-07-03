import { StyleSheet, } from 'react-native'

export const Colors = {
    dark: 'black',
    light: 'white'
}

const baseContainerStyles = {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
}

const baseBoxStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    height: 150,
    width: 150
}


const lightStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.light
    },
    box: {
        ...baseBoxStyles,
        backgroundColor: Colors.dark
    }
})

const darkStyleSheet = StyleSheet.create({
    container: {
        ...baseContainerStyles,
        backgroundColor: Colors.dark
    },
    box: {
        ...baseBoxStyles,
        backgroundColor: Colors.light
    }
})

export default getStyleSheet = (useDarkTheme) => {
    return useDarkTheme ? darkStyleSheet : lightStyleSheet
}