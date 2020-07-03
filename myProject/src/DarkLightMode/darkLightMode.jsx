import React from 'react'
import { Button, StyleSheet, View, Text } from 'react-native'
import getStyleSheet from './darkLightMode.style.js'

export default class DarkLightMode extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            darkTheme: false
        }
    }

    toggleTheme = () => {
        this.setState({ darkTheme: !this.state.darkTheme })
    }

    render() {
        const styles = getStyleSheet(this.state.darkTheme)
        const backgroundColor = StyleSheet.flatten(styles.container).backgroundColor
        return (
            <View style={styles.container}>
                <View style={styles.box}>
                    <Button
                        title={backgroundColor}
                        onPress={this.toggleTheme}
                    />
                </View>
            </View>
        )
    }
}