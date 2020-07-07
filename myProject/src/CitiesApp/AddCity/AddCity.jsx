import React from 'react'
import { View, Text, TextInput, TouchableOpacity, DeviceEventEmitter } from 'react-native';
import uuidV4 from 'uuidv4'
import { colors } from '../theme'
import styles from './AddCity.styles'

export default class AddCity extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            city: '',
            country: '',

        }
    }

    onChangeText = (key, value) => {
        this.setState({ [key]: value })
    }

    submit = () => {
        const { city, country } = this.state
        if (this.state.city === '' || this.state.country === '') {
            alert('Please complete form')
            return
        }
        const cityItem = {
            city,
            country,
            id: uuidV4,
            locations: []
        }
        const { addCity, cities } = this.props.route.params.screenProps
        addCity(cityItem)
        DeviceEventEmitter.emit('AddCity', cityItem);
        this.setState({
            city: '',
            country: '',
        }, () => {
            this.props.navigation.navigate('Cities')
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.heading}>Cities</Text>
                <TextInput
                    placeholder='City name'
                    onChangeText={val => this.onChangeText('city', val)}
                    style={styles.input}
                    value={this.state.city}
                />
                <TextInput
                    placeholder='Country name'
                    onChangeText={val => this.onChangeText('country', val)}
                    style={styles.input}
                    value={this.state.country}
                />
                <TouchableOpacity onPress={this.submit}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Add City</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}