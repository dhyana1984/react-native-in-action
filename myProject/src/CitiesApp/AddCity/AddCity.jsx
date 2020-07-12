import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import uuid from 'react-native-uuid'
import { colors } from '../theme'
import styles from './AddCity.styles'
import CityContext from '../components/Context';


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

    submit = (addCity) => {
        const { city, country } = this.state
        if (this.state.city === '' || this.state.country === '') {
            alert('Please complete form')
            return
        }
        const cityItem = {
            city,
            country,
            id: uuid.v4(),
            locations: []
        }
        addCity(cityItem)
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
                <CityContext.Consumer>
                    {context =>
                        <TouchableOpacity onPress={() => this.submit(context.addCity)}>
                            <View style={styles.button}>
                                <Text style={styles.buttonText}>Add City</Text>
                            </View>
                        </TouchableOpacity>
                    }
                </CityContext.Consumer>
            </View>
        )
    }
}