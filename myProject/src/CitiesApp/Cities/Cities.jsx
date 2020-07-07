import React from 'react'
import { Button, ScrollView, View, Text, DeviceEventEmitter } from 'react-native'
import CenterMessage from '../components/CenterMessage'
import { colors } from '../theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './Cities.style'

export default class Cities extends React.Component {

    static navigationOptions = {
        title: "Cities",
        headerTitleStyle: {
            color: 'white',
            fontSize: 20,
            fontWeight: '400'
        }
    }

    navigate = (item) => {
        this.props.navigation.navigate('City', { city: item })
    }

    constructor(props) {
        super(props)
        this.state = {
            cities: []
        }

        this.focusListener = props.navigation.addListener(
            'didFocus',
            () => {
                const { screenProps: { cities } } = props.route.params
                this.setState({ cities })
            })
    }

    updateCity = (city, that) => {
        that.setState({ cities: that.state.cities.push(city) })
    }

    render() {
        const { cities } = this.state
        return (
            <ScrollView contentContainerStyle={[!cities.length && { flex: 1 }]}>
                <View style={[!cities.length && { justifyContent: 'center', flex: 1 }]}>
                    {
                        !cities.length && <CenterMessage message="No saved city!" />
                    }
                </View>
                {
                    cities.map((item, index) => (
                        <TouchableOpacity onPress={() => this.navigate(item)} key={index}>
                            <View style={styles.cityContainer}>
                                <Text style={styles.city}>{item.city}</Text>
                                <Text style={styles.country}>{item.country}</Text>
                            </View>
                        </TouchableOpacity>
                    ))
                }
            </ScrollView>

        )
    }
}