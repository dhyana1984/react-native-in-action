import React from 'react'
import { Button, ScrollView, View, Text, DeviceEventEmitter } from 'react-native'
import CenterMessage from '../components/CenterMessage'
import { colors } from '../theme'
import { TouchableOpacity } from 'react-native-gesture-handler'
import styles from './Cities.style'
import CityContext from '../components/Context';

export default class Cities extends React.Component {

    navigate = (item) => {
        this.props.navigation.navigate('City', { city: item })
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            //通过CityContext.Consumer使用CityContext，在此传如的context即为全局传递的内容
            <CityContext.Consumer>{
                context =>
                    <ScrollView contentContainerStyle={[!context.cities.length && { flex: 1 }]}>
                        <View style={[!context.cities.length && { justifyContent: 'center', flex: 1 }]}>
                            {
                                !context.cities.length && <CenterMessage message="No saved city!" />
                            }
                        </View>{
                            context.cities.map((item, index) => (
                                <TouchableOpacity onPress={() => this.navigate(item)} key={index}>
                                    <View style={styles.cityContainer}>
                                        <Text style={styles.city}>{item.city}</Text>
                                        <Text style={styles.country}>{item.country}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))
                        }
                    </ScrollView>}
            </CityContext.Consumer>
        )
    }
}