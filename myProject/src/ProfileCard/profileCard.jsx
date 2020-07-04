import React from 'react'
import { View, Image, Text } from 'react-native'
import styles from './profileCard.style'

export default class DarkLightMode extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.cardContainer}>
                    <View style={styles.cardImageContainer}>
                        <Image
                            style={styles.cardImage}
                            source={require('./user.jpeg')}
                        />
                    </View>
                    <View>
                        <Text style={styles.cardName}>John Doe</Text>
                    </View>
                    <View style={styles.cardOccupationContainer}>
                        <Text style={styles.cardOccupation}>Full Stack Developer</Text>
                    </View>
                    <View>
                        <Text style={styles.cardDescription}>
                            John is a really great JavaScript developer and .Net developer.He 
                            loves using JS to build React Native application.
                        </Text> 
                    </View>
                </View>
            </View>)
    }
}