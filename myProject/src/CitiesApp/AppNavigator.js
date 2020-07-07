import React from 'react'
import Cities from './Cities/Cities'
import City from './Cities/City'
import AddCity from './AddCity/AddCity'
import { colors } from './theme'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';


const options = {
    navigationOptions: {
        headStyle: {
            backGroundColor: colors.primary
        },
        headerTintColor: '#fff'
    }
}

const getCities = (props) => <Cities {...props} />
const getCity = (props) => <City {...props} />
const getAddCity = (props) => <AddCity {...props} />

const CitiesNav = createStackNavigator()

const CitiesStack = (props) =>
    <CitiesNav.Navigator screenOptions={options}>
        <CitiesNav.Screen
            name='Cities'
            component={getCities}
            initialParams={{ screenProps: props.screenProps }}
        />
        <CitiesNav.Screen
            name='City'
            component={getCity}
            initialParams={{ screenProps: props.screenProps }}
        />
    </CitiesNav.Navigator>


const TabsNav = createBottomTabNavigator()

const TabsBottom = (props) =>
    <TabsNav.Navigator>
        <TabsNav.Screen
            name='Cities'
        >
            {() => CitiesStack(props)}
        </TabsNav.Screen>
        <TabsNav.Screen
            name='AddCity'
            component={getAddCity}
            initialParams={{ screenProps: props.screenProps }}
        />
    </TabsNav.Navigator>

export default Tabs = (props) =>
    <NavigationContainer>
        <TabsBottom
            {...props}
        />
    </NavigationContainer>




