import React from 'react'
import { Button, View, Text, ScrollView, TouchableOpacity, TextInput, TouchableWithoutFeedback } from 'react-native'
import CenterMessage from '../components/CenterMessage'
import { colors } from '../theme'
import CityContext from '../components/Context';
import styles from './City.style'
import AsyncStorage from '@react-native-community/async-storage';

export default class City extends React.Component {
    //设置了contextType = CityContext，this.context就指向CityContext
    static contextType = CityContext
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            info: ''
        }
    }

    onChangeText = (key, value) => {
        this.setState({
            [key]: value
        })
    }

    addLocation = () => {
        //调用CityContext
        const context = this.context
        const { name, info } = this.state
        if (name === '' || info === '') return
        //navigation.navigate传过来的参数在this.props.route.params里面
        const { city } = this.props.route.params
        const location = {
            name,
            info
        }
        context.addLocation && context.addLocation(location, city)
        this.setState({ name: '', info: '' })
    }

    render() {
        const { city } = this.props.route.params
        return (
            <View style={{ flex: 1 }}>
                <ScrollView contentContainerStyle={[!city.locations.length && { flex: 1 }]}>
                    <View
                        style={[
                            styles.locationsContainer,
                            !city.locations.length && { flex: 1, justifyContent: 'center' }
                        ]}>
                        {
                            !city.locations.length && <CenterMessage message="No location for this city!" />
                        }
                        {
                            city.locations.map((location, index) =>
                                <View key={index} style={styles.locationContainer}>
                                    <Text style={styles.locationName}>{location.name}</Text>
                                    <Text style={styles.locationInfo}>{location.info}</Text>
                                </View>
                            )
                        }
                    </View>
                </ScrollView>
                <TextInput
                    onChangeText={val => this.onChangeText('name', val)}
                    placeholder="Location Name"
                    value={this.state.name}
                    style={styles.input}
                    placeholderTextColor="white"
                />
                <TextInput
                    onChangeText={val => this.onChangeText('info', val)}
                    placeholder="Location Info"
                    value={this.state.info}
                    style={[styles.input, styles.input2]}
                    placeholderTextColor="white"
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={this.addLocation}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}> Add Location</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}