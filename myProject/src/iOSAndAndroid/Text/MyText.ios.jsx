import React from 'react'
import { Text, View } from 'react-native'

export default class MyText extends React.Component {

    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>this is iOS</Text>
            </View>
        )
    }
}