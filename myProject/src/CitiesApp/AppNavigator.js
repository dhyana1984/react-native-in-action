import React from 'react'
import Cities from './Cities/Cities'
import City from './Cities/City'
import AddCity from './AddCity/AddCity'
import { colors } from './theme'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';


//stack navigator的头部的样式
const stackNavigatorOptions = {
    headerStyle: { backgroundColor: colors.primary },
    headerTintColor: '#fff'
}

const tabBarOptions = {
    labelStyle: {
        fontSize: 20,
    },
    tabStyle: {
        width: 100,
    },
}

//公用的 headerTitleStyle
const titleStyle = {
    color: 'white',
    fontSize: 20,
    fontWeight: '400'
}

//Cities的navigationOption
const citiesNavigationOptions = {
    title: "Cities",
    headerTitleStyle: { ...titleStyle }
}

//City的Cities的navigationOption
const getCityNavigationOptions = (params) => {
    const city = params?.city
    return {
        title: city?.city,
        headerTitleStyle: { ...titleStyle }
    }
}

//screen都要通过方法来传入navigator的component属性
const getCities = (props) => <Cities {...props} />
const getCity = (props) => <City {...props} />
const getAddCity = (props) => <AddCity {...props} />

//建立stackNavigator
const CitiesNav = createStackNavigator()

const CitiesStack = () =>
    //screenOptions直接传入object
    //在stackNavigator中加入具体的Screen
    <CitiesNav.Navigator screenOptions={stackNavigatorOptions} >
        <CitiesNav.Screen
            name='Cities'
            component={getCities}
            //navigationOptions直接在此传入screen的options属性
            options={citiesNavigationOptions}
        />
        <CitiesNav.Screen
            name='City'
            component={getCity}
            //传入解构的route对象，在页面中navigate('screen', params)中的params在route.params中
            options={({ route }) => getCityNavigationOptions(route.params)}
        />
    </CitiesNav.Navigator>

//建立BottomTabNavigator
const TabsNav = createBottomTabNavigator()

const TabsBottom = () =>
    <TabsNav.Navigator tabBarOptions={tabBarOptions}>
        {/*在BottomNavigator的一个按钮中添加stackNavigator */}
        <TabsNav.Screen
            name='Cities'
            component={CitiesStack}

        >
        </TabsNav.Screen>
        {/*在BottomNavigator的另一个按钮中添加AddCityScreen */}
        <TabsNav.Screen
            name='AddCity'
            component={getAddCity}
        />
    </TabsNav.Navigator>

export default Tabs = () =>
    <NavigationContainer>
        <TabsBottom />
    </NavigationContainer>




