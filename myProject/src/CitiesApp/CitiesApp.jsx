import React from 'react'
import Tabs from './AppNavigator'
import CityContext from './components/Context';
import AsyncStorage from '@react-native-community/async-storage'

export default class CitiesApp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cities: [{
                city: "Shanghai",
                country: "China",
                id: 1,
                locations: [{
                    name: 'Lu jiazui',
                    info: 'Financial Center'
                }, {
                    name: 'Wu Jiaochang',
                    info: 'Business Center'
                }]
            }, {
                city: "Tokyo",
                country: "Japan",
                id: 2,
                locations: []
            },
            ]
        }
    }

    async componentDidMount() {
        try {
            let cities = await AsyncStorage.getItem('state')
            //反序列化对象，保存到state
            cities = JSON.parse(cities)
            this.setState({ cities })
        } catch (e) {
            console.log('error from AsyncStorage: ', e)
        }
    }

    addCity = (city) => {
        const cities = this.state.cities
        cities.push(city)
        this.setState({ cities })
        //序列化对象，然后保存到AsyncStorage
        AsyncStorage.setItem('state', JSON.stringify(cities))
            .then(() => console.log('storage updated!'))
            .catch(e => console.log(`error: ${e}`))

    }

    addLocation = (location, city) => {
        const index = this.state.cities.findIndex(item => {
            return item.id === city.id
        })
        const chosenCity = this.state.cities[index]
        chosenCity.locations.push(location)
        const cities = [
            ...this.state.cities.slice(0, index),
            chosenCity,
            ...this.state.cities.slice(index + 1)
        ]
        this.setState({ cities }, () => {
            AsyncStorage.setItem('state', JSON.stringify(cities))
                .then(() => console.log('storage updated!'))
                .catch(e => console.log(`error: ${e}`))
        })
    }



    render() {
        const screenProps = {
            cities: this.state.cities,
            addCity: this.addCity,
            addLocation: this.addLocation
        }
        return (
            //使用CityContext全局传递state
            <CityContext.Provider value={screenProps} >
                <Tabs />
            </CityContext.Provider>
        )
    }
}