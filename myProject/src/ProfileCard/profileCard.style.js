import { StyleSheet, Platform } from 'react-native'


const profileCardColor = 'dodgerblue'
export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    cardContainer: {
        alignItems: 'center',
        borderColor: 'black',
        borderWidth: 3,
        borderStyle: 'solid',
        borderRadius: 20,
        backgroundColor: profileCardColor,
        width: 300,
        height: 400,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {
                    height: 10
                },
                shadowOpacity: 1
            },
            android: {
                elevation: 15
            }
        })
    },
    cardImageContainer: {
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
        borderWidth: 3,
        borderColor: 'black',
        width: 120,
        height: 120,
        borderRadius: 60,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: {
                    height: 10
                },
                shadowOpacity: 1
            },
            android: {
                borderWidth: 3,
                borderColor: 'black',
                elevation: 15
            }
        })
    },
    cardImage: {
        width: 60,
        height: 60
    },
    cardName: {
        color: 'white',
        marginTop: 30,
        fontWeight: 'bold',
        fontSize: 24,
        textShadowColor: 'black',
        textShadowOffset: {
            height: 2,
            width: 2
        },
        textShadowRadius: 3
    },
    cardOccupationContainer: {
        borderColor: 'black',
        borderBottomWidth: 3,
    },
    cardOccupation: {
        marginVertical: 5,
        fontWeight: 'bold',
    },
    cardDescription: {
        marginVertical: 10,
        marginHorizontal: 40,
        ...Platform.select({
            android: { fontFamily: 'monospace' },
            ios: { fontFamily: 'American Typewriter' },
        })
        //等价于
        //fontFamily: Platform.OS === 'ios' ? 'American Typewriter' : 'monospace'
    },
    cardThumbnail: {
        transform: [{ scale: 0.2 }]
    }
})