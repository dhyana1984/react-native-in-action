import React from 'react';
import {
    StyleSheet,
    View,
    Animated
} from 'react-native';

export default class Stagger extends React.Component {
    constructor() {
        super()
        this.animatedValues = []
        for (let i = 0; i < 1000; i++) {
            this.animatedValues[i] = new Animated.Value(0)
        }

        this.animations = this.animatedValues.map(value => {
            return Animated.timing(
                value,
                {
                    toValue: 1,
                    duration: 6000,
                    useNativeDriver: true //使用原生线程执行动画
                }
            )
        })
    }

    animate = () => {
        //stagger第一个参数是间隔时间，第二个参数是动画数组
        //每隔一个间隔时间，执行下一个动画
        Animated.stagger(50, this.animations).start()
    }

    componentDidMount() {
        this.animate()
    }

    render() {
        return (
            <View style={styles.container}>
                {
                    this.animatedValues.map((value, index) =>
                        <Animated.View key={index} style={[{ opacity: value }, styles.box]} />
                    )
                }
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    box: {
        width: 15,
        height: 15,
        margin: .5,
        backgroundColor: 'red'
    }
})