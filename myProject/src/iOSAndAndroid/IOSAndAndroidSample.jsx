import React from 'react'
//这里直接import'./Text/MyText', rn会根据platform自动判断load MyText.android.jsx还是MyText.ios.jsx
import MyText from './Text/MyText'
import { View, Platform } from 'react-native'

export default class IOSAndAndroidSample extends React.Component {
    render() {
        return (
            <>
                <MyText />
                <View
                    style={{
                        height:100,
                        width:100,
                        marginBottom:200,
                        alignSelf:'center',
                        //通过Platform.select在不同的plaform下解构配置属性
                        ...Platform.select({
                            ios:{
                                backgroundColor:'green'
                            },
                            android:{
                                backgroundColor:'yellow'
                            }
                        })
                    }}
                >
                </View>
            </>
        )
    }
}