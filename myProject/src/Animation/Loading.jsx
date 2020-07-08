
import React from 'react';
import {
    Easing,
    StyleSheet,
    View,
    Animated,
    Button,
    TextInput,
    Text
} from 'react-native';

export default class Loading extends React.Component {

    state = {
        loading: true
    }

    animatedRotation = new Animated.Value(0)

    animate = () => {
        Animated.loop(
            Animated.timing(
                this.animatedRotation,
                {
                    toValue: 1,
                    duration: 1800,
                    easing: Easing.linear //连续平滑变换
                }
            )).start()
    }

    componentDidMount() {
        this.animate()
    }

    render() {
        //interpolate函数传入一组inputRange和outputRange
        //表示将传入<Animated.Image的style的transform值0 mapping到'0deg'，1 mapping到'360deg'
        //但是 Animated.timing里面的toValue还是数字1
        const rotation = this.animatedRotation.interpolate({
            inputRange: [0, 1],
            outputRange: ['0deg', '360deg']
        })

        const { loading } = this.state
        return (
            <View style={styles.container}>
                {
                    loading ?
                        <Animated.Image
                            source={require("./loading.png")}
                            style={{
                                width: 40,
                                height: 40,
                                transform: [{ rotate: rotation }]
                            }}
                        /> :
                        <Text>Welcome</Text>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        paddingTop: 50,
    },
    input: {
        height: 50,
        marginHorizontal: 15,
        backgroundColor: '#ededed',
        marginTop: 10,
        paddingHorizontal: 9,
    },
})